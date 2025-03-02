import { useCallback, useEffect, useState } from "react"
import Tableview from "../../shared/components/customers/Tableview";
import Tablepagination from "../../shared/others/Tablepagination";
import Tableheadpanel from "../../shared/components/customers/Tableheadpanel";
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { deleteuser, getallcustomers, getuniquevaluebyfield, updateuser } from "../../shared/services/apicustomers/apicustomers";
import Addandeditform from "../../shared/components/customers/Addandeditform";
import toast from "react-hot-toast";
export default function Customers(){
    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const [formdata,setFormdata]=useState();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tabledata, setTabledata]=useState([]);
    const [colfilter, setcolFilter] = useState({});
    const [globalfilter,setglobalfilter]=useState('')
    const [filtervalues,setfiltervalues]=useState([])
    let isMounted = true;


    const getallproduct = useCallback(async ()=>{
        // console.log({first,rows,...colfilter})
        setLoading(true)
        const res= await getallcustomers({first,rows,globalfilter,...colfilter});
        setLoading(false)
        setTabledata(res?.resdata);
        setTotalRecords(res?.totallength);
    },[first,rows,globalfilter,colfilter]);


    useEffect(()=>{
        if(isMounted){
            getallproduct();
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
        // console.log(colfilter)
        
    };

    const editfrom=(data)=>{
        setFormdata(data);
        setVisible(true);
    }
      
    const handlechange = (e) => {
        
        setFormdata({...formdata, [e.target.name]: e.target.value});
        
    }

    const handleupdate=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await updateuser(formdata)
        toast.success("Sucessfully updated")
        getallproduct()
        setVisible(false)
        setLoading(false)
        
    }

    const handledelete = (id) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'bg-red-500 ml-2 text-white p-2',
            rejectClassName: 'p-2 outline-none border-0',
            accept:async ()=>{
             await deleteuser(id)
             toast.success("Sucessfully deleted")
             getallproduct()
            }
        });
    };

 

 
    return(
        <div>

                <div className="bg-white rounded-3xl border">
                    <Tableheadpanel setglobalfilter={setglobalfilter} />

                    <Tableview tabledata={tabledata} loading={loading} editfrom={editfrom} handledelete={handledelete} totalRecords={totalRecords} first={first} 
                    cusfilter={cusfilter} filtervalues={filtervalues} handlefiltervalue={handlefiltervalue} />

                    <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} /> 

                    <Addandeditform visible={visible} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata}
                    handlechange={handlechange} handleupdate={handleupdate}  />

                    <ConfirmDialog />
                </div>
    
        </div>
    )
}