import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";


export const getdashboard = async()=>{
   var res=await axios.get(`${apiurl()}/orders/apigetdashboarddata`,{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getallorders = async(params)=>{
   var res=await axios.get(`${apiurl()}/orders/apigetallorders`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
// export const getuniquevaluebyfield = async(params)=>{
//    console.log(params)
//    var res=await axios.get(`${apiurl()}/customers/apigetuniquevaluebyfield`,{params:params});
//    return res.data;
// }

export const updatedeOrder=async(datas)=>{
   var res=await axios.put(`${apiurl()}/orders/apiupdateorder`,datas,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

// export const deleteproducts=async(id)=>{
//    var res=await axios.delete(`${apiurl()}/products/apideleteproduct`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
//    return res.data;
// }
