import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className='bg-[#383534]'>

        
            <div className="max-w-[85rem] w-full mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-8">

                    <div className='text-white md:col-span-2'>
                        <h5 className='font-bold text-lg text-[#FFC600] mb-3'>Disclaimer</h5>
                        <p>Team Shah Rukh Khan is a fan club that is managed by fans and it’s not affiliated with SRK, RCE(Red Chillies Entertainment), or KKR(Kolkata Knight Riders) directly.</p>
                    </div>
                    <div className='text-white'>
                        <h5 className='font-bold text-lg text-[#FFC600] mb-3'>Quick Links</h5>
                        <div><Link className='text-md mb-2' to="" >Home</Link></div>
                        <div><Link className='text-md mb-2' to="" >About Us</Link></div>
                        <div><Link className='text-md mb-2' to="" >Tearms & Conditions</Link></div>
                        <div><Link className='text-md mb-2' to="" >Privacy & Policy</Link></div>
                        <div><Link className='text-md mb-2' to="" >Contact Us</Link></div>
                    </div>
                    <div className='text-white'>
                        <h5 className='font-bold text-lg text-[#FFC600] mb-3'>Categories</h5>
                        <div><Link className='text-md mb-2' to="" >Blog</Link></div>
                        <div><Link className='text-md mb-2' to="" >Videos</Link></div>
                    </div>

                    <div className='text-white'>
                        <h5 className='font-bold text-lg text-[#FFC600] mb-3'>Social Media</h5>
                        <div className='text-2xl'>
                            <Link to={'https://www.facebook.com/share/1BJnHDEVhj/'} target='_blank' className=' text-white me-2'><i className="fi fi-brands-facebook"></i></Link>
                            <Link to={'https://www.instagram.com/worldstrfansclub?igsh=MTEyZjd1Ynl3YXgydg%3D%3D&utm_source=qr'} target='_blank' className=" text-white me-2"> <i className="fi fi-brands-instagram"></i></Link>
                            <Link to={'https://x.com/WorldSTRFanclub?s=09'} target='_blank' className=" text-white me-2"> <i className="fi fi-brands-twitter-alt"></i></Link>
                            <Link to={'https://youtube.com/@strfansclubthanjavur?si=rSJpGBRdBEk-Bsav'} target='_blank' className=" text-white"> <i className="fi fi-brands-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-2 text-center'>
            <p>© STR Fanclub 2025. Developed by <span className='text-[#1f1361]'><Link >WebStrike</Link></span></p>
        </div>
    </footer>
  )
}
