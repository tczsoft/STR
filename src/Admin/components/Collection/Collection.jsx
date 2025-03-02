import { useCallback, useEffect, useState } from "react"
import Tablepagination from "../../shared/others/Tablepagination";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Tableheadpanel from "../../shared/components/collection/Tableheadpanel";
import Tableview from "../../shared/components/collection/Tableview";
import Addandeditform from "../../shared/components/collection/Addandeditform";
import { deletecollection, getallcollection,savecollection, updatedecollection } from "../../shared/services/apicollection/apicollection";
import apiurl from "../../../shared/services/apiendpoint/apiendpoint";
import { getalloption } from "../../shared/services/apioption/apioption";
export default function Collection(){

    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [Tag,setTag]=useState([])
    const [rows, setRows] = useState(10);
    const [visible, setVisible] = useState(false);
    const [formdata,setFormdata]=useState({});
    const [loading, setLoading] = useState(false);
    const [tabledata, setTabledata]=useState([]);
    const [colfilter, setcolFilter] = useState({});
    const [globalfilter,setglobalfilter]=useState('');
    const [filtervalues,setfiltervalues]=useState([]);
    const [file, setFile] = useState();
    let isMounted = true;

    const getcollections = useCallback(async ()=>{
        setLoading(true)
        const res= await getallcollection({first,rows,globalfilter,...colfilter});
        const res1= await getalloption();
        setLoading(false)
        setTabledata(res?.resdata);
        setTotalRecords(res?.totallength);
        setTag(res1[0]?.Tag)
    },[first,rows,globalfilter,colfilter]);

    useEffect(()=>{
        if(isMounted){
            getcollections();
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
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result);
    };

    const handlechange = (e)=>{
        if(e.target.files){
            setFormdata({...formdata,...{[e.target.name]:e.target.files}});
            reader.readAsDataURL(e.target.files[0]);
        }
        else {
        setFormdata({...formdata,...{[e.target.name]:e.target.value}});
        }
    }

    const cusfilter = (field, value) => {
        setcolFilter({...colfilter,...{[field]:value}})
    };

    const handlesave=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await savecollection(formdata)
        toast.success("Sucessfully saved")
        getcollections()
        setVisible(false)
        setLoading(false)
    }

    const handleupdate=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await updatedecollection(formdata)
        toast.success("Sucessfully updated")
        getcollections()
        setVisible(false)
        setLoading(false)
        
    }

    const newform=()=>{
        setFormdata({});
        setFile();
        setVisible(true)
    }
    
    const editfrom=(data)=>{
        setFormdata(data);
        setVisible(true);
        setFile(apiurl()+"/"+data.Images[0])
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
             await deletecollection(id)
             toast.success("Sucessfully deleted")
             getcollections()
            }
        });
    };

    return(
        <div>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} />

                <Tableview loading={loading} tabledata={tabledata} handledelete={handledelete} totalRecords={totalRecords} first={first} editfrom={editfrom}
                    cusfilter={cusfilter} filtervalues={filtervalues} handlefiltervalue={handlefiltervalue} />

                <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} /> 
                <Addandeditform visible={visible} Tag={Tag} handleupdate={handleupdate} file={file} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata}
                    handlechange={handlechange} handlesave={handlesave}/>
                <ConfirmDialog />
            </div>
    
        </div>
    )
}