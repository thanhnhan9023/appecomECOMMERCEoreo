import Utils from "../../../app/Utilis"
import TypeActions from "./TypeContStant"

const FecthProduct=() =>{
     return(dispatch) =>{
         dispatch(ActionLoadingProduct())
         Utils.CallApi(`api/prodcut/getALLProduct`,'GET').then(
        res => 
        dispatch(ActionSuccesProduct(res.data),
    )).catch(err => dispatch(ActionFallProduct(err.response.data)));
    }
}
const ActionLoadingProduct=() =>{
    return{
        type:TypeActions.Loading_Product
    }
}
const ActionSuccesProduct=(data) =>{
    return{
        type:TypeActions.Succes_Product,
        payload:data
    }
}
const ActionFallProduct=(error) =>{
    return{
        type:TypeActions.Fail_Product,
        payload:error,
    }
}

const ProductAction={
    FecthProduct
}

export default  ProductAction
