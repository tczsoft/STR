import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location =useLocation();
  const loc=location.pathname.split("/");
  const[visible,setvisible]=useState(false);

  return (
    <>
    <div className="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden">
      <div className="flex items-center py-4">
        <button type="button" className="text-gray-500 hover:text-gray-600" onClick={()=>{setvisible(true)}}>
          <span className="sr-only">Toggle Navigation</span>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
        </button>

        <ol className="flex items-center ms-3 whitespace-nowrap" aria-label="Breadcrumb">
          {loc&&loc.map((data,i)=>(
            i!=0&&(
              <Link key={i} to={i==1?"/"+data:"/admin/"+data}>
                <li className="flex items-center text-sm text-gray-800">
                  {data&&data[0].toUpperCase()+data.slice(1)}
                  <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </li>
              </Link>)
          ))}
        </ol>
      </div>
    </div>

    <div className={`${visible?"w-64":"w-0"} bg-[#225a2b] lg:w-64 fixed overflow-x-hidden transition-width duration-700 ease-in-out transform top-0 start-0 bottom-0 z-50  bg-gradient-to-b h-screen bg-[#225a2b] rounded-xl m-3 `}>
        <div className="p-6 flex lg:block justify-between">
          <Link to="/admin" className="flex text-xl font-semibold px-6" href="#" aria-label="Brand">
            <img src="/assets/Images/Logo/Logo.png" alt="" className="object-cover w-full" />
          </Link>
          <div className="flex lg:hidden items-center text-white" onClick={()=>[setvisible(false)]}><i className="fa-solid fa-x"></i></div>
        </div>
        <nav className="flex flex-col flex-wrap w-full p-6 " data-hs-accordion-always-open>
          <ul className=" space-y-5 ">
            <li>
              <NavLink to={'/admin/dashboard'} onClick={()=>[setvisible(false)]} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 text-nowrap ${isActive ? 'bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-black shadow' : 'text-white'}  text-sm text-slate-700  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
              <i className="fa-solid fa-chart-line"></i>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={'/admin/category'} onClick={()=>[setvisible(false)]} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 text-nowrap ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-black shadow' : 'text-white'}  text-sm text-slate-700  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
              <i className="fa-solid fa-layer-group"></i> Category & Options
              </NavLink>
            </li>
            <li>
              <NavLink to={'/admin/products'} onClick={()=>[setvisible(false)]} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 text-nowrap ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-black shadow' : 'text-white'}  text-sm text-slate-700  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
              <i className="fa-solid fa-boxes-stacked"></i> Products
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={'/admin/collections'} onClick={()=>[setvisible(false)]} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 text-nowrap ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-black shadow' : 'text-white'}  text-sm text-slate-700  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
              <i className="fa-brands fa-dropbox"></i> Collections
              </NavLink>
            </li>
            <li>
              <NavLink to={'/admin/orders'} onClick={()=>[setvisible(false)]} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 text-nowrap ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-black shadow' : 'text-white'}  text-sm text-slate-700  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
              <i className="fa-solid fa-dolly"></i>Customer Orders
              </NavLink>
            </li>
            <li>
              <NavLink to={'/admin/customers'} onClick={()=>[setvisible(false)]} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 text-nowrap ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-black shadow' : 'text-white'}  text-sm text-slate-700  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
                <i className="fa-solid fa-users"></i> Customers
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to={'/admin/users'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-black shadow' : 'text-white'}  text-sm text-slate-700  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
                <i className="fi fi-sr-users-alt"></i> Users
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
      </>
  )
}