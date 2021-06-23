// import {Add,Delete }from '../Actions/ActionType'

const initalState={
    data1:0
}
const  TestReducer=(state=initalState,action) =>{
    switch (action.type) {
        case Add:
            state={
            ...state,
            data:state.data1+1
            }
                
            break;
        default:
           
    }
    return state;
}

export default TestReducer