import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../component/searchBar';
import Result from '../component/results';
import {useSearchParams, useLocation} from "react-router-dom";
import Filter from '../component/filter';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {FilterAction, SearchAction} from '../actions';


const SnbContainer = styled.div `
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

const Wrapper = styled.div `
    display: flex;
    flex-direction: row;
`;


const SNB = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const filterResult = useSelector((state) => state.FilterResult);
    let searchText = searchParams.get('q');

    const FetchResult = (searchText) => {
        let filterObj = {};
        for (const entry of searchParams.entries()) {
            const [param, value] = entry;
            filterObj[param] = value;
        }
        // if (searchText) {
        //     filterObj['q'] = searchText;
        // }  // Cally  only when there is any filter
        dispatch(SearchAction(filterObj));
        
    }

    useEffect(() =>{
        dispatch(FilterAction());
    },[])

    useEffect(() => {
        FetchResult();
        searchText = searchParams.get('q');
    }, [location])

    return (<SnbContainer>
        <Search searchText={
                (searchText || searchText ==='')? searchText : ''
            }
            />
        <Wrapper> {
            (Object.keys(filterResult).length > 0) ? <Filter /> : null
        }
            <Result/>
        </Wrapper>
    </SnbContainer>);
}

export default SNB;
