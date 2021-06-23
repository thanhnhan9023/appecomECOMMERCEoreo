import TypesAction from "../ActionsCart/TypeContStant";

import produce from "immer"
import Utils from "../../app/Utilis";
import {IMAGES} from "../../../assets/images/IndexImg";



const initState = {
    ListLoaisp:[],
    ListSanPham:[],
    ListProductBasic:[
        {
            id:'1',
            NameProduct:'Cropeed Pocket Tee',
            PriceProduct:20,
            like:false,
            sltam:0,
            img:IMAGES.imgProduct1,
            rate:4
          },
          {
            id:'2',
            NameProduct:'Cropeed Pocket Tee 1',
            PriceProduct:20,
            like:false,
            sltam:0,
            img:IMAGES.imgProduct1,
            rate:4
          },
          {
            id:'3',
            NameProduct:'Cropeed Pocket Tee 2',
            PriceProduct:20,
            sltam:0,
            like:false,
            img:IMAGES.imgProduct1,
            rate:4
          },
          {
            id:'4',
            NameProduct:'Cropeed Pocket Tee 3',
            PriceProduct:20,
            like:false,
            sltam:0,
            img:IMAGES.imgProduct1,
            rate:4
          },
          {
            id:'5',
            NameProduct:'Cropeed Pocket Tee 4',
            PriceProduct:20,
            like:false,
            sltam:0,
            img:IMAGES.imgProduct1,
            rate:4
          },
          {
            id:'6',
            NameProduct:'Cropeed Pocket Tee',
            PriceProduct:20,
            like:false,
            sltam:0,
            img:IMAGES.imgProduct1,
            rate:4
          },

    ],
    ListCart: [],
    ListProductLike:[],


}

const Key_ID = 'MaSp'
export const CartReducer = (state = initState, action) => {
    const { type, payload } = action;
    const { ListCart ,ListProductLike,ListProductBasic,ListLoaisp,ListSanPham} = state;

    return produce(state, draft => {
        switch (type) {
            case TypesAction.ACTION_Fetch_SanPhamToLoaiSp:{
                draft.ListSanPham=payload;
            }
            break;
            case TypesAction.ACTIOM_Fetch_LoaiSp:{
                draft.ListLoaisp=payload;
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
                        const check=ListProductLike.find(item => item[Key_ID]==payload[Key_ID])
                        if(check)
                        {
                                draft.ListProductLike=ListProductLike.filter(item => item[Key_ID] != payload[Key_ID])

                        }
                        else
                        {
                            draft.ListProductLike=[...ListProductLike,payload]
                        }


                }
                break;
            case TypesAction.ACTION_LikeProduct:
                {
                    draft.ListProductBasic=ListProductBasic.map(item =>{
                        if(item.id==payload)
                        {
                            return{
                                ...item,
                                like:!item.like
                            }
                        }
                        else{
                            return item
                        }
                    })
                }

                }
    });




}