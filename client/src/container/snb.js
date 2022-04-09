import React,{useEffect} from 'react';
import {connect} from 'react-redux';


const SNB  = (props) =>{
    const onClickHandler = () =>{
        props.testFunc();
    }
    return (
        <>
            <div>SNB page</div>
            <button onClick={onClickHandler}>Click me </button>
            <div>{props.test}</div>
        </>
    );
}

const mapStateToProps = state => ({
    test: state.test
});

const mapDispatchToProps = (dispatch) => ({
    testFunc: () => dispatch({type:'test'})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SNB);