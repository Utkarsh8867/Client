// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Example of a reducer

const rootReducer = combineReducers({
  auth: authReducer, // Add your reducers here
});

export default rootReducer;
