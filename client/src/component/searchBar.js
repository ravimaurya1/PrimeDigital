import React,{useState} from 'react';
import SearchBar,{SearchIcon} from 'material-ui-search-bar';
import {connect} from 'react-redux';
import {SearchAction} from '../actions/index';


const Search = (props) =>{
    const [searchText, setSearchText] = useState('');
    const requestSearch = () =>{
        props.SearchAction(searchText);
    }

    return (
        <SearchBar 
            value={searchText}
            onChange={(newValue) => setSearchText(newValue)}
            onRequestSearch={requestSearch}
        />
    );
}

const mapDispatchToProps = (dispatch) => ({
    SearchAction: (text) => dispatch(SearchAction(text))
})

export default connect(null,mapDispatchToProps)(Search);