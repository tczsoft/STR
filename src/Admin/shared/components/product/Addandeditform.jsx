import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import toast from 'react-hot-toast';
import { Editor } from 'primereact/editor';

import { getallproducts } from '../../services/apiproducts/apiproducts';

export default function Addandeditform(props) {
    const { visible,colors, setcolors , setFormdata, setVisible,gender,size,Tag, imgdel, handlesave,file, handlechange, loading, formdata, handleupdate, bool ,filteredSubcategories,selectedCategory,handleCategoryChange,categories} = props;
    const [clr, setclr] = useState(false);
    const [newColor, setNewColor] = useState('');
     
   
    const handleNewColorSubmit = (e) => {
        e.preventDefault();
        if (newColor) {
            setcolors([...colors, newColor]); 
            setFormdata({ ...formdata, Color: newColor }); 
            toast.success("New color added successfully");
            setclr(false); 
        }
    };

    return (
        <>
        <Dialog header="Product Details" visible={visible} onHide={() => {setVisible(false)}} className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?._id ? handlesave : handleupdate}>
                   <div className="mb-3">
                    <div className="flex items-center justify-center mb-3">
                        <label className="flex flex-col items-center overflow-hidden justify-center w-[80%] h-55 sm:w-[40%] sm:h-60 rounded-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 "> 
                         {/*{file?(file[0].split(";")[0]=="data:video/mp4"||file[0].split(".").reverse()[0]=="mp4")?
                            <video width="100" height="150" controls>
                                <source src={file[0]} type="video/mp4"/>
                            </video>:
                            <>
                            <img src={file[0]} className='' alt="" srcSet="" /></>:<>
                            <div className="flex flex-col items-center justify-center pt-4 pb-5">
                                <i className="fi fi-sr-mode-landscape"></i>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500 ">SVG, PNG, JPG</p>
                            </div></>} */}

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
                                    <p className="text-xs text-gray-500 ">SVG, PNG, JPG</p>
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
                            <label>Product Name</label>
                        </div>
                        <input type="text" name="Product_Name" value={formdata?.Product_Name} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Category</label>
                        </div>
                        <select name="category" value={selectedCategory} onChange={handleCategoryChange} className="w-full px-4 py-2 border rounded-md outline-none" required>
                            <option value="">Select Category</option>
                            {categories&&categories.map((category,index) => (
                                <option key={category._id} value={category.Category_Name}>{category.Category_Name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Sub-Category</label>
                        </div>
                        <select name="subcategory" value={formdata?.subcategory} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required>
                            <option value="">Select Sub-Category</option>
                            {filteredSubcategories&&filteredSubcategories.length > 0 ? (
                                filteredSubcategories.map((data, index) => (
                                    data?.Subcategories.length>0?data?.Subcategories.map((data1, i) => (
                                        <option key={i} value={data1}>{data1}</option>
                                    )):
                                    <option key={index} value={data.Subcategories}>{data.Subcategories}</option>
                                ))
                            ) : (
                                <option disabled>No Subcategory</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Size</label>
                        </div>
                        <MultiSelect value={formdata?.Size} name='Size' onChange={handlechange} options={size} optionLabel="" display="chip" placeholder="Select Size" maxSelectedLabels={10} className="w-full md:w-20rem border" required/>
                    </div>
                    <div className="mb-2">
                        <div className="pb-2">
                            <label>Gender</label>
                        </div>
                        <MultiSelect  value={formdata?.gender}   name="gender"  onChange={handlechange}  className="w-full md:w-20rem border" options={gender}  optionLabel="" display="chip" placeholder="Select Gender" maxSelectedLabels={3} required />
                    {/* <select  value={formdata?.gender || ''}  name="gender"  onChange={handlechange}  className="w-full px-4 py-2 border rounded-md outline-none"  required >
                            <option value="">Select Gender</option> 
                            {gender?.map((g, index) => ( <option key={index} value={g}>{g}</option> ))}
                    </select> */}
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Product Type</label>
                        </div>
                        <input type="text" name="Product_Type" value={formdata?.Product_Type} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>
                    <div className="col-span-2 mb-2">
                        <div className="mb-2">
                            <label>Product Description</label>
                        </div>
                        {/* <input type="text" name="Product_Description" value={formdata?.Product_Description} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required /> */}
                        <Editor name="Product_Description" value={formdata?.Product_Description} onTextChange={(e) => handlechange({...e,name:"Product_Description"})} style={{ height: '320px' }} required />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Tag</label>
                        </div>
                        <MultiSelect value={formdata?.Tag} name='Tag' onChange={handlechange} options={Tag} optionLabel="" display="chip" placeholder="Select Tags" maxSelectedLabels={3} className="w-full md:w-20rem border" required/>
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Sale Price</label>
                        </div>
                        <input type="text" name="Sale_Price" value={formdata?.Sale_Price} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Discount</label>
                        </div>
                        <input type="text" name="Discount" value={formdata?.Discount} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none"  />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Fabric</label>
                        </div>
                        <input type="text" name="Fabric" value={formdata?.Fabric} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none"  required/>
                    </div>
                    {/* <div className="mb-2">
                        <div className="mb-2">
                            <label>Search</label>
                        </div>
                        <input type="text" name="search" value={formdata?.search} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none"  required/>
                    </div> */}
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Color</label>
                        </div>
                        <div className='flex gap-5'>
                       <select name="Color" value={formdata?.Color || ''} onChange={handlechange} className="w-3/5 px-4 py-2 border rounded-md outline-none" >
                            <option value="">Select Color</option>
                            {colors&&colors.map((color,index) => (
                                <option key={index} value={color} style={{color:color,backgroundColor:color}} className={`bg-${color}`}>{color}</option>
                            ))} 
                           
                        </select>
                       
                        <button type='button'  onClick={() => setclr(true)} className="w-2/5 h-10 border rounded-md outline-none">New color</button>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Stock</label>
                        </div>
                        <select name="Stock" value={formdata?.Stock} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required >
                            <option selected disabled>---Select a status---</option>
                            <option>Stock</option>
                            <option>Out of Stock</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Status</label>
                        </div>
                        <select name="Status" value={formdata?.Status} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required >
                            <option selected disabled>---Select a status---</option>
                            <option>Active</option>
                            <option>In Active</option>
                        </select>
                    </div>
                </div>
                
                <div className="mb-2">
                    <button type="submit" className="w-full px-4 py-2 text-white bg-[#225a2b] border rounded-md" >
                        {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} {!formdata?._id ? "save" : "update"}
                    </button>
                </div>
            </form>
        </Dialog>
        <Dialog header="Customize color" visible={clr} onHide={() => {setclr(false)}} className="!w-3/5 lg:!w-[20rem]">
            <form className=' mx-auto'  onSubmit={handleNewColorSubmit}>
                <div className='flex justify-between gap-5 my-2'>
                <label>Select New Color</label>
                <input type="color"  value={newColor}  onChange={(e) => setNewColor(e.target.value)} className='w-16'/>
                </div>
                <button type='submit' className='bg-[#225a2b] w-full mt-5 p-1.5 text-white rounded-lg'>Submit</button>
            </form>
        </Dialog>
        </>
    )
}
