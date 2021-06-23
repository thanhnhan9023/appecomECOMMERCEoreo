import Utils from "../../app/Utilis";
import TypesAciton from "../Actions/TypeContStant";



const initState=
{
    result:0


}

export const CaculatorReducer =(state=initState,action) =>{
    Utils.nlog("action=======", action);
 
        const {type,data}=action;
        switch (type) {
            case TypesAciton.ACTION_CONG:
                {
                    Utils.nlog('vao 1 ')
                    const {a,b} =data
                    Utils.nlog(data)
                    Utils.nlog('so a',a)
                    Utils.nlog('so b',b)
                    state={...state,
                        result:a+b}
                       
                }
                break;
                case TypesAciton.ACTION_TRU:
                    {
                        const {a,b} =data
                        state={...state,result:a-b}
                    }
                    break;
                case TypesAciton.ACTION_NHAN:
                        {
                            const {a,b} =data
                            state={...state,result:a*b}
                        }
                break;
                case TypesAciton.ACTION_CHIA:
                    {
                        const {a,b} =data
                        state={...state,result:a/b}
                    }
                    break;
        
            default:
                break;

        }
        return state;
}
