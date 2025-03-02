
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
export default function Addandeditform(props) {

    const { visible, setVisible, file, handlesave, handlechange, loading, formdata,handleupdate,filteredSubcategories,selectedCategory,handleCategoryChange,categories } = props;

   
    
    const customHandleChange = (e) => {
        const { name, value } = e.target;

        if (['Category_Name', 'Subcategories', 'Gender', 'Size', 'Colors', 'Tag'].includes(name)) {
        
            const arrayValue = value.split(',').map(item => item.trim());
            handlechange({ target: { name, value: arrayValue } }); 
        } else {
            handlechange(e);
        }
    };
    return (
        <Dialog header="Product Details" visible={visible}  onHide={() => setVisible(false)} className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?._id?handlesave:handleupdate}>
                <div className='grid grid-cols-1 gap-3  '>
                    
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Category Name</label>
                            </div>
                                <input type="text" name="Category_Name" value={formdata?.Category_Name} onChange={customHandleChange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Subcategory Name</label>
                            </div>
                                <input type="text" name="Subcategories" value={formdata?.Subcategories?.join(', ') || ''} onChange={customHandleChange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Gender</label>
                            </div>
                                <input type="text" name="Gender" value={formdata?.Gender} onChange={customHandleChange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Size</label>
                            </div>
                                <input type="text" name="Size" value={formdata?.Size?.join(', ') || ''} onChange={customHandleChange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Tag</label>
                            </div>
                                <input type="text" name="Tag" value={formdata?.Tag?.join(', ') || ''} onChange={customHandleChange} className="w-full px-4 py-2 border rounded-md outline-none" required />
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