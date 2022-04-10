import {createStore} from 'redux';
import rootreducer from './reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;