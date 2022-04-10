import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useSearchParams, useLocation} from "react-router-dom";
import {useSelector} from 'react-redux';

const FilterWrapper = styled.div `

`;

const extractFilter = (filter) => {
    const filters = filter.split('_');
    return filters;
}

const CheckBoxes = ({filters, filtername}) => {
    const isInitialMount = useRef(true);
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const data = useSelector((state) => state.FilterResult[`${filtername}s`]);
    const extractKey = (data) => {
        let filterKey = {};
        for (let i = 0; i < data.length; i++) {
            filterKey[data[i].id] = false;
        }
        if (searchParams.get(filtername)) {
            const data = extractFilter(searchParams.get(filtername));
            for (let i = 0; i <= data.length; i++) {
                filterKey[data[i]] = true;
            }
        }
        return filterKey;
    }
    const filterKey = extractKey(data);
    const [filterState, setFilterState] = useState(filterKey);

    useEffect(() =>{
        let filterKey = {...filterState};
        Object.keys(filterKey).forEach((key) =>filterKey[key]=false);
        if (searchParams.get(filtername)) {
            const data = extractFilter(searchParams.get(filtername));
            for (let i = 0; i <= data.length; i++) {
                filterKey[data[i]] = true;
            }
        }
        setFilterState(filterKey);
    },[location])

    const HandleChange = (e) => {
        if (e.target.checked) {
            let newFilter = {
                ...filterState
            };
            newFilter[e.target.dataset.id] = true;
            setFilterState(newFilter);
            if (searchParams.get(filtername)) {
                let colors = searchParams.get(filtername);
                searchParams.set(`${filtername}`, `${colors}_${
                    e.target.dataset.id
                }`);
                setSearchParams(searchParams);
            } else {
                searchParams.set(`${filtername}`, `${
                    e.target.dataset.id
                }`);
                setSearchParams(searchParams);
            }
        } else {
            let newFilter = {
                ...filterState
            };
            newFilter[e.target.dataset.id] = false;
            setFilterState(newFilter);
            let colors = searchParams.get(filtername).split('_');
            if (colors.length === 1) {
                searchParams.delete(`${filtername}`);
                setSearchParams(searchParams);
            } else {
                colors.splice(colors.indexOf(e.target.dataset.id), 1);
                searchParams.set(`${filtername}`, `${
                    colors.join('_')
                }`);
                setSearchParams(searchParams);
            }
        }
    }
    return (<FilterWrapper> {
        filters.map((filter, index) => {
            return (<div key={index}>
                <input type="checkbox"
                    data-id={
                        filter.id
                    }
                    onChange={HandleChange}
                    checked={
                        filterState[filter.id]
                    }/>
                <label> {
                    filter.name
                }</label>
            </div>);
        })
    } </FilterWrapper>);
}

export default CheckBoxes;
