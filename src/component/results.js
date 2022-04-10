import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from './resultCard';

const ResultContainer = styled.div`
    width: 75%;
`


const Result = () =>{
    const SearchResult = useSelector((state) => state.SearchResult);
    return (
        <ResultContainer>
            {
                SearchResult.map((data,index) =>{
                    return (
                        <Card title={data.name} key={index}/>
                    );
                })
            }
            {SearchResult.length === 0 ? <h4>No Result Found</h4>: null}
        </ResultContainer>

    );
}

export default Result;