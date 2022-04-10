import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../component/searchBar';
import Result from '../component/results';
import { useSearchParams } from "react-router-dom";
import Filter from '../component/filter';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FilterAction, SearchAction } from '../actions';


const SnbContainer = styled.div`
    width: 70%;
    margin-left: 10%;
    margin-right: 10%;
    height: 100vh;
    border-left:1px solid grey;
    border-right: 1px solid grey;
    padding:20px;
    @media only screen and (max-width: 790px) {
        font-size:12px;
  }
  @media only screen and (max-width: 600px) {
        font-size:10px;
        padding:15px;
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


const SNB  = (props) =>{
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const filterResult = useSelector((state) => state.FilterResult);
    const searchText = searchParams.get('q');

    const FetchResult = (searchText) =>{
        let filterObj = {};
        for (const entry of searchParams.entries()) {
            const [param, value] = entry;
            filterObj[param] = value;
        }
        if(searchText){
            filterObj['q'] = searchText;
        }
        if(Object.keys(filterObj).length > 0)           //Cally  only when there is any filter
            dispatch(SearchAction(filterObj));
    }

    useEffect(() =>{
        dispatch(FilterAction());
        FetchResult();
    },[])

    return (
        <SnbContainer>
            <Search searchText={searchText? searchText:''} FetchResult={FetchResult}/>
            <Wrapper>
                {(Object.keys(filterResult).length > 0) ? <Filter FetchResult={FetchResult} /> : null}
                <Result />
            </Wrapper>
        </SnbContainer>
    );
}

export default SNB;