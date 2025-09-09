import { createStore } from 'redux';

// Simple initial state
const initialState = {
  user: null,
  cart: [],
};

// Simple reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'CLEAR_USER':
      return { ...state, user: null };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;