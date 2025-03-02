import { useEffect, useRef, useState } from "react";
import useAuth from "../../shared/services/store/useAuth";
import { Link } from "react-router-dom";

export default function Topbar() {

  const { userdetails, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white  text-sm py-2.5 sm:py-4 lg:ps-[17rem] ">
      <nav className="flex items-center w-full px-4 mx-auto basis-full sm:px-6 md:px-8" aria-label="Global">
        <div className="me-5 lg:me-0 lg:hidden">
          <a className="flex-none text-xl font-semibold " href="#" aria-label="Brand">Brand</a>
        </div>
        <div className="flex items-center justify-end w-full ms-auto sm:justify-between sm:gap-x-3 sm:order-3 lg:rounded-xl lg:border lg:px-5 lg:py-3">
          <div className="sm:hidden">
            <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </button>
          </div>
          <div className="hidden sm:block">
            <p>Dashboard</p>

          </div>
          
          <div ref={dropdownRef} className="relative">
            <button onClick={() => setIsOpen(!isOpen)} role="button" id="hs-dropdown-with-header" type="button">
              <div className="relative inline-block">
                <span className="inline-flex items-center justify-center size-[46px] text-sm font-semibold leading-none rounded-full bg-teal-100 text-teal-800">
                  AC
                </span>
                <span className="absolute top-1 end-1 block size-3.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
              </div>
            </button>

            {isOpen && (<div className="absolute end-0 duration hs-dropdown-open:opacity-100 min-w-60 bg-white shadow-md rounded-lg mt-2" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-header">
              <div className="py-3 px-4 border-b border-gray-200 ">
                <p className="text-sm text-gray-500">Signed in as</p>
                <p className="text-sm font-medium text-gray-800 ">{userdetails()?.First_Name}</p>
              </div>
              <div className="p-1 space-y-0.5">
                <Link to="/" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href="#">
                  <i className="fi fi-rr-house-chimney"></i>
                  Home
                </Link>
                <a onClick={logout} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href="#">
                  <svg className="shrink-0 size-4 scale-x-[-1]" width="28" height="28" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"> <path d="M23,11h-2.152c-.174,0-.339-.093-.429-.242l-1.406-2.336c-.898-1.494-2.54-2.421-4.283-2.421h-3.802c-.954,0-1.811,.53-2.236,1.382l-1.585,3.171c-.247,.494-.047,1.095,.447,1.342,.495,.248,1.095,.046,1.342-.447l1.585-3.171c.085-.17,.256-.276,.447-.276h1.602l-1.753,4.273c-.553,1.35-.06,2.895,1.167,3.67l3.827,2.456c.144,.092,.229,.249,.229,.42v4.18c0,.552,.447,1,1,1s1-.448,1-1v-4.18c0-.856-.431-1.643-1.15-2.104l-2.23-1.431,2.469-6.096c.069,.09,.152,.167,.211,.264l1.406,2.337c.449,.747,1.271,1.21,2.142,1.21h2.152c.553,0,1-.448,1-1s-.447-1-1-1ZM14.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5ZM2,3c0-.552,.448-1,1-1h7c.552,0,1,.448,1,1s-.448,1-1,1H3c-.552,0-1-.448-1-1Zm2,9H1c-.552,0-1-.448-1-1s.448-1,1-1h3c.552,0,1,.448,1,1s-.448,1-1,1ZM1,7c0-.552,.448-1,1-1H6c.552,0,1,.448,1,1s-.448,1-1,1H2c-.552,0-1-.448-1-1Zm10.395,11.447c-.289,.577-1.117,1.553-2.395,1.553H5c-.552,0-1-.448-1-1s.448-1,1-1h4c.354,0,.609-.455,.612-.459,.259-.481,.86-.671,1.345-.421,.485,.251,.682,.839,.438,1.328Z"/>  </svg>
                  Logout
                </a>
                
              </div>
            </div>)}
          </div>

          {/* <div className="flex items-center justify-center gap-8">
            <Link to="/"><div className="text-primary" role="button"><i className="fa-solid fa-house fa-xl"></i></div></Link>
            <div className="flex flex-row items-center justify-end gap-2">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    size="sm"
                    className="transition-transform "
                    // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    name={userdetails()?.First_Name}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="gap-2 h-14">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{userdetails()?.Email}</p>
                  </DropdownItem>
                  <DropdownItem key="logout" onPress={logout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  )
}