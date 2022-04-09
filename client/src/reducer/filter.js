const FilterResult = (state = {}, action) =>{
    if(action.type === 'filterResult'){
        return action.payload;
    }else{
        return state;
    }
}

export default FilterResult;