import Utils from "../../app/Utilis"
import TypesAction from "./TypeContStant"

// call api  request san pham theo loai sp
const ActionFetchSanPhamToLoaiSpRequest=(id) =>{
    console.log('gia tri  id:'+id)
    return(dispatch) =>{
        return Utils.CallApi(`get-sanpham_loaisp?MaLoai=${id}`,'GET',null).then(
            res => dispatch(ActionFetchSanPhamToLoaiSp(res.data),
           
        ));
    }
}
// call api  san pham theo loai sp
const ActionFetchSanPhamToLoaiSp=(data) =>{
    return{
        type:TypesAction.ACTION_Fetch_SanPhamToLoaiSp,
        payload:data
    }
}
//  call api request loai sp
const ActionFetchSanPhamRequest=() =>{
    return(dispatch) =>{
            return Utils.CallApi('get-all-sanpham','GET',null).then(
                res => dispatch(ActionFetchSanPham(res.data))
            );
    };
}
// call api San Pham
const ActionFetchSanPham=(data) =>{
return{
    type:TypesAction.ACTION_Fetch_SanPham,
    payload:data,
    };
}
//  call api request loai sp
const ActionFetchLoaiSpRequest=() =>{
    return(dispatch) =>{
            return Utils.CallApi('api/Category/getALLCategory','GET',null).then(
                res => dispatch(ActionFetchLoaiSp(res.data))
            );
    };
}
// call api loai sp 
const ActionFetchLoaiSp=(data) =>{
    return{
        type:TypesAction.ACTIOM_Fetch_LoaiSp,
        payload:data,
    }
}

const ActionAddCart=(data) =>{
    return{
        type:TypesAction.ACTION_AddCart,
        payload:data
    }
}
const ACTION_UpdateCart=(data) =>{
    return{
        type:TypesAction.ACTION_UpdateCart,
        payload:data
    }
}
const ACTION_DeleteCart=(data) =>{
    return{
        type:TypesAction.ACTION_DeleteCart,
        payload:data
    }
}
const ActionPlusNumber=(data) =>{
    return{
        type:TypesAction.ACTION_PlusNumber,
        payload:data
    }
}
const ActionMinusNumber=(data) =>{
    return{
        type:TypesAction.ACTION_MinusNumber,
        payload:data
    }
}
const ActionToatlCart=(data) =>{
    return{
        type:TypesAction.ACTION_ToalCart,
        payload:data
    }
}
const ActionAdd_RemoveLike=(data) =>{
    return{
        type:TypesAction.ACTION_ADD_Remove_LikeProduct,
        payload:data
    }
}

const ActionAdd_LikeProduct=(data) =>{
    return{
        type:TypesAction.ACTION_LikeProduct,
        payload:data
    }
}
  const  CartAction ={
 ActionAddCart,
 ACTION_UpdateCart,
 ACTION_DeleteCart,
 ActionPlusNumber,
 ActionMinusNumber,
 ActionToatlCart,
 ActionAdd_RemoveLike,
 ActionAdd_LikeProduct,
 ActionFetchLoaiSpRequest,
 ActionFetchSanPhamRequest,
 ActionFetchSanPhamToLoaiSpRequest,
}

export default CartAction