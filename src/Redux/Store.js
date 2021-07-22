import rootReducer from "./Reducers"
import { createStore,applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    blacklist: ['AuthReducer','CartReducer','ProductReducer','CategoriesReducer']
  }
  
const middleware = [thunk];
const initialState = {};
const applied = composeWithDevTools (applyMiddleware(...middleware)); 
const persistReducers=persistReducer(persistConfig,rootReducer)
const storefig = createStore(persistReducers,initialState,applied);

export const store=storefig;
export const persitor=persistStore(store)
