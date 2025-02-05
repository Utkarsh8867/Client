// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer here

const store = createStore(rootReducer);

export default store;
