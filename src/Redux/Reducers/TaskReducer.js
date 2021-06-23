import { act } from 'react-test-renderer'
import {Add,Toggle_one_task }  from '../Actions/ActionType'

const initalState={
    data:0,
    dataNew:0,
}


const taskReducer=(state=initalState,action) =>{
    switch (action) {
        case Add:
            state={
                ...state,
                dataNew:state.data+1,
                
                }
        case Toggle_one_task:
           break
        default:
            break;

           
    }
    return state;
}

export default taskReducer 