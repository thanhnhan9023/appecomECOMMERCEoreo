import TypesAction from "../Actions/ActionCategories/TypeContStant";

const initState = {
  isLoading:false,
  ListLoaisp:[],
  error:null,
}

 const  CategoriesReducer=(state=initState,action) =>{
    const {type,payload}=action;
    switch (type) {
        case TypesAction.Loading_Categories:
            return{
            ...state,
            isLoading:true,
            }
        case TypesAction.Succes_Categories:
            return{
            ...state,
            ListLoaisp:payload,
            isLoading:false,
            }
        case TypesAction.Fail_Categories:
            return{
            ...state,
            error:payload,
            }
    }
    return state;
}

export default  CategoriesReducer;

