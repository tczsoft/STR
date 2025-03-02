import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";

export const moneyRatechange = async(data)=>{
   var res = await axios.get("https://v6.exchangerate-api.com/v6/0a66f60b1e9b3d30e9502846/latest/"+data);
   return res.data;
}


export const getAllproducts = async(data)=>{
   var res = await axios.get(`${apiurl()}/products/apiProducts`,{params:data});
   return res.data;
}

export const getsearchproducts = async(params)=>{
   var res=await axios.get(`${apiurl()}/products/searchproducts`,{params:params});
   return res.data;
}

export const getHomeproducts = async()=>{
   var res = await axios.get(`${apiurl()}/products/getHomeproducts`);
   return res.data;
}

export const getproductbyID = async(data)=>{
    var res = await axios.get(`${apiurl()}/products/apiproductbyid`,{params:{_id:data}});
    return res.data;
 }

 export const likeAsproduct = async(data)=>{
   var res = await axios.get(`${apiurl()}/products/apilikeAsproducts`,{params:{Product_Type:data}});
   return res.data;
}

 export const recentAddproduct = async()=>{
   var res = await axios.get(`${apiurl()}/products/apirecentAddedproducts`);
   return res.data;
}

export const topsellerproducts = async()=>{
   var res = await axios.get(`${apiurl()}/products/apitopsellers`);
   return res.data;
}

// export const filterproducts = async(data,pageNumber)=>{
//    var res = await axios.get(`${apiurl()}/products/apifilter`,{params:data});
//    return res.data;
// }

export const getFilerValus = async(data)=>{
   console.log(data)
   var res = await axios.get(`${apiurl()}/products/apigetfilervalus`,{params:data});
   return res.data;
}

