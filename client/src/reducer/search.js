const test =(state=[],action) =>{
    if(action.type === 'test'){
        return [1,2,3];
    }else{
        return state;
    }
}

export default test;