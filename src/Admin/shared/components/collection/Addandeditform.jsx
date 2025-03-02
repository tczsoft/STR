
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';

export default function Addandeditform(props) {

    const { visible, setVisible, file, Tag, handlesave, handlechange, loading, formdata,handleupdate } = props;


    return (
        <Dialog header="Product Details" visible={visible}  onHide={() => setVisible(false)} className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?._id?handlesave:handleupdate}>
                <div className='mb-3'>
                    <div className='flex items-center justify-center mb-3'>
                        <label className="flex flex-col  items-center overflow-hidden justify-center w-[80%] h-55 sm:w-[40%] sm:h-60 rounded-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50">
                        {file?<><img src={file} className='' alt="" srcSet="" /></>:<>
                            <div className="flex flex-col items-center justify-center pt-4 pb-5">
                                <i className="fi fi-sr-mode-landscape"></i>
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG</p>
                            </div></>}
                            <input type="file" name="Images" multiple onChange={handlechange} className="hidden"  />
                        </label>
                    </div>
                    <div className='hidden'>
                        <img width="50px" src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2173.jpg?t=st=1711361047~exp=1711364647~hmac=71fd55e8418ee7913fe07a5f00af8d93c6db7474a1d71e2d5fbf7d431975180f&w=1380" alt="" />
                    </div>
                </div>
                
                <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 '>
                    
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Collection Name</label>
                            </div>
                            <input type="text" name="Collection_Name" value={formdata?.Collection_Name} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Tag</label>
                            </div>
                            <select name="Tag" value={formdata?.Tag} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required>
                                <option value="">Select Tag</option>
                                {Tag&&Tag.length > 0 ? (
                                    Tag.map((data, index) => (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                ) : (
                                    <option disabled>No Subcategory</option>
                                )}
                            </select>
                         </div>
                    <div className='col-span-full'>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Status</label>
                            </div>
                            <select  name="Status" value={formdata?.Status} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required >
                            <option selected disabled>---select a status---</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mb-2">

                    <button type="submit" className="w-full px-4 py-2 text-white bg-[#225a2b] border rounded-md" >

                    {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} {!formdata?._id ? "save" : "update"}</button>
                </div>
            </form>
        </Dialog>
    )
}