import React from 'react'

export default function Contact() {
  return (
    <div className='max-w-[85rem] w-full mx-auto px-4'>
        <h1 className='text-3xl text-center font-bold'><span className='text-[#FFC600]'><i className="fi fi-br-phone-call"></i> Contact</span> Us</h1>
        <div className='md:h-[50vh] grid grid-cols-1 md:grid-cols-2 gap-4 shadow-2xl mt-5'>
            <div className='p-4 md:p-8 h-full flex items-center cart-bg'>
                <dl className="grid grid-cols-5 gap-3">
                    <dt className="col-span-1 font-semibold  mb-3">
                        <div className='text-md md:text-xl'>
                            <i className="fi fi-sr-phone-call bg-[#FFC600] px-3 pt-3 pb-2 rounded-md"></i>
                        </div>
                    </dt>
                    <dd className="col-span-4 mb-3 sm:mb-0 ">
                        <p className='text-md md:text-xl font-bold text-[#82351A]'>+91 93610 36440</p>
                    </dd>

                    <dt className="col-span-1 font-semibold  mb-3">
                        <div className='text-md md:text-xl'>
                        <i className="fi fi-sc-envelope"></i>
                            <i className="fi fi-ss-envelope bg-[#FFC600] px-3 pt-3 pb-2 rounded-md"></i>
                        </div>
                    </dt>
                    <dd className="col-span-4 mb-3 sm:mb-0 ">
                        <p className='text-md md:text-xl font-bold text-[#82351A]'>venbaboutique0@gmail.com</p>
                    </dd>

                    <dt className="col-span-1 font-semibold  mb-3">
                        <div className='text-md md:text-xl'>
                            <i className="fi fi-rr-land-layer-location bg-[#FFC600] px-3 pt-3 pb-2 rounded-md"></i>
                        </div>
                    </dt>
                    <dd className="col-span-4 mb-3 sm:mb-0 ">
                        <p className='text-md md:text-xl font-bold text-[#82351A]'>#7, Ranganathan Road (Near Kalyan Theatre) Villupuram - 605 602</p>
                    </dd>

                </dl>

            </div>

            <div className=' h-full flex items-center'>
                <iframe className="w-full min-h-64 md:h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.904734633437!2d79.488283!3d11.9370478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5357ccc0956dbd%3A0x11cc8e9f7db89f6d!2sVENBA%20boutique!5e0!3m2!1sen!2sin!4v1678295389507!5m2!1sen!2sin"
                    allowFullScreen="" loading="lazy" title="Location Map" ></iframe>
            </div>

        </div>
    </div>
  )
}
