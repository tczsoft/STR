
import { Dialog } from 'primereact/dialog';

export default function Addandeditform(props) {

    const { visible, setVisible, handlesave, handlechange, loading, formdata,handleupdate } = props;



    return (
        <Dialog header="Order Details" visible={visible}  onHide={() => setVisible(false)} className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?._id?handlesave:handleupdate}>
                <div className='mb-3'>
                    <div className='hidden'>
                        <img width="50px" src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2173.jpg?t=st=1711361047~exp=1711364647~hmac=71fd55e8418ee7913fe07a5f00af8d93c6db7474a1d71e2d5fbf7d431975180f&w=1380" alt="" />
                    </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label>Order Status</label>
                            </div>
                            <select  name="Order_Status" value={formdata?.Order_Status} onChange={handlechange} className="py-2 px-4 rounded-md border w-full outline-none" required >
                            <option selected disabled>---select a status---</option>
                            <option>processing</option>
                            <option>pending</option>
                            <option>cancelled</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-2">
                            <div className="mb-2">
                                <label>Payment Status</label>
                            </div>
                            <select  name="Payment_Status" value={formdata?.Payment_Status} onChange={handlechange} className="py-2 px-4 rounded-md border w-full outline-none" required >
                            <option selected disabled>---select a status---</option>
                            <option>Paid</option>
                            <option>Not Paid</option>
                            </select>
                        </div>
                </div>

                <div className="mb-2">

                    <button type="submit" className="py-2 px-4 rounded-md border w-full bg-[#225a2b] text-white" >

                    {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} {!formdata?._id ? "save" : "update"}</button>
                </div>
            </form>
        </Dialog>
    )
}