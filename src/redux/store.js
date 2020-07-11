import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';

const initialState = JSON.parse(localStorage.getItem('todos'));

export default createStore(
  rootReducer,
  initialState,
);
