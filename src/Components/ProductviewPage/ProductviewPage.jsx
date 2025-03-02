import React, { useCallback, useEffect, useState } from 'react'
import ProductView from '../../shared/Components/ProductView/ProductView'
import GalleryModel from '../../shared/Components/Others/GalleryModel'
import apiurl, { domain } from '../../shared/Services/apiendpoint/apiendpoint';
import { getproductbyID } from '../../shared/Services/products/apiProducts';
import { useParams } from 'react-router-dom';
import useCart from '../../shared/Services/store/useCart';
import { Helmet } from 'react-helmet';

export default function ProductviewPage() {

  const param = useParams()
  const{addToCart,cartcount,currencyValue,curr} = useCart();

  const [data,setData] = useState({});
  const [Visible,setVisible] = useState(false)
  const [schemaData,setschemaData]=useState({});
  const [Limg,setLimg]=useState('')
  const [imag,setImag]=useState([])
  const [value,setvalue]=useState('')
  const [formdata,setFormdata]=useState({});

  const getPodyctByID = useCallback(async()=>{
    const res = await getproductbyID(param?.id);
    console.log(res)
    setschemaData({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": res?.Product_Name,
      "image": res?.Images.map(path => `${apiurl()}/${path}`),
      "description": res.Product_Description,
      "sku": '12',
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": res?.Sale_Price,
        "availability": "https://schema.org/InStock"
      }
    })

    setData(res);
    setvalue(res?.Size[0]);
    setImag(res?.Images); 
    setLimg(res?.Images[0]);
  },[param?.id])

  useEffect(()=>{
    getPodyctByID();
  },[param?.id])

  const OpenModel = ()=>{
    setVisible(true)
  }

  const selSize=(data,item)=>{
    setvalue(item);
    setData({...data,Selectedsize:item});
  }

  const addCart=()=>{
    console.log({...data,Selectedsize:value})
    addToCart({...data,Selectedsize:value});
    cartcount();
  }

  const gotocheckout = (data) => {
  
  let message = `${data.Product_Name}\n`;
  message += `Price: Rs.${data.Sale_Price}\n`;
  message += `Product Link: ${domain()}/product-event/${data._id}\n`;
    // Open WhatsApp share link
    window.open(`https://wa.me/+919361036440?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {data?.Product_Name&& <Helmet>
        <meta charSet="utf-8" />
        <title>Venba Boutique | {data!=undefined?data?.Product_Name:""}</title>
        <meta name="description" content={data?.Product_Description} />
        <meta property="og:title" content={data?.Product_Name} />
        <meta property="og:image" content={apiurl()+'/'+data&&data?.Images[0]} />
        <link rel="canonical" href="https://www.venbaboutique.com" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>}
    
      <section className='py-16'>
        <ProductView OpenModel={OpenModel} setData={setData} data={data} Limg={Limg} setLimg={setLimg} imag={imag} setImag={setImag} value={value} setvalue={setvalue} 
          selSize={selSize} addCart={addCart} gotocheckout={gotocheckout} />

        {Visible && <GalleryModel ModelData={data} setVisible={setVisible} Visible={Visible} />}
      </section>
    </>
  )
}
