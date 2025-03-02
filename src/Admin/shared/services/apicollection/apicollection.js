import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";


export const getallcollection = async(params)=>{
    var res=await axios.get(`${apiurl()}/collections/apigetallcollection`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
    return res.data;
 }

export const savecollection=async(datas)=>{
    try {
       const formData = new FormData();
       for (const key in datas) {
          if(key== 'Images'){
             for(let i = 0; i < datas['Images'].length; i++)
               if (datas['Images'][i] instanceof File)
                 formData.append(key, datas[key][i]);
               else
                formData.append(key, datas[key]);
          }
          else{
             formData.append(key, datas[key]);
          }
       }
       var res=await axios.post(`${apiurl()}/collections/apisavecollection`,formData,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
       return res.data;
    }
    catch(err){
       console.log(err);
    }
 }

 export const updatedecollection=async(datas)=>{
   try {
      const formData = new FormData();
      for (const key in datas) {
         if(key== 'Images'){
            for(let i = 0; i < datas['Images'].length; i++)
              if (datas['Images'][i] instanceof File)
                formData.append(key, datas[key][i]);
              else
               formData.append(key, datas[key]);
         }
         else{
            formData.append(key, datas[key]);
         }
      }
      var res=await axios.put(`${apiurl()}/collections/apiupdatecollection`,formData,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
      return res.data;
   }
   catch(err){
      console.log(err);
   }
   // var res=await axios.put(`${apiurl()}/collections/apiupdatecollection`,datas,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   // return res.data;
}

export const deletecollection=async(id)=>{
   var res=await axios.delete(`${apiurl()}/collections/apideletecollection`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}