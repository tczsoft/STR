
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
export default function Addandeditform(props) {

    const { visible, setVisible,gender, subcat, handlesave, handlechange, loading, formdata,handleupdate,filteredSubcategories,selectedCategory,handleCategoryChange,categories } = props;
   
    return (
        <Dialog header="Product Details" visible={visible}  onHide={() => setVisible(false)} className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?._id?handlesave:handleupdate}>
                <div className='mb-3'>
                    {/* <div className='flex items-center justify-center mb-3'>
                        <label className="flex flex-col  items-center overflow-hidden justify-center w-[80%] h-55 sm:w-[40%] sm:h-60 rounded-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        {file?<><img src={file} className='' alt="" srcset="" /></>:<>
                            <div className="flex flex-col items-center justify-center pt-4 pb-5">
                                <i className="fi fi-sr-mode-landscape"></i>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500 ">SVG, PNG, JPG</p>
                            </div></>}
                            <input type="file" name="Images" multiple onChange={handlechange} className="hidden"  />
                        </label>
                    </div> */}
                    <div className='hidden'>
                        <img width="50px" src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2173.jpg?t=st=1711361047~exp=1711364647~hmac=71fd55e8418ee7913fe07a5f00af8d93c6db7474a1d71e2d5fbf7d431975180f&w=1380" alt="" />
                    </div>
                </div>
                
                <div className='grid grid-cols-1 gap-3  '>
                    
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Category Name</label>
                            </div>
                            <select name="Category_Name" value={formdata?.Category_Name} onChange={handlechange} options={categories} className="w-full px-4 py-2 border rounded-md outline-none" required>
                            <option value="">Select Category</option>
                            {categories.map((category,index) => (
                             <option key={index} value={category}>{category}</option>
                            ))} 
                            </select>                        
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>SubCategories</label>
                            </div>
                            <MultiSelect value={formdata?.Subcategories} name='Subcategories' onChange={handlechange} options={subcat} optionLabel="" display="chip"  placeholder="Select Sub Category" maxSelectedLabels={3} className="w-full md:w-20rem border" />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Gender</label>
                            </div>
                            <MultiSelect value={formdata?.Gender} name='Gender' onChange={handlechange} options={gender} optionLabel="" display="chip" placeholder="Select Gender" maxSelectedLabels={3} className="w-full md:w-20rem border" />
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
                    {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} {!formdata?._id ? "save" : "update"}
                    </button>
                </div>
            </form>
        </Dialog>
    )
}