import axios from "axios";
import { gettoken } from "../../../../shared/Services/Token/token";
import apiurl from "../../../../shared/Services/apiendpoint/apiendpoint";


export const getallproducts = async(params)=>{
   var res=await axios.get(`${apiurl()}/products/apigetallproducts`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
export const getuniquevaluebyfield = async(params)=>{
   console.log(params)
   var res=await axios.get(`${apiurl()}/products/apigetuniquevaluebyfield`,{params:params});
   return res.data;
}

export const saveproducts=async(datas)=>{
   try {
      const formData = new FormData();
      for (const key in datas) {
         if(key== 'Images'){
            for(let i = 0; i < datas['Images'].length; i++)
              if (datas['Images'][i] instanceof File)
                formData.append(key, datas[key][i]);
              else
               formData.append(key, datas[key][i]);
         }
         else{
            formData.append(key, datas[key]);
         }
      }
      
      var res=await axios.post(`${apiurl()}/products/apisaveproduct`,formData,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
      return res.data;
   }
   catch(err){
      console.log(err);
   }
}
export const updateproducts=async(datas)=>{
   const formData = new FormData();
   for (const key in datas) {
      if(key== 'Images'){
         for(let i = 0; i < datas['Images'].length; i++)
           if (datas['Images'][i] instanceof File)
             formData.append(key, datas[key][i]);
           else
            formData.append(key, datas[key][i]);
      }
      else{
         formData.append(key, datas[key]);
      }
   }
   var res=await axios.put(`${apiurl()}/products/apiupdateproduct`,formData,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const saveBulkproducts=async(data)=>{
   var res=await axios.post(`${apiurl()}/products/apisavebulkproduct`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

// export const saveBulkproductimages=async()=>{
//    var res=await axios.post(`${apiurl()}/products/apisavebulkproductimages`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
//    return res.data;
// }

export const deleteproducts=async(id)=>{
   var res=await axios.delete(`${apiurl()}/products/apideleteproduct`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const updatedelproducts=async(datas)=>{
   // console.log(datas)
   var res=await axios.put(`${apiurl()}/products/apiupdateproduct`,datas,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getallcolors=async()=>{
   var res = await axios.get(`${apiurl()}/products/apigetallcolors`,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
