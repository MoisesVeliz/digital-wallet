import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThux from 'redux-thunk'
import reducer from './reducer';

const configureStore = () => createStore(combineReducers({
   auth: reducer
}), applyMiddleware(ReduxThux));

export default configureStore;