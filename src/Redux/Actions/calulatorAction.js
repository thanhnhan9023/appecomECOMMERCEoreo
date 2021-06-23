import TypesAciton from "./TypeContStant";


const actionCong=(data) =>{
    return{
        type:TypesAciton.ACTION_CONG,
        data:data
    }
}
const actionTru=(data) =>{
    return{
        type:TypesAciton.ACTION_TRU,
        data:data
    }
}
const actionNhan=(data) =>{
    return{
        type:TypesAciton.ACTION_NHAN,
        data:data
    }
}
const actionChia=(data) =>{
    return{
        type:TypesAciton.ACTION_CHIA,
        data:data
    }
}
  const Actioncaculator ={
 actionCong,
 actionTru,
 actionNhan,
 actionChia,   
}

export default Actioncaculator
