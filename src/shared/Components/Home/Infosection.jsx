import React from 'react'

export default function Infosection() {
  return (
    <section className='py-12 md:py-24 relative'>
      <div className='max-w-[85rem] w-full mx-auto px-4'>

        <div className="grid md:grid-cols-2 mb-10 md:mb-3">
            <div className="grid grid-cols-2 gap-4">
              <div className='text-center mb-5'>
                <div className='flex justify-center mb-5'>
                  <img src="./assets/Images/Icons/Icon_1.png" alt="" />
                </div>
                <h1 className='text-xl md:text-3xl'>Quality Material</h1>
              </div>

              <div className='text-center mb-5'>
                <div className='flex justify-center mb-5'>
                  <img src="./assets/Images/Icons/Icon_2.png" alt="" />
                </div>
                <h1 className='text-xl md:text-3xl'>Best Designs</h1>
              </div>

              <div className='text-center mb-5'>
                <div className='flex justify-center mb-5'>
                  <img src="./assets/Images/Icons/Icon_3.png" alt="" />
                </div>
                <h1 className='text-xl md:text-3xl'>Trendy Accents</h1>
              </div>

              <div className='text-center mb-5'>
                <div className='flex justify-center mb-5'>
                  <img src="./assets/Images/Icons/Icon_4.png" alt="" />
                </div>
                <h1 className='text-xl md:text-3xl'>Premium Support</h1>
              </div>
              
            </div>
        </div>

        
      </div>

      <div className='py-5 mt-5 bg-[#FFC600] w-[85%]'>
        <div className='max-w-[55rem] w-full mx-auto px-4'>
          <div className=''>
            <h1 className='text-lg md:text-3xl font-semibold'>Venba Boutique –</h1>
          </div>
          <div className='mt-3'>
            <p className='text-md md:text-2xl w-[75%]'>Where Tradition Meets Trend in Sarees & Kurtis!</p>
          </div>
        </div>
        <div className='absolute md:right-10 right-2 bottom-0'>
          <img className='w-[150px] md:w-[350px]' src="./assets/Images/Home/Img_4.png" alt="" />
        </div>
        
      </div>
        
    </section>
  )
}
