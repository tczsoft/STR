import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Tableheadpanel from "../../shared/components/category/Tableheadpanel";
import Tableview from "../../shared/components/category/Tableview";
import Addandeditform from "../../shared/components/category/Addandeditform";
import Option from "../Option/Option"
import { deletecategory, getallcategory, savecategory, updatecategory } from "../../shared/services/apicategory/apicategory";
import { getalloption } from "../../shared/services/apioption/apioption";

export default function Category(){
    const [pageChange,setpageChange]=useState(true);
    const [subcat,setsubcat]=useState([])
    const [gender,setgender]=useState([])
    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [visible, setVisible] = useState(false);
    const [formdata,setFormdata]=useState({});
    const [loading, setLoading] = useState(false);
    const [tabledata, setTabledata]=useState([]);
    const [colfilter, setcolFilter] = useState({});
    const [globalfilter,setglobalfilter]=useState('');
    const [filtervalues,setfiltervalues]=useState([]);
    const [categories, setCategories] = useState([]);
    const [allcategorydata, setallcategorydata] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredSubcategories, setFilteredSubcategories] = useState([]);
    const [file, setFile] = useState();
    let isMounted = true;

    const getallproduct = useCallback(async ()=>{
        setLoading(true)
        const res= await getallcategory({first,rows,globalfilter,...colfilter});
        const res1= await getalloption();
        setLoading(false)
        setTabledata(res?.resdata);
        setTotalRecords(res?.totallength);
        if (res1 && res1.length > 0) {
            const allSubcategories = [...new Set(res1.flatMap(option => option.Subcategories))];
            const allGenders = [...new Set(res1.flatMap(option => option.Gender))];
            const allCategories = [...new Set(res1.flatMap(option => option.Category_Name))];
            setsubcat(allSubcategories);
            setgender(allGenders);
            setCategories(allCategories);
        }
    },[first,rows,globalfilter,colfilter]);

    useEffect(()=>{
        if(isMounted){
            getallproduct();
        }
        return(()=>isMounted = false);
    },[first,rows,globalfilter,colfilter])

    const onPage = (pages) => {
        setPage(pages.page)
        setFirst(pages.first);
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
        setFormdata({...formdata,...{[e.target.name]:e.target.value}});
        
    }

    const cusfilter = (field, value) => {
        setcolFilter({...colfilter,...{[field]:value}})
    };

    const handlesave=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await savecategory(formdata)
        toast.success("Sucessfully saved")
        getallproduct()
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
        setVisible(true)
    }

    const handleupdate=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await updatecategory(formdata)
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
             await deletecategory(id)
             toast.success("Sucessfully deleted")
             getallproduct()
            }
        });
    };


    const handleCategoryChange = (event) => {
        const selectedCategoryName = event.target.value;
        setSelectedCategory(selectedCategoryName);
        const selectedCategoryObject=allcategorydata.filter(key=>key.Category_Name===selectedCategoryName)
        selectedCategoryObject?setFilteredSubcategories(selectedCategoryObject):setFilteredSubcategories([])
    };

    return(
        <div>
            {pageChange?
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} setpageChange={setpageChange} />

                <Tableview loading={loading} tabledata={tabledata} totalRecords={totalRecords} first={first} editfrom={editfrom} handledelete={handledelete} 
                    cusfilter={cusfilter} filtervalues={filtervalues} handlefiltervalue={handlefiltervalue} page={page} onPage={onPage} rows={rows} />

                {/* <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} />  */}
                <Addandeditform visible={visible} subcat={subcat} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata}
                    handlechange={handlechange} gender={gender} handlesave={handlesave} handleupdate={handleupdate} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} filteredSubcategories={filteredSubcategories} categories={categories}/>
                <ConfirmDialog />
            </div>
            :   
            <Option setpageChange={setpageChange}/>
        }
        </div>
    )
}