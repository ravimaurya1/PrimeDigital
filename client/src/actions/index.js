import axios from 'axios';

export const SearchAction = (text) =>{
    return async (dispatch) => {
        const result = await axios.get(`http://localhost:3001/planets/?q=${text}`);
        dispatch({type:'searchResult',payload:result.data});
    }
}

