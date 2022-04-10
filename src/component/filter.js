import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useSearchParams, useLocation} from "react-router-dom";
import CheckBoxes from './checkboxList';

const FilterWrapper = styled.div `
    width: 25% ;
    height: 100% ;
    border-right: 1px solid #E6E3E2;
    @media only screen and (max-width: 600px) {
        font-size:10px;
        padding-right:15px;
    }
`;

const Filters = styled.div `
    display: flex;
    flex-direction: column;
`;

const Filter = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const filterResult = useSelector((state) => state.FilterResult);

    return (<FilterWrapper>
        <Filters> {
            Object.keys(filterResult).map((element,index) => {
                let filtername = element.slice(0, -1);
                return (<div key={index}>
                    <h4> {element}</h4>
                    <CheckBoxes filters={
                            filterResult[element]
                        }
                        filtername={filtername}
                    />
                </div>);
            })
        } </Filters>
    </FilterWrapper>);
}

export default Filter;
