import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import { useSearchParams, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const FilterWrapper = styled.div`

`;

const extractKey = (data) =>{
    let filterKey = {};
    for(let i = 0; i< data.length;i++){
        filterKey[data[i].id] = false;
    }
    return filterKey ;
}

const extractFilter = (filter) =>{
    const filters = filter.split('_');
    return filters;
}

const CheckBoxes = ({filters,filtername,FetchResult}) =>{
    const isInitialMount = useRef(true);
    let [searchParams, setSearchParams] = useSearchParams();
    const data = useSelector((state) => state.FilterResult[`${filtername}s`]);
    const filterKey = extractKey(data);
    const [filterState,setFilterState] = useState(filterKey);

    useEffect(() =>{
        if(searchParams.get(filtername)){
            const data = extractFilter(searchParams.get(filtername));
            let newFilter = {...filterState}
            for(let i =0;i<=data.length;i++){
                newFilter[data[i]] = true;
            }
            setFilterState(newFilter);
    }
    },[]); 

    useEffect(() =>{
        if(isInitialMount.current) {
            isInitialMount.current = false;
        }else{
            FetchResult();
        }
    },[filterState])


    const HandleChange = (e) =>{
        if(e.target.checked){
            let newFilter = {...filterState};
            newFilter[e.target.dataset.id] = true;
            setFilterState(newFilter);
            if (searchParams.get(filtername)) {
                let colors = searchParams.get(filtername);
                searchParams.set(`${filtername}`,`${colors}_${e.target.dataset.id}`);
                setSearchParams(searchParams);
            } 
            else {
                searchParams.set(`${filtername}`,`${e.target.dataset.id}`);
                setSearchParams(searchParams);
            }
        }else{
            let newFilter = {...filterState};
            newFilter[e.target.dataset.id] = false;
            setFilterState(newFilter);
            let colors = searchParams.get(filtername).split('_');
            if(colors.length === 1){
                searchParams.delete(`${filtername}`);
                setSearchParams(searchParams);
            }else{
                colors.splice(colors.indexOf(e.target.dataset.id),1);
                searchParams.set(`${filtername}`,`${colors.join('_')}`);
                setSearchParams(searchParams);
            }
        }
    }
    return (
        <FilterWrapper>
            {filters.map((filter,index) =>{
               return( <div>
                    <input type="checkbox" data-id={filter.id} onChange={HandleChange} checked={filterState[filter.id]}/>
                    <label>{filter.name}</label>
                </div>
               );
            })}
        </FilterWrapper>      
    );
}

export default CheckBoxes;