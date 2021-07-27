import {combineReducers} from 'redux'
import  CartReducer  from './CartReducer';
import  AuthReducer  from './AuthReducer';
import  CategoriesReducer  from './CategoriesReducer';
import  ProductReducer  from './ProductReducer';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist:['token','tokenSocial']
  }

const rootReducer=combineReducers(
    {
        CategoriesReducer:CategoriesReducer,
        ProductReducer:ProductReducer,
        CartReducer:CartReducer,
        AuthReducer: persistReducer(authPersistConfig,AuthReducer)
    }
)
export default rootReducer