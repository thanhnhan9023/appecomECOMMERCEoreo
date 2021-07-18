import {createStore,combineReducers} from 'redux'
import {CaculatorReducer} from './CaculatorReducer';
import { CartReducer } from './CartReducer';

const rootReducer=combineReducers(
    {
        CartReducer:CartReducer
    }
)
export default rootReducer