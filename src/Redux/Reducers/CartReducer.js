import TypesAction from "../ActionsCart/TypeContStant";
import produce from "immer"
import Utils from "../../app/Utilis";
import {IMAGES} from "../../../assets/images/IndexImg";
import AsyncStorage from '@react-native-async-storage/async-storage';


// const datannew= async () =>{
//     try {
//         const jsonValue = await AsyncStorage.getItem('cart')
//          let a=jsonValue != null ? JSON.parse(jsonValue) : null;
//          return a
//       } catch(e) {
//         Utils.nlog(e)
//       }
// }
// let a=  datannew()
// Utils.nlog(a);
const initState = {
    ListLoaisp:[],
    ListSanPham:[],
    ListCart:[],
    ListProductLike:[],
}
const Key_ID = '_id'
export const CartReducer = (state = initState, action) => {
    const { type, payload } = action;
    const { ListCart ,ListProductLike,ListLoaisp,ListSanPham} = state;
    
    return produce(state, draft => {
        switch (type) {
            case TypesAction.ACTION_Like:
            {
                  if(payload!=null)
                    {
                        draft.ListProductLike=JSON.parse(payload)
                    }
            }
            break;
            case TypesAction.ACTION_Cart:
            {    
                    
                        draft.ListCart=JSON.parse(payload)
             }
             break;        
            case TypesAction.ACTION_Fetch_SanPhamToLoaiSp:{
                draft.ListSanPham=payload;
            }
            break;
            case TypesAction.ACTION_Fetch_LoaiSp:{
                draft.ListLoaisp=payload;
            }
            break;
            case TypesAction.ACTION_AddCart:
                {
                    if(ListCart && ListCart.length >0)
                    {
                        const item = ListCart.findIndex(item=>item[Key_ID]==payload[Key_ID]);
                        if(item>=0)
                        {
                            let a=[...ListCart];
                            a[item]={...a[item],sltam:a[item].sltam+1};
                            draft.ListCart =a;
                        }
                        else
                        {
                            draft.ListCart = [...ListCart, {...payload, sltam: 1 }]
                        }
                    }
                    else
                    {
                        draft.ListCart =[{...payload,sltam:1}]
                    }
                    Utils.nsetStore('cart',JSON.stringify(draft.ListCart))
                    // if (ListCart && ListCart.length > 0) {
                    //     const check = ListCart.find(item => item[Key_ID] == payload[Key_ID])
                    //     if (check) 
                    //     {
                    //         draft.ListCart = ListCart.map(item => {
                    //             if (item[Key_ID] == payload[Key_ID]) 
                    //             {                                  
                    //                 return {
                    //                     ...item,                                        
                    //                     sltam:item.sltam + 1
                    //                 }
                    //             }             
                    //             else 
                    //             {
                    //                 return item;
                    //             }
                    //         })
                    //     } 
                    //     else {
                    //         draft.ListCart = [...ListCart, {...payload, sltam: 1 }]
                    //     }
                    // } 
                    // else {
                    //     draft.ListCart = [{...payload, sltam: 1 }]
                    // }
                }
                break;
            case TypesAction.ACTION_DeleteCart:
                {
                    draft.ListCart = ListCart.filter(item => item[Key_ID] != payload)
                    Utils.nsetStore('cart',JSON.stringify(draft.ListCart))
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
                    Utils.nsetStore('cart',JSON.stringify(draft.ListCart))
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
                    Utils.nsetStore('cart',JSON.stringify(draft.ListCart))
                }
                break;
            case TypesAction.ACTION_ADD_Remove_LikeProduct:
                {
                                draft.ListProductLike=ListProductLike.filter(item => item[Key_ID] != payload[Key_ID])
                                Utils.nsetStore('like',JSON.stringify(draft.ListProductLike))
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
                    Utils.nsetStore('like',JSON.stringify(draft.ListProductLike))
                }
                break;
                }
    });
}