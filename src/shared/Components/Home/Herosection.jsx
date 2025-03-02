import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Herosection() {
  const [newstories, setNewstories] = useState([1,2,3,4,5,6,7,8,9,7,8,9])
  const [ourpicks, setOurpicks] = useState([1,2,3])
  return (
    <section className='py-16'>
        <div className='max-w-[85rem] w-full mx-auto px-4 flex flex-col items-center justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link to={'/blog/new'} className='relative'>
                <img src="/assets/Images/Home/Img_2.jpg" className='h-86 w-full object-cover' alt="" />
                <div className="absolute bottom-0 start-0 end-0 bg-[#000000c7]">
                  <div className="p-4 md:p-5">
                    <h1 className="text-xl font-bold text-white">
                      Card title
                    </h1>
                    <p className="mt-1 text-white">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <p className="mt-5 text-xs text-white dark:text-neutral-500">
                      Last updated 5 mins ago
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={'/blog/new'} className='relative'>
                <img src="/assets/Images/Home/Img_1.png" className='h-86 w-full object-cover' alt="" />
                <div className="absolute bottom-0 start-0 end-0 bg-[#000000c7]">
                  <div className="p-4 md:p-5">
                    <h1 className="text-xl font-bold text-white">
                      Card title
                    </h1>
                    <p className="mt-1 text-white">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <p className="mt-5 text-xs text-white dark:text-neutral-500">
                      Last updated 5 mins ago
                    </p>
                  </div>
                </div>
              </Link>
          </div>
        </div>
        <div className='max-w-[85rem] w-full mx-auto px-4 '>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className="col-span-2">
              <h2 className='text-xl font-semibold py-5'>More stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                
                {/* Card */}
                {newstories.map((Response,index)=>(
                  <div key={index} className=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <Link to={'/blog/new'}><img className="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" /></Link>
                    <div className="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                      <span className="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i className="fi fi-rr-fire-flame-curved"></i></span>
                      <Link to={'/blog/new'} className="text-lg font-bold text-gray-800 dark:text-white">
                        Card title
                      </Link>
                      <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                ))}

              </div>
              <div className='text-center mt-5'>
                <Link to={'/blog/new'} type="button" className="py-2 my-4 px-3 w-[70%] items-center gap-x-2 text-md font-medium rounded-md border border-transparent bg-[#2e3051] text-white hover:bg-[#2e3051] disabled:pointer-events-none">
                  LOAD MORE
                </Link>
              </div>
            </div>

            <div className="">
              <h2 className='text-xl font-semibold py-5 text-center side-line'>Our Picks</h2>

              {/* Card */}
              {ourpicks.map((Response,index)=>(
                <div key={index} className=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <Link to={'/blog/new'} ><img className="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" /></Link>
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
