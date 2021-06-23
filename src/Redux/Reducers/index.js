import {createStore,combineReducers} from 'redux'
import {CaculatorReducer} from './CaculatorReducer';
import { CartReducer } from './CartReducer';


const rootReducer=combineReducers(
    {
       Caculator:CaculatorReducer,
        CartReducer:CartReducer
    }
)

export default rootReducer