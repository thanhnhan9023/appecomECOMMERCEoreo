import rootReducer from "./Reducers"
import { createStore,applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const middleware = [thunk];
const initialState = {};
const applied = composeWithDevTools ( applyMiddleware(...middleware) ); 
const store = createStore(rootReducer,initialState,applied);
export default store;