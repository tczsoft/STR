import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Readblog() {
      const [newstories, setNewstories] = useState([1,2,3,4,5,6,7,8,9,7,8,9])
      const [ourpicks, setOurpicks] = useState([1,2,3])
    return (
        <section>
            <div className='max-w-[85rem] w-full mx-auto px-4 '>
                <ol className="flex items-center whitespace-nowrap">
                    <li className="inline-flex items-center">
                        <Link to={'/'} className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="#">
                            Home
                        </Link>
                        <svg className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </li>
                    <li className="inline-flex items-center">
                        <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="#">
                        Blog
                        <svg className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        </a>
                    </li>
                    <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200" aria-current="page">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </li>
                </ol>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className="col-span-2">
                        <div className='py-5'>
                            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 text-sm font-bold bg-[#1e175e] text-white mb-3">Blog</span>
                            <h2 className='text-3xl md:text-5xl font-bold mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                            <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-500'>Yes, Dr. Shah Rukh Khan for you!</h3>
                        </div>
                        <div className="">
                            
                            {/* Card */}
                            <div className="mb-4 flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <img className="w-full h-auto rounded-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                                {/* <div className="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                                    <span className="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i className="fi fi-rr-fire-flame-curved"></i></span>
                                </div> */}
                            </div>

                            <div>
                                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>


                            </div>
                            

                        </div>
                        {/* <div className='text-center'>
                            <Link type="button" className="py-2 my-4 px-3 w-[70%] items-center gap-x-2 text-md font-medium rounded-md border border-transparent bg-[#2e3051] text-white hover:bg-[#2e3051] disabled:pointer-events-none">
                            LOAD MORE
                            </Link>
                        </div> */}
                    </div>

                    <div className="">
                        <h2 className='text-xl font-semibold py-5 text-center side-line'>Our Picks</h2>

                        {/* Card */}
                        {ourpicks.map((Response,index)=>(
                            <div key={index} className=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <Link ><img className="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" /></Link>
                                <div className="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                                    <span className="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i className="fi fi-rr-fire-flame-curved"></i></span>
                                    <Link className="text-lg font-bold text-gray-800 dark:text-white">
                                    Card title
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
