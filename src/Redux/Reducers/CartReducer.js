import TypesAction from "../ActionsCart/TypeContStant";
import produce from "immer"
import Utils from "../../app/Utilis";
import {IMAGES} from "../../../assets/images/IndexImg";
import { listenerCount } from "npm";


const initState = {
    ListLoaisp:[],
    ListSanPham:[],
    account:{},
    ListCart: [],
    ListProductLike:[],
}
const Key_ID = '_id'
export const CartReducer = (state = initState, action) => {
    const { type, payload } = action;
    const { ListCart ,ListProductLike,ListLoaisp,ListSanPham} = state;
    
    return produce(state, draft => {
        switch (type) {
            case TypesAction.ACTION_Fetch_SanPhamToLoaiSp:{
                draft.ListSanPham=payload;
            }
            break;
            case TypesAction.ACTIOM_Fetch_LoaiSp:{
                draft.ListLoaisp=payload;
            }
            case TypesAction.ACTION_PostAccount:{
                draft.account=payload;
            }
            break;
            case TypesAction.ACTION_AddCart:
                {
                    if (ListCart && ListCart.length > 0) {
                        const check = ListCart.find(item => item[Key_ID] == payload[Key_ID])
                        if (check) 
                        {
                            draft.ListCart = ListCart.map(item => {
                                if (item[Key_ID] == payload[Key_ID]) 
                                {                                  
                                    return {
                                        ...item,                                        
                                        sltam:item.sltam + 1
                                    }
                                }             
                                else 
                                {
                                    return item;
                                }
                            })
                        } 
                        else {
                            draft.ListCart = [...ListCart, {...payload, sltam: 1 }]
                        }
                    } 
                    else {
                        draft.ListCart = [{...payload, sltam: 1 }]
                    }
                }
                break;
            case TypesAction.ACTION_DeleteCart:
                {
                    draft.ListCart = ListCart.filter(item => item[Key_ID] != payload)
                }
                break;
            case  TypesAction.ACTION_PlusNumber:
                {
                    draft.ListCart = ListCart.map(item => {
                        if(item[Key_ID]==payload)
                        {
                            if(item.sltam>0)
                            {
                                return{
                                    ...item,
                                    sltam:item.sltam+1
                                }
                            }
                            else
                            {
                                return item;
                            }
                        }
                        else
                        {
                            return item;
                        }
                    })
                }
                break;
             case TypesAction.ACTION_MinusNumber:
                {
                    const check=ListCart.find(item =>item[Key_ID]==payload);
                    if(check)
                    {
                        if(check.sltam==1)
                        {
                            Utils.nlog('TRu so luong 2');
                             draft.ListCart=ListCart.filter(item => item[Key_ID] != payload)
                        }
                        else
                        {
                            Utils.nlog('TRu so luong 1');
                            draft.ListCart = ListCart.map(item => {
                                if(item[Key_ID]==payload)
                                {          
                                        return{
                                            ...item,
                                            sltam:item.sltam-1
                                        }
                                }
                                else
                                {
                                    return item;
                                }
                            })
                        }
                    }
                }
                break;
            case TypesAction.ACTION_ADD_Remove_LikeProduct:
                {
                        // const check=ListProductLike.find(item => item[Key_ID]==payload[Key_ID])
                        // if(check)
                        // {
                                draft.ListProductLike=ListProductLike.filter(item => item[Key_ID] != payload[Key_ID])
                        // }
                        // else
                        // {
                        //     draft.ListProductLike=[...ListProductLike,payload]
                        // }
                }
                break;
            case TypesAction.ACTION_LikeProduct:
                {
                    if(ListProductLike.length>0)
                    {
                        const check=ListProductLike.findIndex(item => item[Key_ID] == payload[Key_ID])
                       Utils.nlog(check)
                        if(check>=0)
                        {
                        let a=[...ListProductLike];
                        a[check]={...a[check],like:false}
                        draft.ListProductLike=ListProductLike.filter(item => item[Key_ID] != payload[Key_ID]);
                        
                        }
                        else{
                        draft.ListProductLike=[...ListProductLike,{...payload,like:true}]
                        }
                        
                    }
                    else
                    {
                  
                        draft.ListProductLike=[{...payload,like:true}]
                    }
                    // draft.ListProductLike=ListProductLike.map(item =>{
                    //     if(item._id==payload)
                    //     {
                    //         return{
                    //             ...item,
                    //             like:!item.like
                    //         }
                    //     }
                    //     else{
                    //         return draft.ListProductLike=[...item,{...item,like:true}]
                    //     }
                    // })
                }
                }
    });
}