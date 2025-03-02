import React, { useState } from 'react'
import { Slider } from 'primereact/slider';

export default function Filter(props) {
    const {FilterOptions, FilterValues, OnchangeFilter, TotalRecords} = props

    return (
        <div className=''>
            
            <h3 className='text-gray-800 '><span className='text-lg font-semibold'>{TotalRecords}</span> Products Found</h3>
            <div className="hs-accordion-group" data-hs-accordion-always-open="">
                <div className="hs-accordion active" id="hs-basic-always-open-heading-one">
                    <button  className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-always-open-collapse-one">
                        <span className='text-md font-bold'>Price</span>
                        <svg className="hs-accordion-active:hidden hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg className="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-always-open-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-always-open-heading-one">
                        <div className="py-4 px-3">
                            <p className='text-center mb-2'>Rs. {FilterValues?.Price[0]} - {FilterValues?.Price[1]}</p>
                            <Slider min={FilterOptions?.Price[0]} max={FilterOptions?.Price[1]} value={FilterValues?.Price} onChange={(e) => OnchangeFilter(e.value,'Price')} step={1000} className="w-14rem" range />
                                <div className='flex justify-between mt-3'>
                                    <p>{FilterOptions?.Price[0]}</p>
                                    <p>{FilterOptions?.Price[1]}</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="hs-accordion active" id="hs-basic-always-open-heading-two">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-always-open-collapse-two">
                        <span className='text-md font-bold'>Category</span>
                        <svg className="hs-accordion-active:hidden hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg className="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-always-open-collapse-two" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-always-open-heading-two">
                        {FilterOptions.Category&&(FilterOptions?.Category).map((data,i)=>(
                            <div className="flex" key={i}>
                                <input type="checkbox" id={`category-${i}`} value={data} onChange={(e) => OnchangeFilter(data, 'category')} className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                <label htmlFor={`category-${i}`} className="text-sm text-gray-500 ms-3">{data}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hs-accordion active" id="hs-basic-always-open-heading-four">
                    <button  className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-always-open-collapse-four">
                        <span className='text-md font-bold'>Colour</span>
                        <svg className="hs-accordion-active:hidden hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg className="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-always-open-collapse-four" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-always-open-heading-two">
                        <div className="grid grid-cols-4 xl:grid-cols-5 gap-y-5 lg:gap-x-2 xl:gap-x-0 mb-5">
                            {FilterOptions.Color&&(FilterOptions?.Color).map((data,i)=>(
                                <label className="chkcontainer" key={i} htmlFor={`color-${i}`}>
                                    <input type="checkbox" id={`color-${i}`} value={data} onChange={() => OnchangeFilter(data, 'Color')} />
                                    <span className="checkmark hover:cursor-pointer" style={{background:data}}></span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hs-accordion active" id="hs-basic-always-open-heading-three">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-always-open-collapse-three">
                        <span className='text-md font-bold'>Size</span>
                        <svg className="hs-accordion-active:hidden hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg className="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-always-open-collapse-three" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-always-open-heading-three">
                        {FilterOptions.Size&&(FilterOptions?.Size).map((data,i)=>(
                            <div className="flex" key={i}>
                                <input type="checkbox" id={`size-${i}`} value={data} onChange={() => OnchangeFilter(data, 'Size')} className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                <label htmlFor={`size-${i}`} className="text-sm text-gray-500 ms-3">{data}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
