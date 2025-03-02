import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Dropdown } from 'primereact/dropdown';
import apiurl from '../../Services/apiendpoint/apiendpoint';

export default function ProductView(props) {
    const { data,value,addCart,Limg,setLimg,imag, selSize, setLS, OpenModel, gotocheckout } = props;
    return (
        <div>
            <div className=' max-w-[90rem] mx-auto'>
                <div className='grid grid-cols-1 gap-3 md:grid-cols-2 '>
                    <div className={`flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:px-5 `}>
                        <div className="items-center lg:items-start justify-center flex flex-col lg:flex lg:flex-row-reverse lg:my-12 mt-6 z-30 lg:sticky lg:top-[70px] lg:left-[5%] w-[90%] "> 
                            <div className='relative'>
                                {Limg&&Limg.split(".").reverse()[0]=="mp4"?
                                    <div>
                                        <video autoPlay loop>
                                            <source src={apiurl()+"/"+Limg} type="video/mp4"/>
                                        </video>
                                    </div>:
                                    <div  className=''>
                                        <img src={apiurl()+"/"+Limg} alt="Product_Image" />
                                    </div>
                                }

                                {/* <div className={`${isLoggedIn?"block":"hidden"} absolute top-5 left-0 `}><span  className="items-center p-2"><i className={` ${wishlist?"fa-solid":"fa-regular"} hover:cursor-pointer fa-heart fa-xl px-2 pt-3 pb-2 text-red-700`} onClick={()=>{data.Selectedsize=value;addWish(data)}}> </i></span></div> */}
                                {/* <div className={`absolute top-5 left-0 `}><span  className="items-center p-2"><i className={` hover:cursor-pointer fa-heart fa-xl px-2 pt-3 pb-2 text-red-700`} onClick={()=>{data.Selectedsize=value;addWish(data)}}> </i></span></div> */}
                                <div className={`absolute top-5 right-0 `}><span  className="items-center p-2"><i className={` fa-solid hover:cursor-pointer fa-magnifying-glass-plus fa-xl px-2 pt-3 pb-2 text-red-700`} onClick={OpenModel}> </i></span></div>
                            </div>  
                            {/* <div className={`${imag&&imag.length>1?"block":"hidden"} w-full lg:w-[63%] xl:w-[40%] ps-[3%] sm:ps-[8%]  md:ps-[11%] lg:ps-0`}> */}
                            <div className={` w-full lg:w-[63%] xl:w-[40%] ps-[3%] sm:ps-[8%]  md:ps-[11%] lg:ps-0`}>
                                {/* smooth scroll */}
                                <div className='min-h-[100px] lg:h-[400px] xl:h-[550px] w-[80%] lg:w-full xl:max-w-[120px]'>
                                    <div className='flex items-center justify-start w-full h-full py-4 lg:flex-col'>
                                        <div className='flex items-center justify-center w-full h-full'>
                                            <button className='hidden icon lg:block pe-3' onClick={()=>{document.querySelector(".scrol_images").scrollBy(0,-350)}}><i className="fa-solid fa-caret-up"></i></button>
                                            <button className='block px-2 pb-3 icon lg:hidden' onClick={()=>{document.querySelector(".scrol_images").scrollBy(-350,0)}}><i className="fa-solid fa-caret-left"></i></button>
                                        </div>
                                        <div className='relative w-full lg:h-[90%] lg:w-full'>
                                            <div className='relative no-scrollbar flex items-center justify-start h-full max-w-full gap-2 overflow-auto scrol_images scroll-smooth lg:grid-cols-1 lg:grid'  >
                                                {imag.map((d,index)=>{ return( 
                                                    <div key={index} role='button' className=' min-w-[100px] h-full lg:min-w-full  lg:h-[150px] overflow-hidden' onClick={()=>{setLimg(d)}} >
                                                        {d.split(".").reverse()[0]=="mp4"?
                                                        <div className=' overflow-hidden h-[133.7px] lg:h-full relative'>
                                                            <i className="fa-solid fa-caret-right absolute left-[45%] top-[45%] fa-2xl text-gray-50"></i>
                                                            <video width="100%" ><source src={apiurl()+"/"+d} type="video/mp4" autoPlay loop/></video>
                                                        </div>:
                                                        
                                                            <img loading="lazy" className='w-full h-full' src={apiurl()+"/"+d}/>
                                                        }
                                                    </div> 
                                                )})}
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center w-full h-full'>
                                            <button className='hidden icon lg:block pe-3' onClick={()=>{document.querySelector(".scrol_images").scrollBy(0,350)}}><i className="fa-solid fa-caret-down"></i></button>
                                            <button className='block px-3 pb-3 icon lg:hidden' onClick={()=>{document.querySelector(".scrol_images").scrollBy(350,0)}}><i className="fa-solid fa-caret-right"></i></button>
                                        </div>
                                    </div>
                                </div> 
                            </div>                 
                        </div>
                    </div>

                    <div className='px-5 bg-white lg:py-6 xl:px-10'>
                        <div className='px-2 md:py-6 border-b-1'>
                            {/* <div className='mb-5 text-xl md:text-3xl lg:text-4xl '>{data?.Product_Name}</div> */}
                            <div className='mb-5 text-xl md:text-3xl lg:text-4xl '>{data?.Product_Name}</div>
                            <div className={`${data?.Tag&&data?.Tag.length!=0 && data?.Tag[0].toUpperCase()!="ALL"?"block":"hidden"} mb-4`}><span className='bg-[#225a2b] px-5 py-2  rounded-xl font-bold items-center text-white text-[11px] lg:text-[14px]'>{data?.Tag&&data?.Tag.length != 0 && data?.Tag[0]?.toUpperCase()}</span></div>
                            {/* <div className={`mb-4`}><span className='bg-[#ed9d22] px-3 py-1 font-bold items-center text-white text-sm lg:text-[14px]'>Trending</span></div> */}
                            {data?.Discount!=0?
                            <div className="flex items-center gap-2">
                                <p className="line-through ">Rs. {((data?.Sale_Price))?.toFixed(2)}</p> 
                                <p>{((data?.Sale_Price-data.Discount)).toFixed(2)}</p> 
                            </div>:
                            <p>Rs. {(data?.Sale_Price).toFixed(2)}</p> 
                            }
                        </div>
                        <div>
                            <div className='px-2 my-3 text-sm font-normal '>SIZE</div>
                                <div className='block md:flex gap-2 px-2 items-center'>
                                    <Dropdown value={value} onChange={(e) => selSize(data,e.value)} options={data?.Size} optionLabel="" placeholder="Select a Size" className="border-1 border-black rounded-none px-3 mb-3" />
                                    {/* <button className={`p-2 border-1.5 border-black rounded-lg `} onClick={onOpen}>Custom</button> */}
                                    <div className='block md:flex justify-center items-center text-center'>
                                        <div className={`border-1.5 border-black py-2 px-3 hover:cursor-pointer text-white bg-[#225a2b] md:me-3 mb-3`} onClick={()=>{addCart(data)}}>ADD TO CART</div>
                                        <div className='px-3 py-2  text-white bg-[#225a2b] hover:cursor-pointer mb-3' onClick={()=>{gotocheckout(data)}}>BUY IT NOW</div>
                                    </div>
                                </div>
                            {/* <div className='my-6 px-2'>Worldwide shipping</div>
                            <div className='font-semibold text-sm p-2 ml-2 border inline-block hover:text-white hover:bg-black/60 duration-300' role='button' onClick={()=>{customModalOpen(); setVisible(true)}} >SIZE CHART</div> */}
                        </div>
                        
                        <div>
                            <div variant="splitted" className='px-0' >
                                <div key="1" aria-label="Accordion 1" >
                                    <div className='text-xl font-bold mb-4 text-primary'>Description</div>
                                    <div className='flex flex-col gap-3'>
                                        <span dangerouslySetInnerHTML={{ __html: data?.Product_Description }} />
                                    </div>
                                </div>
                               
                            </div>
                            {/* <Accordion variant="splitted" className='px-0' >
                                <AccordionItem key="1" aria-label="Accordion 1" title={<div className='text-primary'>Description</div>} >
                                    <div>{data.Product_Description}</div>

                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 2" title={<div className='text-primary'>Shipping Details</div>}>
                                    <div className='flex flex-col gap-3'>
                                        <p>We offer free shipping Pan India for all prepaid orders</p>
                                        <p>COD orders are chargeable at flat 200/- INR.</p>
                                        <p>For COD orders we will require an advance amount of 30% of the Total Order Value. Our sales team will contact you over WhatsApp or call within 24 hours. Orders will be added in production once we have received the advance.</p>
                                        <p>Our dispatch timeline is 10-12 days while delivery may take 3-7 working days depending on the location.</p>
                                        <p>Return/exchange requests are accepted within 7 days of delivery.</p>
                                        <p>Exchanges are accepted only once with additional charges of flat 350/- INR.</p>
                                        <p>We do not provide monetary refunds. The amount of your purchase will be credited in your Baise Gaba wallet on the occasion of returns and will be valid for 6 months, applicable on your next purchase.</p>
                                        <p>Custom-made and sale items do not qualify for return/exchange.</p>
                                        <p>The colors seen in the image may slightly vary from the actual product due to different computer screen resolutions and displays.</p>
                                    </div>
                                </AccordionItem>
                                <AccordionItem key="3" aria-label="Accordion 1" title={<div className='text-primary'>Returns and Cancellation</div>} >
                                    <div className='flex flex-col gap-3'>
                                        <p>We allow for 24 hours for you to change your mind and cancel your order. Once this period has lapsed and your order has been processed, we are unable to entertain any cancellation requests.</p>
                                        <p>Our products are either made to order or sourced from the partner brands upon request. As such, we are unable to accept returns, exchanges, or refunds. </p>
                                        <p>In the unlikely circumstance that your order was found to be faulty or damaged upon delivery and for any other support, please write to us at support.intl@nykaafashion.com </p>
                                    </div>
                                </AccordionItem>
                                <AccordionItem key="4" aria-label="Accordion 1" title={<div className='text-primary'>Write to Us</div>} >
                                <form onSubmit={(e)=>{ e.preventDefault() ;send()}}>
                                    <div className='flex flex-col gap-4'>
                                        <div className="flex flex-wrap w-full gap-4 md:flex-nowrap"> 
                                            <Input type="text" label="Name" name='Name' onChange={handlewriteusdata}  isRequired required/>
                                            <Input type="email" label="Email" name='Email' onChange={handlewriteusdata} isRequired required/>
                                        </div>
                                        <Input type="text" label="Phone Number" name='Phone_Number' onChange={handlewriteusdata} isRequired required/>
                                        <Textarea label="Description" placeholder="Enter your description" className="max-w-xs" name='Description' onChange={handlewriteusdata} />
                                        <Button color="primary" type='submit'> send </Button>
                                        </div>
                                    </form>
                                </AccordionItem>
                            </Accordion> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
