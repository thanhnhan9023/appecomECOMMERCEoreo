import {createStore,combineReducers} from 'redux'
import {CaculatorReducer} from './CaculatorReducer';
import { CartReducer } from './CartReducer';
import  AuthReducer  from './AuthReducer';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist:['token']
  }

const rootReducer=combineReducers(
    {
        CartReducer:CartReducer,
        AuthReducer: persistReducer(authPersistConfig,AuthReducer)
    }
)
export default rootReducer