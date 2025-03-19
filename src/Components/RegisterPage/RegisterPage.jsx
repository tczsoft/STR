import React, { useState } from 'react'
import RegisterForm from '../../shared/Components/RegisterForm/RegisterForm';

export default function RegisterPage() {

  const [visible, setVisible] = useState(false);
  const [formdata, setFormdata] = useState();
  const [loading, setLoading] = useState(false);

  const [allcategorydata, setallcategorydata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [file, setFile] = useState();

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
    await GeneratePDF(updatedFormData);
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


  const imgdel = async (rowData, index) => {
    rowData["Images"].splice(index, 1);
    file.splice(index, 1);
    setFile(file);
    await getallproduct();
  };


    return (
        <section className='py-8'>
            <div className='max-w-[65rem] w-full mx-auto px-4 '>
                <RegisterForm setFormdata={setFormdata} imgdel={imgdel} handlesave={handlesave} file={file} handlechange={handlechange} loading={loading} formdata={formdata} />
            </div>
        </section>
    )
}
