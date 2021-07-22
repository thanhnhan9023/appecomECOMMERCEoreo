import Utils from "../../../app/Utilis"
import TypeActions from "./TypeContStant"





const FecthCategories=() =>{
     return(dispatch) =>{
         dispatch(ActionLoadingCategories())
        return Utils.CallApi('api/Category/getALLCategory','GET').then(
            res => 
            dispatch(ActionSuccesCategories(res.data))
        ).catch(err => dispatch(ActionFallCategories(err.response.data)));
};
}
const ActionLoadingCategories=() =>{
    return{
        type:TypeActions.Loading_Categories,
    }
}
const ActionSuccesCategories=(data) =>{
    return{
        type:TypeActions.Succes_Categories,
        payload:data
    }
}
const ActionFallCategories=(error) =>{
    return{
        type:TypeActions.Fail_Categories,
        payload:error,
    }
}

const  CategoriesACtion ={
    FecthCategories
    
}

export default CategoriesACtion
