import { useState } from "react";
import { apilogin, VerifyOTP } from "../../shared/services/apiauthentication/apilogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SignIn from "../../shared/components/forms/SignIn";
import useAuth from "../../shared/Services/store/useAuth";

const SignInPage=()=>{
  const { login } = useAuth();
  const [formdata, setFormdata] = useState({});
  const [Status, setStatus] = useState('Login');
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();
  const handlechange = (e) => setFormdata({ ...formdata, [e.target.name]: e.target.value });

  const handlelogin = async (e) => {
    e.preventDefault();
    const res = await apilogin(formdata);
    if (res.status === "OTP Send") {
      toast.success(res.status);
      setStatus(res.status);
      // if(location?.state?.status=="checkoutlogin"){
      //   navigate('/checkout')
      // }
      // else if(['Admin'].includes(res.Role)){
      //   navigate('/admin')
      // }
      // else{
      //   navigate('/')
      // }
      // login(res.token)
    } else {
      toast.error(res.status);
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    console.log(OTP);
    if (OTP){
      const res = await VerifyOTP({...formdata, OTP: OTP});
      if (res.status === "Success") {
        if(location?.state?.status=="checkoutlogin"){
          navigate('/checkout')
        }
        else if(['Admin'].includes(res.Role)){
          navigate('/admin')
        }
        else{
          navigate('/')
        }
        login(res.token)
      } else {
        toast.error(res.status);
      }
    }
    else{
      toast.error("Please Enter OTP");
      return;
    }
    
  };

  return(
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>SignIn | Shop All Clothing | Trendy Apparel for Every Style | - Liara - A Touch of Luxury</title>
        <meta name="description" content="Discover the latest trends in clothing at Liara fashion. Shop our wide collection of men's, women's, and children's clothing. Find your perfect outfit today!" />
        <meta name="keywords" content="trendy clothing, fashion apparel, designer outfits, men's fashion, women's fashion, kids' clothing, luxury wear, streetwear, casual wear, Liara Fashion, best-selling clothes, new fashion trends, online clothing store, affordable fashion, sustainable fashion, chic clothing, seasonal fashion, fashion sales, exclusive clothing collections, Liara Fashion store" />
        <meta property="og:title" content="Shop All Clothing | Trendy Apparel for Every Style | Liara fashion" />
        <meta property="og:description" content="Explore our diverse clothing collection for men, women, and kids at Liara fashion. Shop the latest fashion trends and find your perfect style." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourstore.com/shop-all" />
        <meta property="og:image" content="https://www.yourstore.com/images/shop-all-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop All Clothing | Trendy Apparel for Every Style | Liara fashion" />
        <meta name="twitter:description" content="Shop the latest trends in clothing at Liara fashion. Discover our wide range of styles for men, women, and kids." />
        <meta name="twitter:image" content="https://www.yourstore.com/images/shop-all-banner.jpg" />
        <link rel="canonical" href="https://mysite.com/example" />
      </Helmet> */}
      <SignIn handlechange={handlechange} handlelogin={handlelogin} handleOTP={handleOTP} OTP={OTP} setOTP={setOTP} Status={Status} />
    </>
  );
};
export default SignInPage;