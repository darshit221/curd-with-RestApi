import axios from "axios";
import { GET_AIRLINE, GET_PASSENGER,SELECT_DATA } from "./actionType";


 const getPassenger=(passengerData)=>({type:GET_PASSENGER,payload:passengerData})
 const getAirline=(airlineData)=>({type:GET_AIRLINE,payload:airlineData})
 const getSelectdata=(id)=>({type:SELECT_DATA,payload:id})
const baseurl = process.env.REACT_APP_URL;

export const fetchPassanger=()=>{
    return dispatch=>{
        
        axios.get("https://api.instantwebtools.net/v1/passenger?page=0&size=10").then(response=>{
            const passengerData=response.data.data
            
            dispatch(getPassenger(passengerData))
        }).catch(err=>console.error(err))
    }
}
export const addPassanger=(data)=>{
    return ()=>{
        
        axios.post(`${baseurl}/passenger`,data).then(response=>{
            response.status===200?alert("Add sucessfully"):alert("somthing worng")
            
           
        }).catch(err=>console.error(err))
    }
}
export const fetchAirline=()=>{
    return dispatch=>{
        axios.get(`${baseurl}/airlines`).then(response=>{
            const airlineData=response.data
            
            dispatch(getAirline(airlineData))
        }).catch(err=>console.error(err))
    }
}
export const fetchSeclcteddata=(id)=>{
    return dispatch=>{
        axios.get(`${baseurl}/passenger/${id}`).then(response=>{
            const selectedata=response.data
            
            dispatch(getSelectdata(selectedata))
        }).catch(err=>console.error(err))
    }
}
export const updatePassanger=(data,id)=>{
    return ()=>{
        
        axios.put(`${baseurl}/passenger/${id}`,data).then(response=>{
            response.status===200?alert("update sucessfully"):alert("somthing worng")
            
           
        }).catch(err=>console.error(err))
    }
}
