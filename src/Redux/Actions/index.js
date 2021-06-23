import {Add,Toggle_one_task} from './ActionType'


let newTaskId=0;

export const addNewTask=(inputTaskName=null) =>{
    return{
        type:Add,
        
    }
}

export const toggleTa=(taskId) =>{
    return{
        type:Toggle_one_task,
        taskId:taskId,
    }
}