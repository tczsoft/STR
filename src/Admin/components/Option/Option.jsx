import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Tableheadpanel from "../../shared/components/Options/Tableheadpanel";
import Tableview from "../../shared/components/Options/Tableview";
import Addandeditform from "../../shared/components/Options/Addandeditform";
import { deletecategory, getallcategory, savecategory, updatecategory } from "../../shared/services/apicategory/apicategory";
import { getalloption, saveoptions, updateoption , deleteoptions } from "../../shared/services/apioption/apioption";
export default function Option(props){
    const{setpageChange}=props

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
        const res= await getalloption();
        setLoading(false)
        setTabledata(res);
        setTotalRecords(res.length)
    },[]);

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
        await saveoptions(formdata)
        toast.success("Sucessfully saved")
        getallproduct()
        setVisible(false)
        setLoading(false)
    }

    const newform=()=>{
        setFormdata({});
        // setFile();
        setVisible(true)
    }
    
    const editfrom=(data)=>{
        setFormdata(data);
        setVisible(true)
    }

    const handleupdate=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await updateoption(formdata)
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
             await deleteoptions(id)
             toast.success("Sucessfully deleted")
             getallproduct()
            }
        });
    };

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         try {
    //             const response = await getalloption({ rows: 1000 }); 
    //             // const response = await getallcategory({ rows: 1000 }); 
    //             const filtr=[...new Map((response.resdata).map(item => [item["Category_Name"], item])).values()]
    //             setallcategorydata(response.resdata)
    //             setCategories(filtr);
    //         } catch (error) {
    //             console.error('Error fetching categories:', error);
    //         }
    //     };
    //     fetchCategories();
    // }, []);

    const handleCategoryChange = (event) => {
        const selectedCategoryName = event.target.value;
        setSelectedCategory(selectedCategoryName);
        // const selectedCategoryObject = allcategorydata.find(category => category.Category_Name == selectedCategoryName);
        const selectedCategoryObject=allcategorydata.filter(key=>key.Category_Name===selectedCategoryName)
        selectedCategoryObject?setFilteredSubcategories(selectedCategoryObject):setFilteredSubcategories([])
        // if (selectedCategoryObject) {
        //     const subcategories = selectedCategoryObject.subcategories.map(subcategoryString => subcategoryString.split(',').map(sub => sub.trim()));
        //     setFilteredSubcategories(subcategories.flat());
        // } else {
        //     setFilteredSubcategories([]);
        // }
    };

    return(
        <div>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel newform1={newform} setglobalfilter={setglobalfilter} setpageChange={setpageChange}/>

                <Tableview tabledata={tabledata} totalRecords={totalRecords} loading={loading} first={first} editfrom={editfrom} handledelete={handledelete} 
                    cusfilter={cusfilter} filtervalues={filtervalues} handlefiltervalue={handlefiltervalue} />

                <Addandeditform visible={visible} file={file} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata}
                    handlechange={handlechange} handlesave={handlesave} handleupdate={handleupdate} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} filteredSubcategories={filteredSubcategories} categories={categories}/>
                <ConfirmDialog />
            </div>
    
        </div>
    )
}