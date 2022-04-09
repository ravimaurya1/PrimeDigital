import React,{useState} from 'react';
import SearchBar,{SearchIcon} from 'material-ui-search-bar';
// import {SearchIcon} from '@material-ui/core';

const Search = (props) =>{
    const [searchText, setSearchText] = useState('');
    const onChangeHandler = (e) =>{
        setSearchText(e.target.value);
    }
    const requestSearch = () =>{
        console.log("Search")
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