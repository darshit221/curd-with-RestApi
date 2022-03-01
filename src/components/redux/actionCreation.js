import { GET_PASSANGER } from "./actionType";


const getPassanger=(passengerData)=>({type:GET_PASSANGER,payload:passengerData})



export(getPassanger)