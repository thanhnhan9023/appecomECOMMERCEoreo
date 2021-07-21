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
// resgistration
const resgistration=(data) =>{
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



const  AuthAction ={
    Login,
    Logout,
}
export default AuthAction