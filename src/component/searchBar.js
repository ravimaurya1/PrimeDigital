import React, {useState, useEffect} from 'react';
import SearchBar, {SearchIcon} from 'material-ui-search-bar';
import {useDispatch} from 'react-redux';
import {SearchAction} from '../actions/index';
import {useSearchParams} from "react-router-dom";
import styled from 'styled-components';


const SearchBarWrapper = styled.div `
    margin: 30px ;
`;


const Search = (props) => {
    const [searchText, setSearchText] = useState(props.searchText);
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const requestSearch = () => {
        if (searchText) {
            searchParams.set('q', searchText);
            setSearchParams(searchParams);
            props.FetchResult(searchText);
        }
    }

    return (<SearchBarWrapper>
        <SearchBar value={searchText}
            onChange={
                (newValue) => setSearchText(newValue)
            }
            onRequestSearch={requestSearch}/>
    </SearchBarWrapper>);
}

export default Search;
