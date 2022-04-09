import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ResultContainer = styled.div`
    width: 80%;
`


const Result = () =>{
    const SearchResult = useSelector((state) => state.SearchResult);
    return (
        <ResultContainer>
            {
                SearchResult.map((data) =>{
                    return (
                        <div className='card'>
                            {data.name}
                        </div>
                    );
                })
            }
        </ResultContainer>

    );
}

export default Result;