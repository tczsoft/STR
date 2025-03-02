import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getalloption = async()=>{
   var res=await axios.get(`${apiurl()}/options/apigetalloption`,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const updateoption=async(datas)=>{
   var res=await axios.put(`${apiurl()}/options/apiupdateoption`,datas,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}



export const saveoptions=async(data)=>{
   try {
      var res=await axios.post(`${apiurl()}/options/apisaveoption`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
      return res.data;
   }
   catch(err){
      console.log(err);
   }
}

export const deleteoptions=async(id)=>{
   var res=await axios.delete(`${apiurl()}/options/apideleteoption`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

// export const saveoptions=async(datas)=>{
//    try {
//       // const formData = new FormData();
//       // for (const key in datas) {
//       //    if(key== 'Images'){
//       //       for(let i = 0; i < datas['Images'].length; i++)
//       //         if (datas['Images'][i] instanceof File)
//       //           formData.append(key, datas[key][i]);
//       //         else
//       //          formData.append(key, datas[key]);
//       //    }
//       //    else{
//       //       formData.append(key, datas[key]);
//       //    }
//       // }
//       var res=await axios.post(`${apiurl()}/options/apisaveoption`,datas,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
//       return res.data;
//    }
//    catch(err){
//       console.log(err);
//    }
// }
