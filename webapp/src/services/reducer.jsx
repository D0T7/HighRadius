import {combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    reducer: userReducer
});

export default rootReducer;