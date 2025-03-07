export default function Tableheadpanel(props){
    const {newform,setglobalfilter}=props;
      return(
          <div className="md:flex items-center justify-between px-6 py-4">
              <div>
              <h2 className="text-xl font-semibold text-gray-800 ">
                Collections
              </h2>
            </div>
  
              <div>
                <div className="md:inline-flex my-3 md:my-0 gap-x-2">
                   <input type="input" placeholder="Search..." className="px-4 py-2 me-3 border outline-none rounded-xl" onChange={(e)=>setglobalfilter(e.target.value)} />
                  <button onClick={newform} className="inline-flex my-3 md:my-0 items-center px-3 py-2 text-sm font-semibold text-white bg-[#225a2b] border border-transparent rounded-lg gap-x-2 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Add Collection
                  </button>
                </div>
              </div>
            </div>
      )
  }