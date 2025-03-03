import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useCart from '../../shared/Services/store/useCart';
import { getsearchproducts } from '../../shared/Services/products/apiProducts';
import apiurl from '../../shared/Services/apiendpoint/apiendpoint';

export default function Header() {

    const { count } = useCart();
    const navigate = useNavigate();

    const [formdata,setFormdata]=useState('');
    const [searchResults,setSearchResults] = useState([])
    const [Opensearch,setOpensearch] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearchChange = async (e,rowIndex)=>{
        setFormdata(e.target.value)

        if(e.target.value){
          var data = await getsearchproducts({data:e.target.value});
          setSearchResults(data)
        }
        else{
            setSearchResults([])
        }
        // setRowIndex(rowIndex['rowIndex'])
    }

    const loadData = (data)=>{
        navigate(`/product-event/${data?._id}`)
        setFormdata("");
        setOpensearch(false);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <div className='fixed top-0 z-50 w-full'>
                <header className="relative flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
                    <nav className="max-w-[85rem] w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <Link className="flex-none text-xl font-semibold  focus:outline-none focus:opacity-80" to="/" aria-label="Brand">
                                <span className="inline-flex items-center gap-x-2 text-xl font-semibold ">
                                    <img className="w-[250px] h-auto" src="/assets/Images/Logo/Logo.png" alt="Logo" /> 
                                </span>
                            </Link>
                            <div className="lg:hidden">
                                <button type="button" onClick={toggleMenu} className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                                    <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                                    <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                    <span className="sr-only">Toggle navigation</span>
                                </button>
                            </div>
                        </div>
                        
                        <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow lg:block" aria-labelledby="hs-navbar-example-collapse">
                            <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:ps-5">
                                <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-black flex hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-current="page">Home</Link>
                                <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-black flex hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-current="page">All About STR</Link>
                                <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-black flex hover:text-gray-400 focus:outline-none focus:text-gray-400 " href="#">About US</Link>
                                <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-black flex hover:text-gray-400 focus:outline-none focus:text-gray-400  relative" href="#">Blog</Link>
                                <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-black flex hover:text-gray-400 focus:outline-none focus:text-gray-400 " href="#">Videos</Link>
                                <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-black flex hover:text-gray-400 focus:outline-none focus:text-gray-400 " href="#">Join Our STR Team</Link>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className='w-full bg-[#2e3051]'>
                    <div className="flex gap-5 items-center justify-center py-2 text-center">
                        <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-white flex hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-current="page"><div><i className="fi fi-rr-time-fast"></i></div> <div className='text-sm md:text-lg ms-2'>Latest</div></Link>
                        <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-white flex hover:text-gray-400 focus:outline-none focus:text-gray-400 " href="#"><i className="fi fi-br-arrow-trend-up"></i> <div className='text-sm md:text-lg ms-2'>Trand</div></Link>
                        <Link to={'/'} onClick={toggleMenu} className="pt-3 text-lg text-white flex hover:text-gray-400 focus:outline-none focus:text-gray-400 " href="#"><i className="fi fi-rr-fire-flame-curved"></i> <div className='text-sm md:text-lg ms-2'>Hot</div> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
