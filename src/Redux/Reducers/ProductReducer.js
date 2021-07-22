import TypesAction from "../Actions/ActionProduct/TypeContStant";

const initState = {
  isLoadingsp:false,
  Listsp:[],
  error:null,
}

 const  ProductReducer=(state=initState,action) =>{
    const {type,payload}=action;
    switch (type) {
        case TypesAction.Loading_Product:
            return{
            ...state,
            isLoadingsp:true,
            }
        case TypesAction.Succes_Product:
            return{
            ...state,
            Listsp:payload,
            isLoadingsp:false,
            }
        case TypesAction.Fail_Product:
            return{
            ...state,
            error:payload,
            }
    }
    return state;
}

export default  ProductReducer;

