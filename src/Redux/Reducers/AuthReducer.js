import TypesAction from "../Actions/ActionAuth/TypeContStant";
import produce from "immer"
import Utils from "../../app/Utilis";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistReducer } from 'redux-persist';

const initState = {
  isLogin:false,
  token:null,
  isLoading:false,
  user:null,
  error:null,
  isRes:false,
}

 const AuthReducer=(state=initState,action) =>{
    const {type,payload}=action;
    switch (type) {
        case TypesAction.Loading_Login:
            return{
            ...state,
            isLoading:true,
            }
        case TypesAction.Succes_Login:
            return{
            ...state,
            token:payload,
            isLogin:true,
            isLoading:false,
            }
        case TypesAction.Fail_Login:
            return{
            ...state,
            isLogin:false,
            token:null,
            isLoading:false,
            error:payload,
            }
        case TypesAction.Loading_Logout:{
            return{
                ...state,
                isLoading:true,
                }
        }
        case TypesAction.Succes_Logout:{
            return{
                ...state,
                isLoading:false,
                token:null,
                isLogin:false,
                }
        }
        case TypesAction.Fail_Logout:{
            return{
                ...state,
                isLoading:false,
                error:payload,
                }
        }
        case TypesAction.Loading_Registration:{
            return{
                ...state,
                isLoading:true,
                }
        }
        case TypesAction.Succes_Registration:{
            return{
                ...state,
                isLoading:false,
                token:null,
                isLogin:false,
                isRes:true,
                }
        }
        case TypesAction.Fail_Registration:{
            return{
                ...state,
                isLoading:false,
                error:payload,
                isRes:false,
                }
        }
        case TypesAction.ClearError:{
            return{
                ...state,
                error:null,
                }
        }
    }
    return state;
}

export default  AuthReducer;