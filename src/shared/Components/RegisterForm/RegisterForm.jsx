import React, { useState } from 'react'

export default function RegisterForm(props) {
    const { setFormdata, imgdel, handlesave,file, handlechange, loading, formdata, handleupdate} = props;

    return (
        <div>
           {!loading? <form onSubmit={!formdata?._id ? handlesave : handleupdate}>
                <div className="mb-3">
                    <div className="flex items-center justify-center h-55 sm:h-60 mb-3">
                        <label className="flex items-center justify-center overflow-hidden w-[50%] h-full sm:w-[40%] rounded-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 "> 

                            {file && file.length > 0 ? (
                                (file[0].split(";")[0] === "data:video/mp4" || file[0].split(".").reverse()[0] === "mp4") ? (
                                    <video width="100" height="150" controls>
                                        <source src={file[0]} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={file[0]} className='' alt="" />
                                )
                                ) : (
                                <div className="flex flex-col items-center justify-center pt-4 pb-5">
                                    <i className="fi fi-sr-mode-landscape"></i>
                                    <p className="mb-2 text-sm text-gray-500 ">
                                        <span className="font-semibold">Click to upload</span>
                                    </p>
                                    <p className="text-xs text-gray-500 ">PNG, JPG</p>
                                </div>
                            )}
                            <input type="file" name="Images" multiple onChange={handlechange} className="hidden" />
                        </label>
                    </div>
                    <div className="flex gap-4 justify-center">
                        {file&&(file.length>0)&&file.map((data,i)=>{
                            if(i!=0){ return(
                                <div className="relative overflow-hidden rounded-xl" key={i}>
                                    {(data.split(";")[0]=="data:video/mp4"||data.split(".").reverse()[0]=="mp4")?
                                    <video width="100" height="150" controls>
                                        <source src={data} type="video/mp4"/>
                                    </video>:<img key={i} src={data}  className='rounded-xl h-[100px] w-[150px] object-cover'/>}
                                    <div role="button" className="absolute m-1 right-0 top-0 text-white bg-[#00000085] px-[4px] rounded-full" onClick={()=>{imgdel(formdata,i)}}><i className="fa-solid fa-xmark"></i></div>
                                </div>
                            )}
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Name</label>
                        </div>
                        <input type="text" name="Name" value={formdata?.Name} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>


                    <div className="mb-2">
                        <div className="mb-2">
                            <label>DOB</label>
                        </div>
                        <input type="date" name="DOB" value={formdata?.DOB} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>

                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Mobile No.</label>
                        </div>
                        <input type="text" name="Mobile" value={formdata?.Mobile} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Blood Group</label>
                        </div>
                        <input type="text" name="Blood_Group" value={formdata?.Blood_Group} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none"  />
                    </div>
                    {/* <div className="mb-2">
                        <div className="mb-2">
                            <label>Fabric</label>
                        </div>
                        <input type="text" name="Fabric" value={formdata?.Fabric} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none"  required/>
                    </div> */}

                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Gender</label>
                        </div>
                        <select name="Stock" value={formdata?.Stock} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required >
                            <option selected disabled>---Select---</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Transgender</option>
                        </select>
                    </div>
                </div>
                
                <div className="mb-2">
                    <button type="submit" className="w-full px-4 py-2 text-white bg-[#225a2b] border rounded-md" >
                        {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} {!formdata?._id ? "save" : "update"}
                    </button>
                </div>
            </form>:

            <div className="flex  items-center justify-center min-h-[50vh]">
                <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-red-500 text-center w-80">
                    <img src={file[0]} alt="Profile Image" class="w-24 h-24 mx-auto rounded-full border-4 border-purple-800" />
                    <h2 class="text-lg font-semibold text-purple-800 mt-3">Fanclub Member</h2>
                    <p class="text-gray-600">Name: <strong>{formdata.Name}</strong></p>
                    <p class="text-gray-600">Membership ID: <span class="text-red-500 font-bold">FC12345</span></p>
                    <p class="text-gray-600">Join Date: January 2025</p>
                    <p class="text-gray-600">Valid Until: December 2026</p>
                    <div class="border-t border-gray-300 mt-4 pt-2 italic text-gray-500">Signature</div>
                    <button onClick="window.print()" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 print:hidden">
                        Print ID Card
                    </button>
                </div>
            </div>}
        </div>
    )
}
