const Search = (state = [], action) => {
    if (action.type === 'searchResult') {
        return action.payload;
    } else {
        return state;
    }
}

export default Search;
