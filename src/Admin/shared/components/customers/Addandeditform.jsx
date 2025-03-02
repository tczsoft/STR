
import { Dialog } from 'primereact/dialog';

export default function Addandeditform(props) {

    const { visible, setVisible, handlesave, handlechange, loading, formdata,handleupdate } = props;


    return (
        <Dialog header="Product Details" visible={visible}  onHide={() => setVisible(false)} className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?._id?handlesave:handleupdate}>
                
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>First Name</label>
                            </div>
                            <input type="text" name="First_Name" value={formdata?.First_Name} onChange={handlechange} className="py-2 px-4 rounded-md border w-full outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Last Name</label>
                            </div>
                            <input type="text" name="Last_Name" value={formdata?.Last_Name} onChange={handlechange} className="py-2 px-4 rounded-md border w-full outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Email</label>
                            </div>
                            <input type="Email" name="Email" value={formdata?.Email} onChange={handlechange} className="py-2 px-4 rounded-md border w-full outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Mobilenumber</label>
                            </div>
                            <input type="text" name="Mobilenumber" value={formdata?.Mobilenumber} onChange={handlechange} className="py-2 px-4 rounded-md border w-full outline-none" required />
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Status</label>
                            </div>
                            <input type="text" name="Status" value={formdata?.Status} onChange={handlechange} className="py-2 px-4 rounded-md border w-full outline-none" required />
                        </div>
                    </div>

                <div className="mb-2">

                    <button type="submit" className="py-2 px-4 rounded-md border w-full bg-[#225a2b] text-white" >

                    {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} {!formdata?._id ? "save" : "update"}
                    </button>
                </div>
            </form>
        </Dialog>
    )
}