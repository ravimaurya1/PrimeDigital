import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useSearchParams, useLocation } from "react-router-dom";
import CheckBoxes from './checkboxList';

const FilterWrapper = styled.div`
    width: 20% ;
`;

const Filters = styled.div`
    display: flex;
    flex-direction: column;
`;

const Filter = ({FetchResult}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const filterResult = useSelector((state) => state.FilterResult);
    
    return (
        <FilterWrapper>
            Filters
            <Filters>
                {Object.keys(filterResult).map(element => {
                    let filtername = element.slice(0, -1);
                    return (
                    <div>
                        <h4>{element}</h4>
                        <CheckBoxes filters={filterResult[element]} filtername={filtername} FetchResult={FetchResult}/>
                    </div>);
                })}
            </Filters>
        </FilterWrapper>
    );
}

export default Filter;