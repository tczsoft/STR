import React from 'react'
import { Link } from 'react-router-dom'
import apiurl from '../../Services/apiendpoint/apiendpoint'

export default function Cart(props) {

    const {selectedProducts,clearCart,delSelItem,gotocheckout,cartItems,calculateSubtotal ,handleWidthChange,decreaseQuantity,increaseQuantity,handleHeightChange,  quantities} = props
    
    return(
    
        <section className="relative py-16 bg-white ">
            <div className="absolute top-16 lg:top-48 left-[-62%] sm:left-[-12%] z-[0]">
                <img loading="lazy" src="/images/Ellipse-stoke.png" className="w-[400px]" alt="" srcSet="" />
            </div>

            <div className="max-w-[85rem] w-full mx-auto px-2 md:px-8 relative z-[1]">

                {cartItems?.length === 0 ? (
                    <div className="flex items-center justify-center h-[35.6vh]">
                        <div className="text-center">
                            <p className="text-2xl font-bold mb-5">Your cart is empty</p>
                            <Link to="/shop" type="button" className="inline-flex items-center px-3 py-2 text-base font-semibold text-white border border-transparent rounded-lg gap-x-2 bg-[#ed9d22] disabled:opacity-50 disabled:pointer-events-none  ">
                            <i className="fa-brands fa-shopify"></i> <span className=" ">Continue shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-5">
                            <p className="text-2xl font-bold text-[#ed9d22] text-center"><i className="fi fi-rr-cart-shopping-fast"></i> Cart</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 min-h-[29.7vh]">
                            <div className="lg:col-span-8 xl:col-span-8">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-3xl font-bold"><span className="text-[#ed9d22]">Your</span> Cart</p>
                                    <button type="button" onClick={()=>{clearCart()}} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#ed9d22] text-white hover:bg-[#225a2b] focus:outline-none focus:bg-[#225a2b] disabled:opacity-50 disabled:pointer-events-none">
                                        <i className="fi fi-rs-trash"></i> <span className="hidden md:block">Clear Cart</span>  
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1">
                                    {cartItems?.map((product, index) => (
                                        <div className="relative">
                                            <div className="cart-bg shadow-lg sm:flex relative z-[1]">
                                                {/* <div className="absolute bottom-0 right-[0] z-[1]">
                                                    <button onClick={() => {delSelItem(product?._id)}} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-base font-semibold rounded-tl-lg rounded-br-lg border border-transparent bg-[#225a2b] text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none  ">
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div> */}
                                                <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 w-full relative z-[0]">
                                                    <Link to={`/product-event/${product._id}`}  className='overflow-hidden m-4'>
                                                        {/* <img loading="lazy" className="object-cover object-top h-52 w-full rounded-3xl" src={`${apiurl()}/${product?.Images[0]}`} alt="Image Description" /> */}
                                                        <img loading="lazy" className="object-cover object-top h-52 w-full" src={`${apiurl()}/${product?.Images[0]}`} alt="Image Description" />
                                                    </Link>
                                                    <div className="col-span-3 px-3 pt-3">
                                                        <div className=" ">
                                                            <div className=" ">
                                                                <div className="flex justify-between items-center mb-4">
                                                                    <Link to={`/product-event/${product._id}`} className="text-lg font-bold text-gray-800 ">
                                                                        {product?.Product_Name}
                                                                    </Link>

                                                                    <button type="button" onClick={() => {delSelItem(product?._id)}} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#ed9d22] text-white hover:bg-[#225a2b] focus:outline-none focus:bg-[#225a2b] disabled:opacity-50 disabled:pointer-events-none">
                                                                        <i className="fi fi-rs-trash"></i>
                                                                    </button>
                                                                </div>
                                                                <div>
                                                                    <p className="mt-1 text-gray-500 "><span className="font-bold">Fabric</span> : {product?.Fabric}  {/*{product?.Fabric} */}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mt-1 text-gray-500 "><span className="font-bold">Size</span> : {product?.Selectedsize} {/*{product?.Selectedsize?product?.Selectedsize:"custom"} */}</p>
                                                                </div>

                                                                <div className="md:flex block justify-between items-center mb-4">
                                                                    <div className="flex items-center mt-2">
                                                                         <p className="mt-1 text-gray-500  me-3">QTY : </p> 
                                                                         <button  onClick={() => decreaseQuantity(index)}  type="button" className="inline-flex items-center pt-1 text-2xl font-bold text-gray-800 rounded-full me-2 gap-x-2 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none ">
                                                                            <i className="fa-solid fa-circle-minus"></i>
                                                                        </button>
                                                                        <input type="number" min="0" className="block w-12 px-2 py-1 text-xl border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "  value={quantities[index]}  />
                                                                        <button  onClick={() => increaseQuantity(index)} type="button" className="inline-flex items-center pt-1 text-2xl font-bold text-gray-800 rounded-full ms-2 gap-x-2 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none ">
                                                                            <i className="fa-solid fa-circle-plus"></i>
                                                                        </button> 
                                                                            {/* <button type="button" className="inline-flex items-center pt-1 text-2xl font-bold text-gray-800 rounded-full me-2 gap-x-2 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none ">
                                                                            <i className="fa-solid fa-circle-minus"></i>
                                                                        </button>
                                                                        <input type="number" min="0" className="block w-12 px-2 py-1 text-xl border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "  value="1"  />
                                                                        <button  type="button" className="inline-flex items-center pt-1 text-2xl font-bold text-gray-800 rounded-full ms-2 gap-x-2 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none ">
                                                                            <i className="fa-solid fa-circle-plus"></i>
                                                                        </button> */}
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="md:flex block justify-between items-center">
                                                                    <p className="mt-1 text-gray-500 "><span className="font-bold">Price</span> : Rs. { ((product?.Discount==0?product.Sale_Price:product?.Sale_Price-product?.Discount)).toFixed(2)} </p>
                                                                </div>
                                                            </div>
                                                                
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     ))} 
                                </div>
                            </div>
                            <div className="lg:col-span-4 xl:col-span-4">
                                <div className="mt-14 flex flex-col sticky lg:top-[99px] lg:left-[5%] z-30 cart-bg bg-white shadow-lg p-4 md:p-5">
                                    <p className="mt-3 text-2xl font-bold ">Estimated Value</p>
                                    <p className="mt-4 text-xs font-medium text-gray-500 uppercase">
                                        Tax included and shipping calculated at checkout
                                    </p>

                                    <div className="flex items-center justify-between mt-3 text-xl font-bold ">
                                        <p>SUBTOTAL:</p> <p>Rs. {calculateSubtotal()} </p>
                                        {/* <p>SUBTOTAL:</p> <p>Rs. 1000 </p> */}
                                    </div>

                                    <div className="flex items-center justify-center mt-5">
                                        <button onClick={gotocheckout} type="button" className="p-4 mb-3 px-5 py-3 inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-2 border-[#4CAF50]  text-[#4CAF50] hover:text-white hover:bg-[#4CAF50] disabled:opacity-50 disabled:pointer-events-none  ">
                                            <i className="fi fi-brands-whatsapp"></i> Send a Quote
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
