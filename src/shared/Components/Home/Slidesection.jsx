import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiurl from '../../Services/apiendpoint/apiendpoint'

export default function Slidesection(props) {

    const { Products } = props

    const navigate = useNavigate()

    const navigator = (route)=>{
        navigate(route)
    }

    return (
        <section className="slider-section-bg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Right Column (Sticky) */}
                <div className="sticky top-[60px] h-[calc(100vh-60px)] z-40 hidden md:block">
                    <img src="./assets/Images/Patten/patten_2.png" className="h-full w-full object-fill sm:hidden md:block" alt="Pattern Image" />
                </div>
                {/* Left Column */}
                <div className="py-12 md:py-0 md:min-h-[calc(100vh-60px)] flex flex-col items-center justify-center">
                    <div className='px-5 md:px-0'>
                        <h1 className="text-6xl md:text-8xl font-bold italianno-regular md:text-black text-white">Sarees & Kurtis</h1>
                        <p className="mt-4 mb-5 text-lg md:text-black text-white">
                            "Discover sarees and kurtis, customized to your size and style, at affordable prices!"
                        </p>
                        <Link to="/shop" className=" px-6 py-2  md:text-black text-white border">
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div></div>
                <div className="py-12 md:py-24 md:min-h-[calc(100vh-60px)]  flex flex-col items-center justify-center px-3 md:pe-14 ">
                    <div className='flex justify-end items-center h-full w-full mb-3'>
                        <div className="bg-[#FFC600] w-[95%] lg:w-[70%] h-full grid grid-cols-2 gap-4 shadow-sm sm:flex">
                            <div className=" h-full flex items-center">
                                <div className="ps-6 py-4">
                                    <p>Upto 25%</p>
                                    <h3 className="text-2xl font-bold text-gray-800 ">Sarees</h3>
                                    <button onClick={()=> navigator('/shop')} className="mt-2 px-2 py-2 text-sm text-dark border pointer">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <div className=" shrink-2 relative w-full overflow-hidden">
                                <img className="w-full h-full object-cover object-top absolute top-0 end-0" src="assets/Images/Home/Img_1.png" alt="Card Image" />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end items-center h-full w-full'>
                        <div className="bg-[#FFC600] w-full lg:w-[95%] h-full grid grid-cols-2 gap-4 shadow-sm sm:flex">
                            <div className="h-full flex items-center">
                                <div className="ps-6 py-4">
                                    <p>Upto 25%</p>
                                    <h3 className="text-2xl font-bold text-gray-800 ">Kurtis</h3>
                                    <button onClick={()=> navigator('/shop')} className="mt-2 px-2 py-2 text-sm text-dark border">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <div className="shrink-2 relative w-full overflow-hidden">
                                <img className="w-full h-full object-cover object-top absolute top-0 end-0" src="assets/Images/Home/Img_2.png" alt="Card Image" />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div></div>

                <div className="py-12 md:py-0 md:min-h-[calc(100vh-60px)] flex flex-col items-center justify-center">
                    <div className='px-5'>  
                        <h1 className="text-4xl md:text-5xl font-bold md:text-black text-white">About <span className='text-[#ed9d22]'>Venba Boutique</span></h1>
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-2 mt-6'>
                            <img src="./assets/Images/Owner/Photo_02.png" className='w-60 bg-white border shadow-md' alt="" srcset="" />
                            <div className='col-span-2'>
                                <p className="mt-4 text-lg md:text-black text-white text-justify">At Venba Boutique, owned by <b>Mrs.T.Thamilarasi Senthil Kumaresan</b> , we bring you a timeless collection of sarees and kurtis, blending tradition with modern elegance. Established on <b>01-September-2021</b>, our boutique focuses on providing customized designs that suit your unique style, ensuring the perfect fit at affordable prices. Whether you're looking for everyday elegance or special occasion wear, we curate high-quality fabrics with intricate craftsmanship. Experience fashion that celebrates heritage with a contemporary touch, only at Venba Boutique!</p>
                                <button onClick={()=> navigator('/shop')} className="mt-6 px-6 py-2 text-white md:text-black border">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div></div>

                <div className="py-12 md:py-0 md:min-h-[calc(100vh-60px)] flex flex-col items-center justify-center">
                    <div className='w-full px-4 md:pe-8'>  
                        <h1 className="text-2xl md:text-4xl font-bold md:text-black text-white"><span className='text-[#ed9d22]'>Sarees </span>Collections</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
                            {Products?.Saree&&Products?.Saree.map((product, index) => (
                                <Link key={index} to={`/product-event/${product._id}`} className="flex w-full flex-col group hover:bg-white overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition">
                                    <div className="overflow-hidden">
                                        <img className="w-full" src={`${apiurl()}/${product?.Images[0]}`} alt="Card Image" />
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg text-center text-white md:text-gray-800  truncate">{product?.Product_Name}</h3>
                                        <h3 className="text-lg text-center text-[#ed9d22]">Rs. {product?.Sale_Price}</h3>
                                        {/* <div className="flex justify-between mt-4">
                                            <button type="button" className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-[#FFC600] focus:outline-none">
                                                Shop Now
                                            </button>
                                            <button type="button" className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-[#FFC600] focus:outline-none">
                                                Add to Cart
                                            </button>
                                        </div> */}
                                    </div>
                                </Link>
                            ))}
                            
                        </div>
                    </div>
                </div>

                <div></div>
                <div className="py-12 md:py-0 md:min-h-[calc(100vh-60px)] flex flex-col items-center justify-center">
                    <div className='w-full  px-4 md:pe-8'>  
                        <h1 className="text-2xl md:text-4xl font-bold text-white md:text-black"><span className='text-[#ed9d22]'>Kurti </span>Collections</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
                            {Products?.Kurtis&&Products?.Kurtis.map((product, index) => (
                                <Link key={index} to={`/product-event/${product._id}`} className="flex w-full flex-col group hover:bg-white overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition  ">
                                    <div className="overflow-hidden">
                                        <img className="w-full" src={`${apiurl()}/${product?.Images[0]}`} alt="Card Image" />
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg text-center  text-white md:text-gray-800  truncate">{product?.Product_Name}</h3>
                                        <h3 className="text-lg text-center text-[#ed9d22]">Rs. {product?.Sale_Price}</h3>
                                        {/* <div className="flex justify-between mt-4">
                                            <button type="button" className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-[#FFC600] focus:outline-none">
                                                Shop Now
                                            </button>
                                            <button type="button" className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-[#FFC600] focus:outline-none">
                                                Add to Cart
                                            </button>
                                        </div> */}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Exclusive */}
                <div></div>
                <div className="py-12 md:py-0 md:min-h-[calc(100vh-60px)] flex flex-col items-center justify-end">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold md:text-black text-white">Exclusive</h1>
                        <h1 className="text-4xl md:text-8xl font-bold italianno-regular md:text-black text-white">Saree & Kurti Collections</h1>
                        <button onClick={()=> navigator('/shop')} className="mt-6 px-6 py-2 md:text-black text-white border">Shop Now</button>
                        <div className='flex flex-col items-end justify-end'>
                            <img className="w-auto h-[50vh]" src="./assets/Images/Home/Img_3.png" alt="Card Image" />
                        </div>
                    </div>
                </div>

                {/* Top Selling */}
                <div></div>
                <div className="py-12 md:py-0 md:min-h-[calc(100vh-60px)] flex flex-col items-start justify-center">
                    <div className='max-w-[85rem] w-full mx-auto px-4 md:pe-8'>  
                        <h1 className="text-2xl md:text-4xl font-bold md:text-black text-white"><span className='text-[#ed9d22]'>Top </span>Selling</h1>
                        <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6'>
                            
                            {/* Product 1 */}
                            <div className="flex w-full flex-col items-end overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-br-[4rem]" src={`${apiurl()}/${Products?.Topselling&&Products?.Topselling[0]?.Images[0]}`} alt="Card Image" />
                            </div>
                            {/* Product 2 */}
                            <div className="flex w-full flex-col overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-bl-[4rem]" src={`${apiurl()}/${Products?.Topselling&&Products?.Topselling[1]?.Images[0]}`} alt="Card Image" />
                            </div>
                            <div className='hidden xl:block'></div>

                            {/* Product 1 */}
                            <div className="flex w-full flex-col items-end overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-tr-[4rem]" src={`${apiurl()}/${Products?.Topselling&&Products?.Topselling[2]?.Images[0]}`} alt="Card Image" />
                            </div>
                            {/* Product 2 */}
                            <div className="flex w-full flex-col overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-tl-[4rem]" src={`${apiurl()}/${Products?.Topselling&&Products?.Topselling[3]?.Images[0]}`} alt="Card Image" />
                            </div>
                            <div></div>
                            
                        </div>
                    </div>
                </div>

                {/* New Arrivals */}
                <div></div>
                <div className="py-12 md:py-0 md:min-h-[calc(100vh-60px)] flex flex-col items-start justify-center">
                    <div className='max-w-[85rem] w-full mx-auto  px-4 md:pe-8'>  
                        <h1 className="text-2xl md:text-4xl font-bold md:text-black text-white"><span className='text-[#ed9d22]'>New </span>Arrivals</h1>
                        <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6'>
                            {/* Product 1 */}
                            <div className="flex w-full flex-col items-end overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-br-[4rem]" src={`${apiurl()}/${Products?.New&&Products?.New[0]?.Images[0]}`} alt="Card Image" />
                            </div>
                            {/* Product 2 */}
                            <div className="flex w-full flex-col overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-bl-[4rem]" src={`${apiurl()}/${Products?.New&&Products?.New[1]?.Images[0]}`} alt="Card Image" />
                            </div>
                            <div className='hidden xl:block'></div>

                            {/* Product 1 */}
                            <div className="flex w-full flex-col items-end overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-tr-[4rem]" src={`${apiurl()}/${Products?.New&&Products?.New[2]?.Images[0]}`} alt="Card Image" />
                            </div>
                            {/* Product 2 */}
                            <div className="flex w-full flex-col overflow-hidden">
                                <img className="w-[350px] h-[300px] object-cover object-top rounded-tl-[4rem]" src={`${apiurl()}/${Products?.New&&Products?.New[3]?.Images[0]}`} alt="Card Image" />
                            </div>
                            <div></div>
                            
                        </div>
                    </div>
                </div>
                
            </div>

        </section>

    )
}
