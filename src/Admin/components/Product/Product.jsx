import { useCallback, useEffect, useState } from "react";
import { deleteproducts, getallcolors, getallproducts, getuniquevaluebyfield, saveBulkproducts, saveproducts, updatedelproducts, updateproducts, } from "../../shared/services/apiproducts/apiproducts";
import Tableview from "../../shared/components/product/Tableview";
// import Tablepagination from "../../shared/others/Tablepagination";
import Tableheadpanel from "../../shared/components/product/Tableheadpanel";
import Addandeditform from "../../shared/components/product/Addandeditform";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { getallcategory,  getAllcatogoryName, } from "../../shared/services/apicategory/apicategory";
import { getalloption } from "../../shared/services/apioption/apioption";
import * as XLSX from "xlsx";
import apiurl from "../../../shared/Services/apiendpoint/apiendpoint";

export default function Product() {
  const [totalRecords, setTotalRecords] = useState(0);
  const [gender, setgender] = useState([]);
  const [size, setsize] = useState([]);
  const [Tag, setTag] = useState([]);
  const [first, setFirst] = useState(0);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [visible, setVisible] = useState(false);
  const [colors, setcolors] = useState(false);
  const [formdata, setFormdata] = useState();
  const [loading, setLoading] = useState(false);
  const [tabledata, setTabledata] = useState([]);
  const [colfilter, setcolFilter] = useState({});
  const [globalfilter, setglobalfilter] = useState("");
  const [filtervalues, setfiltervalues] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allcategorydata, setallcategorydata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [file, setFile] = useState();

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      const finaldata = parsedData.map((data) => {
        {
          (data.Images = Array.from(data.Images.split(","))),
            (data.Size = Array.from(data.Size.split(","))),
            (data.gender = Array.from(data.gender.split(","))),
            (data.Tag = Array.from(data.Tag.split(","))),
            (data.search = Array.from(data.search.split(",")));
        }
      });
      bulkfileUpload(parsedData);
    };
  };

  const bulkfileUpload = async (data) => {
    const res = await saveBulkproducts(data);
    res == "success"
      ? toast.success("Successfully saved")
      : toast.error("Data not saved");
  };
  var arr = [];
  let isMounted = true;

  const getallproduct = useCallback(async () => {
    setLoading(true)
    const res = await getallproducts({ first, rows, globalfilter, ...colfilter, Product_Type: "All", });
    const res1 = await getalloption();
    const res2 = await getallcolors();
    setLoading(false)
    const allColors = [...new Set(res1.flatMap((option) => option.Colors))];
    setcolors(allColors);
    if (res1 && res1.length > 0) {
      const allGenders = [...new Set(res1.flatMap((option) => option.Gender))];
      const allSizes = [...new Set(res1.flatMap((option) => option.Size))];
      const allTags = [...new Set(res1.flatMap((option) => option.Tag))];
      setgender(allGenders);
      setsize(allSizes);
      setTag(allTags);
    }
    setcolors(res2);
    setTabledata(res?.resdata);
    setTotalRecords(res?.totallength);
  }, [first, rows, globalfilter, colfilter]);

  const onPage = (pages) => {
    console.log(pages)
    setPage(pages.first);
    setFirst(pages.page);
    setRows(rows);
  };

  const handlefiltervalue = async (field) => {
    const res = await getuniquevaluebyfield({ field });
    setfiltervalues(res);
  };

  const handlechange = (e) => {
    if (e?.target?.files) {
      const filesArray = Array.from(e.target.files);
      setFormdata({ ...formdata, [e.target.name]: filesArray });

      const newDataURLs = [];
      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newDataURLs.push(reader.result);
          if (newDataURLs.length === filesArray.length) {
            setFile(newDataURLs);
          }
        };
        reader.readAsDataURL(file);
      });
      console.log(arr);
    }
    else if(e.name){
      setFormdata({ ...formdata, [e.name]: e.htmlValue });
    }
    else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
    // console.log(formdata)
  };

  const handleCategoryChange = (event) => {
    const selectedCategoryName = event.target.value;
    setSelectedCategory(selectedCategoryName);
    const selectedCategoryObject = allcategorydata.filter(
      (key) => key.Category_Name === selectedCategoryName
    );
    selectedCategoryObject
      ? setFilteredSubcategories(selectedCategoryObject)
      : setFilteredSubcategories([]);
  };
  const cusfilter = (field, value) => {
    setcolFilter({ ...colfilter, ...{ [field]: value } });
  };

  const handlesave = async (e) => {
    e.preventDefault();

    setLoading(true);
    const updatedFormData = {
      ...formdata,
      category: selectedCategory,
    };
    await saveproducts(updatedFormData);
    toast.success("Successfully saved");
    getallproduct();
    setVisible(false);
    setLoading(false);
  };

  const newform = () => {
    setFormdata({});
    setFile();
    setVisible(true);
  };

  const editfrom = async (data) => {
    setFormdata(data);
    setSelectedCategory(data.category);
    const selectedCategoryObject = allcategorydata.filter(
      (key) => key.Category_Name === data.category
    );
    selectedCategoryObject
      ? setFilteredSubcategories(selectedCategoryObject)
      : setFilteredSubcategories([]);
    setVisible(true);
    var img = [];
    data.Images.map((data, i) => img.push(apiurl() + "/" + data));
    setFile(img);
  };

  const imgdel = async (rowData, index) => {
    rowData["Images"].splice(index, 1);
    file.splice(index, 1);
    setFile(file);
    await getallproduct();
  };

  const handleupdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedFormData = {
      ...formdata,
      category: selectedCategory,
    };
    await updateproducts(updatedFormData);
    toast.success("Sucessfully updated");
    getallproduct();
    setVisible(false);
    setLoading(false);
  };

  const handledelete = (id) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "bg-red-500 ml-2 text-white p-2",
      rejectClassName: "p-2 outline-none border-0",
      accept: async () => {
        await deleteproducts(id);
        toast.success("Sucessfully deleted");
        getallproduct();
      },
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getallcategory({ rows: 1000 }); 
        const filtr = [
          ...new Map(
            response.resdata.map((item) => [item["Category_Name"], item])
          ).values(),
        ];
        setallcategorydata(response.resdata);
        setCategories(filtr);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (isMounted) {
      getallproduct();
    }
    return () => (isMounted = false);
  }, [first, rows, globalfilter, colfilter]);

  return (
    <div>
      <div className="bg-white border rounded-3xl">
        <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} handleFileUpload={handleFileUpload} />

        <Tableview loading={loading} tabledata={tabledata} totalRecords={totalRecords} formdata={formdata} first={first} editfrom={editfrom} handledelete={handledelete}
          imgdel={imgdel} cusfilter={cusfilter} filtervalues={filtervalues} handlefiltervalue={handlefiltervalue} onPage={onPage} page={page} />

        {/* <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} /> */}
        <Addandeditform newform={newform} visible={visible} setcolors={setcolors} colors={colors} gender={gender} size={size} Tag={Tag} tabledata={tabledata}
          imgdel={imgdel} file={file} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata} handlechange={handlechange} arr={arr}
          handlesave={handlesave} handleupdate={handleupdate} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}
          filteredSubcategories={filteredSubcategories} categories={categories} />
        <ConfirmDialog />
      </div>
    </div>
  );
}
