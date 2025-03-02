import { useCallback, useEffect, useState } from "react"
import Tableview from "../../shared/components/orders/Tableview";
import Tablepagination from "../../shared/others/Tablepagination";
import Tableheadpanel from "../../shared/components/orders/Tableheadpanel";
import { ConfirmDialog } from 'primereact/confirmdialog';
// import { getallcustomers, getuniquevaluebyfield } from "../../shared/services/apicustomers/apicustomers";
import { getallorders, updatedeOrder } from "../../shared/services/apiorders/apiorders";
import { apidownloadPDF, getcustomerordersbyid } from "../../../shared/services/orders/apiOrders";
import { useDisclosure } from "@nextui-org/react";
import useAuth from "../../../shared/services/store/useAuth";
import Addandeditform from "../../shared/components/orders/Addandeditform";
import toast from "react-hot-toast";
export default function Orders(){
    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [databyID,setDatabyid]=useState([]);
    const [visible, setVisible] = useState(false);
    const [formdata,setFormdata]=useState({});
    const [scrollBehavior, setScrollBehavior] = useState("inside");
    const {isOpen, onOpen, onClose,onOpenChange} = useDisclosure();
    const {userdetails}=useAuth();
    const [tabledata, setTabledata]=useState([]);
    const [colfilter, setcolFilter] = useState({});
    const [globalfilter,setglobalfilter]=useState('')
    const [filtervalues,setfiltervalues]=useState([])
    const [loading, setLoading] = useState(false);
    let isMounted = true;

    const customerorderdatabyID=async (id)=>{const res = await getcustomerordersbyid(id);setDatabyid(res)}
    const modal=(id)=>{
        customerorderdatabyID(id);
        onOpen();
    } 

    const getallorder = useCallback(async ()=>{
        setLoading(true)
        const res= await getallorders({first,rows,globalfilter,...colfilter});
        setLoading(false)
        setTabledata(res?.resdata);
        setTotalRecords(res?.totallength);
    },[first,rows,globalfilter,colfilter]);


    useEffect(()=>{
        if(isMounted){
            getallorder();
        }
        return(()=>isMounted = false);
    },[first,rows,globalfilter,colfilter])


    const onPage = (page) => {
        setPage(page)
        setFirst(rows *(page -1));
        setRows(rows);
    };

    const handlefiltervalue=async(field) => {
        const res=await getuniquevaluebyfield({field})
        setfiltervalues(res)
    }

    const cusfilter = (field, value) => {
       
        setcolFilter({...colfilter,...{[field]:value}})
        
    };

    const editfrom=(data)=>{
        setFormdata(data);
        setVisible(true);
    }

    const downloadPDF = async (data)=>{
        console.log(data)
        var resData = await apidownloadPDF(data)
        const pdfBlob = new Blob([resData], { type: 'application/pdf' });
        const pdfFileName = `${data}.pdf`;
        saveAs(pdfBlob, pdfFileName);
    }

    const handlechange = (e)=>{
        if(e.target.files){
            setFormdata({...formdata,...{[e.target.name]:e.target.files}});
            reader.readAsDataURL(e.target.files[0]);
        }
        else {
        setFormdata({...formdata,...{[e.target.name]:e.target.value}});
        }
    }

    const handleupdate=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await updatedeOrder(formdata)
        toast.success("Sucessfully updated")
        getallorder()
        setVisible(false)
        setLoading(false)
        
    }

 
    return(
        <div>

                <div className="bg-white rounded-3xl border">
                    <Tableheadpanel setglobalfilter={setglobalfilter} />

                    <Tableview tabledata={tabledata} setDatabyid={setDatabyid} editfrom={editfrom} totalRecords={totalRecords} first={first} modal={modal} databyID={databyID} userdetails={userdetails} scrollBehavior={scrollBehavior} setScrollBehavior={setScrollBehavior} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}
                    loading={loading} cusfilter={cusfilter} filtervalues={filtervalues} handlefiltervalue={handlefiltervalue} downloadPDF={downloadPDF} />

                    <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} /> 
                    
                    <Addandeditform visible={visible} handlechange={handlechange} handleupdate={handleupdate} setVisible={setVisible} formdata={formdata} />
                  
                    <ConfirmDialog />
                </div>
    
        </div>
    )
}