import axios from 'axios';
import {ServerHost} from '../config';


export const SearchAction = (filter) => {
    if(Object.keys(filter).length > 0){
    let url = new URL(`${ServerHost}/planets`);
    let filtersKey = Object.keys(filter);
    filtersKey.forEach((key) => {
        if (key === 'q') {
            url.searchParams.append('q', filter[key]);
        } else {
            let filters = filter[key].split('_'); // Filters can be seperate with _
            filters.forEach((item) => {
                url.searchParams.append(key, item);
            });
        }
    })
    return async (dispatch) => {
        const result = await axios.get(url);
        dispatch({type: 'searchResult', payload: result.data});
    }
    }
    else{
        return ({
            type: 'searchResult',
            payload: []
        });
    }
}

export const FilterAction = () => {
    return async (dispatch) => {
        const colors = await axios.get(`${ServerHost}/colors`);
        const shapes = await axios.get(`${ServerHost}/shapes`);
        const sizes = await axios.get(`${ServerHost}/sizes`);
        dispatch({
            type: 'filterResult',
            payload: {
                colors: colors.data,
                shapes: shapes.data,
                sizes: sizes.data
            }
        });
    }
}
