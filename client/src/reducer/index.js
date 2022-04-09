import { combineReducers } from "redux";
import SearchResult from './search';
import FilterResult from './filter';

export default combineReducers({
    SearchResult,
    FilterResult
});