import { createStore } from 'redux';
//import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

//This is because I am using more than one middleware
//const middlewares = [logger];

//(This is to modify the store
const store = createStore(
  rootReducer,
  composeWithDevTools(/* applyMiddleware(...middlewares) */)
);

export default store;
