import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallcourse=async(params)=>{
   var res=await axios.get(`${apiurl()}/admingetallcourse`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
export const savecourse=async(datas)=>{
    const formData = new FormData();
    Object.keys(datas).forEach(key => {
        formData.append(key, datas[key]);
    });
    var res=await axios.post(`${apiurl()}/savecoursedetails`,formData,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
    return res.data;
}
export const updatecourse=async(datas)=>{
    const formData = new FormData();
    Object.keys(datas).forEach(key => {
        formData.append(key, datas[key]);
    });
   var res=await axios.post(`${apiurl()}/adminupdatecourse`,formData,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
export const deletecourse=async(id)=>{
   var res=await axios.delete(`${apiurl()}/admindeletecourse`,{params:{id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
