import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../component/searchBar';
import './snbStyle.css';


const SNB  = (props) =>{
    const onClickHandler = () =>{
        props.testFunc();
    }
    return (
        <div className='snbContainer'>
            <Search />
            <div>SNB page</div>
            <button onClick={onClickHandler}>Click me </button>
            <div>{props.test}</div>
        </div>
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