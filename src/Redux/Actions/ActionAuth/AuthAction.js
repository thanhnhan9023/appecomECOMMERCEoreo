// import axios from "axios";
import Utils from "../../../app/Utilis"
import TypesAciton from "../ActionAuth/TypeContStant"



// const baseurl='http://192.168.1.55:5000'

// login
const  Login=(data) =>async dispatch =>{
        dispatch(ActionLoadingLogin());
       Utils.CallApi('api/User/LoginUser','POST',data).then(
           res => dispatch(ActionSuccesLogin(res.data))
       ).catch(
           err => dispatch(ActionFallLogin(err.response.data))
       )
}
const ActionLoadingLogin=() =>{
    return{
        type:TypesAciton.Loading_Login,
    }
}
const ActionSuccesLogin=(token) =>{
    return{
        type:TypesAciton.Succes_Login,
        payload:token
    }
}
const ActionFallLogin=(error) =>{
    return{
        type:TypesAciton.Fail_Login,
        payload:error,
    }
}
//logout
const  Logout=(data) =>async dispatch =>{
        dispatch(ActionLoadingLogout())
        Utils.CallApi('api/User/LogoutUser','PATCH',data).then(
            res => dispatch(ActionSuccesLogout(res.data))
        ).catch(
            err => dispatch(ActionFallLogout(err.response.data))
        )
}
const ActionLoadingLogout=() =>{
    return{
        type:TypesAciton.Loading_Logout,
    }
}
const ActionSuccesLogout=(token) =>{
    return{
        type:TypesAciton.Succes_Logout,
    }
}
const ActionFallLogout=(error) =>{
    return{
        type:TypesAciton.Fail_Logout,
        payload:error,
    }
}
// resgistration
const Resgistration=(data) =>async dispatch=>{
    console.log(data)
    dispatch(ActionLoadingResgistration());
    Utils.CallApi('api/User/createUser','POST',data).then(
        res => dispatch(ActionSuccesResgistration())
    ).catch(
        (err) => {
            dispatch(ActionFallResgistration(err.response.data))
            dispatch(ActionClearError())
        }
    )
}
const ActionLoadingResgistration=() =>{
    return{
        type:TypesAciton.Loading_Registration,
    }
}
const ActionSuccesResgistration=(n) =>{
    return{
        type:TypesAciton.Succes_Registration,
    }
}
const ActionFallResgistration=(error) =>{
    return{
        type:TypesAciton.Fail_Registration,
        payload:error,
    }
}
const ActionClearError=()=>{
    return{
        type:TypesAciton.ClearError,
    }
}


const  AuthAction ={
    Login,
    Logout,
    Resgistration,
    
}
export default AuthAction