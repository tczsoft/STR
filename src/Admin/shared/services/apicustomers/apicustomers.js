import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallcustomers = async(params)=>{
   var res=await axios.get(`${apiurl()}/customers/apigetallcustomers`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
export const getuniquevaluebyfield = async(params)=>{
   console.log(params)
   var res=await axios.get(`${apiurl()}/customers/apigetuniquevaluebyfield`,{params:params});
   return res.data;
}


export const updateuser=async(datas)=>{
   var res=await axios.put(`${apiurl()}/customers/apiupdatecustomer`,datas,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const deleteuser=async(id)=>{
   var res=await axios.delete(`${apiurl()}/customers/apideletecustomers`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
