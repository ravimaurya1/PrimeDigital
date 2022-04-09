import {createStore} from 'redux';
import rootreducer from './reducer';


const store = createStore(rootreducer);

export default store;