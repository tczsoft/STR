/* eslint-disable react/prop-types */
import moment from "moment-timezone"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, RadioGroup} from "@nextui-org/react";
import apiurl from "../../../../shared/Services/apiendpoint/apiendpoint";


const Tableview = (props) =>{
  const {tabledata,editfrom,handledelete,setDatabyid,downloadPDF,cusfilter,filtervalues,handlefiltervalue,databyID,userdetails,scrollBehavior, setScrollBehavior,isOpen,
     onClose,onOpenChange,modal, loading }=props

  const [visible, setVisible] = useState(false);
  const[orderData,setorderData]=useState();
  const [filters, setFilters] = useState({
  
    Email: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    Status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
   
  });
  const actionbotton = (rowData) => {
    return (
      <div className="flex gap-4">
        <button onClick={()=>editfrom(rowData)} className="inline-flex items-center gap-x-1 text-xl text-blue-600 decoration-2 font-medium " >
        <i className="fa-solid fa-pen"></i>
        </button>
        <button onClick={()=> {modal(rowData.Order_id);setorderData(rowData)}} className="inline-flex items-center gap-x-1 text-xl text-red-600 decoration-2 font-medium " >
        <i className="text-green-500 fa-solid fa-eye"></i>
        </button>
        <button onClick={()=>{downloadPDF(rowData.Order_id)}} className="inline-flex items-center gap-x-1 text-xl text-red-600 decoration-2 font-medium " >
        <i className="text-red-500 fa-solid fa-file-pdf"></i>
        </button>
      </div>
    )
  }

  const image = (rowData) => {
    return (
      <div className="flex gap-4 ">
        <img src={`${apiurl()}/images/apicompressimage?url=${rowData['Images'][0]}&width=150&height=100`}  className='rounded-xl' />
      </div>
    )
  }
  const statusItemTemplate = (option) => {
    return option;
};
  const statusFilterTemplate = (options) => {
    return <Dropdown value={options.value} options={filtervalues} onClick={()=>handlefiltervalue(options.field)} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter"  />;
};

const filterapply=(e)=>{
  return(
    <>
    <button onClick={()=>cusfilter(e.field,e.filterModel.constraints[0].value)}>Apply</button>
    </>
  )
}

const filterclear=(e)=>{

  return(
    <>
    <button  onClick={()=>{ e.filterModel.constraints[0].value = null;cusfilter(e.field,'');}}>Clear</button>
    </>
  )
}
const columns = [
  {field: 'Order_id', header: 'Order_id',width: "150px"},
  {field: 'Email', header: 'Email',width: "150px",filter: true, filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter},
  {field: 'First_Name', header: 'First Name',width: "150px"},
  {field: 'Last_Name', header: 'Last Name',width: "150px"},
  {field: 'Mobilenumber', header: 'Mobile Number',width: "150px"},
  {field: 'Delivery_Address', header: 'Delivery Addres',width: "400px"},
  {field: 'City', header: 'City',width: "150px"},
  {field: 'Total_Amount', header: 'Total Amount',width: "150px"},
  {field: 'Shipping_Cost', header: 'Shipping Cost',width: "150px"},
  {field: 'Order_Status', header: 'Order_Status',width: "150px"},
  {field: 'Payment_Status', header: 'Payment_Status',width: "150px"},
  {field: 'Payment_id', header: 'Payment id',width: "150px"},
  {field: 'Payment_Type', header: 'Payment_Type',width: "150px"},
  
];
const date=(rowData)=>{
  return rowData&&moment(rowData.Order_Date).format("DD-MM-YYYY")
}
  return(
    <div >
      <div >
        <DataTable value={tabledata} scrollable loading={loading} scrollHeight="680px" className='!text-sm' filters={filters}  stateStorage="session" stateKey="dt-state-demo-local" > 
        <Column bodyClassName={"hover:cursor-pointer"} header="Action" style={{minWidth: "100px"}}  body={actionbotton}  />
        <Column bodyClassName={"hover:cursor-pointer"} header="Order_Date" style={{minWidth: "150px"}}  body={date}  />
          {columns.map((col, i) => (
            <Column key={i} field={col.field}  filterApply={filterapply} filterClear={filterclear} style={{minWidth: col.width}} filter={col.filter} filterElement={col.filterElement} header={col.header} />
        ))}

        </DataTable>
      </div>
      <div className='relative '>
        <RadioGroup
        orientation="horizontal"
        value={scrollBehavior}
        onValueChange={setScrollBehavior}
        >
        </RadioGroup>

            <Modal backdrop={"blur"} onClose={()=>{setDatabyid([]);onClose}} size={"5xl"} isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} className='z-[60]'>
            
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{orderData.Order_id} Order Details</ModalHeader>
                    <ModalBody>
                        {databyID&&databyID.map((product,i)=>(
                        <div key={i} className="">
                            <div className="bg-white  border rounded-xl shadow-sm sm:flex z-[1] items-center">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full z-[0]">
                                  <div>
                                    <img className="object-cover object-center h-72 w-96 rounded-xl" src={`${apiurl()}/${product.Images[0]}`} alt="Image Description" />
                                </div>
                                    <div className="p-2">
                                        <div className="flex flex-col h-full sm:p-1 gap-2 justify-center text-lg">
                                            <div>
                                                <p className="mt-1 text-gray-500 "><span className="font-bold">Total Amount</span> : {product?.Sale_Price}</p>
                                            </div>
                                            <div>
                                                <p className="mt-1 text-gray-500 "><span className="font-bold">Product Name</span> : {product?.Product_Name}</p>
                                            </div>
                                            <div>
                                                <p className="mt-1 text-gray-500 "><span className="font-bold">Product Type</span> : {product?.Product_Type}</p>
                                            </div>
                                            <div>
                                                <p className="mt-1 text-gray-500 "><span className="font-bold">Fabric</span> : {product?.Fabric}</p>
                                            </div>
                                            <div>
                                                <p className="mt-1 text-gray-500 "><span className="font-bold">Selected Size</span> : {product?.Selectedsize?product?.Selectedsize:<span className="bg-[#225a2b] text-white px-2 py-1 rounded-lg" onClick={()=>setVisible(!visible)} role="button">CustomSize</span>}</p>
                                            </div>
                                            {!product?.Selectedsize&&visible&&
                                            <div className="text-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 font-semibold text-gray-600 border-primary border-1 p-2 rounded-xl">
                                              <p className="mt-"><span>NECKLINE</span> : {product?.customSize?.NECKLINE}</p>
                                              <p className="mt-1"><span>SHOULDER</span> : {product?.customSize?.SHOULDER}</p>
                                              <p className="mt-1"><span>ARMHOLE</span> : {product?.customSize?.ARMHOLE}</p>
                                              <p className="mt-1"><span>CHEST</span> : {product?.customSize?.CHEST}</p>
                                              <p className="mt-1"><span>SLEEVE_LENGTH</span> : {product?.customSize?.SLEEVE_LENGTH}</p>
                                              <p className="mt-1"><span>LOWER_CHEST</span> : {product?.customSize?.LOWER_CHEST}</p>
                                              <p className="mt-1"><span>UPPER_CHEST</span> : {product?.customSize?.UPPER_CHEST}</p>
                                              <p className="mt-1"><span>HIP</span> : {product?.customSize?.HIP}</p>
                                              <p className="mt-1"><span>HIGH_WAIST</span> : {product?.customSize?.HIGH_WAIST}</p>
                                              <p className="mt-1"><span>LOW_WAIST</span> : {product?.customSize?.LOW_WAIST}</p>
                                              <p className="mt-1"><span>WAIST</span> : {product?.customSize?.WAIST}</p>
                                              <p className="mt-1"><span>LENGTH</span> : {product?.customSize?.LENGTH}</p>
                                              <p className="mt-1"><span>TOTAL_LENGTH</span> : {product?.customSize?.TOTAL_LENGTH}</p>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <div className="flex gap-2 font-semibold">Shipment Id : <div className="font-normal">{orderData.shipment_id}</div></div>
                    </ModalFooter></>
                )}
            </ModalContent>
            </Modal>
        </div>
    </div>
  )
}

export default Tableview;