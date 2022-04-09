import React,{useState,useEffect} from 'react';
import SearchBar,{SearchIcon} from 'material-ui-search-bar';
// import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import {SearchAction} from '../actions/index';
import { useSearchParams } from "react-router-dom";


const Search = (props) =>{
    const [searchText, setSearchText] = useState(props.searchText);
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const requestSearch = () =>{
        if(searchText){
        searchParams.set('q',searchText);
        setSearchParams(searchParams);
        props.FetchResult(searchText);
        }
    }

    return (
        <SearchBar 
            value={searchText}
            onChange={(newValue) => setSearchText(newValue)}
            onRequestSearch={requestSearch}
        />
    );
}

export default Search;