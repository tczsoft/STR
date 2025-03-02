/* eslint-disable react/prop-types */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
import apiurl from '../../../../shared/Services/apiendpoint/apiendpoint';

const Tableview = (props) =>{
  var {tabledata,editfrom,handledelete,cusfilter,filtervalues,handlefiltervalue, loading,totalRecords, page, onPage } = props
  
  // tabledata[0].search=tabledata[0].search.toString()
  const [data,setdata]=useState("Co-ord_sets")

  const [filters, setFilters] = useState({
    Brand_Name: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    Color: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    Status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
   
  });

  const actionbotton = (rowData) => {
    return (
      <div className="flex gap-4">
        <button onClick={()=>editfrom(rowData)} className="inline-flex items-center text-xl font-medium text-blue-600 gap-x-1 decoration-2 " >
        <i className="fa-solid fa-pen"></i>
        </button>
        <button onClick={()=>handledelete(rowData?._id)} className="inline-flex items-center text-xl font-medium text-red-600 gap-x-1 decoration-2 " >
        <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    )
  }


  const image = (rowData) => {
    return (
      <div className="flex gap-4">
        <div className="relative overflow-hidden rounded-xl">
          {rowData && rowData['Images'] && rowData['Images'][0] ? ( (
            <img src={apiurl() + "/" + rowData['Images'][0]} className='rounded-xl h-auto w-[100px] object-cover' alt="image"  />
          )) : (
            <div className="h-[100px] w-[150px] flex items-center justify-center border rounded-xl">
              <span>No Image</span>
            </div>
          )}
          </div>
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
    {field: 'Product_Name', header: 'Product Name',width: "400px",filter: true, filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter},
    
    // {field: 'Brand_Name', header: 'Brand Name',width: "200px"},
    {field: 'Product_Type', header: 'Product_Type',width: "200px"},
    {field: 'Fabric', header: 'Fabric',width: "200px"},
    {field: 'Color', header: 'Color',width: "200px", formattype:'Color'},
    {field: 'category', header: 'Category',width: "200px"},
    {field: 'subcategory', header: 'Sub Category',width: "200px"},
    {field: 'Tag', header: 'Tag',width: "200px", formattype:'arrayy'},
    {field: 'Size', header: 'size' ,width: "200px", formattype:'array'},
    {field: 'gender', header: 'Gender' ,width: "200px", formattype:'array1'},
    {field: 'search', header: 'Search' ,width: "200px" , formattype:'array2'},
    // {field: 'Regular_Price', header: 'Regular Price'},
    {field: 'Sale_Price', header: 'Sale Price',width: "150px"},
    {field: 'Discount', header: 'Discount',width: "150px"},
    // {field: 'GST_Percentage', header: 'GST%'},
    {field: 'Product_Description', header: 'Description',width: "400px", formattype:'html'},
    {field: 'Status', header: 'Status',width: "150px", filter: true, filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter}
  ];

  const array = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Size'] && rowData['Size'].length > 0 && (
          <span>{rowData['Size'].join(', ')}</span>
        )}
      </div>
    );
  };

  const arrayy = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Tag'] && rowData['Tag'].length > 0 && (
          <span>{rowData['Tag'].join(', ')}</span>
        )}
      </div>
    );
  };

  const array1 = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['gender'] && rowData['gender'].length > 0 && (
          <span>{rowData['gender'].join(', ')}</span>
        )}
      </div>
    );
  };

  const array2 = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['search'] && rowData['search'].length > 0 && (
          <span>{rowData['search'].join(', ')}</span>
        )}
      </div>
    );
  };

  const descriptionTemplate = (rowData) => {
    return <span dangerouslySetInnerHTML={{ __html: rowData.Product_Description }} />;
  };

  const ColorTemplate = (rowData) => {
    return <span className='p-3 rounded-full' style={{backgroundColor:rowData?.Color}}> </span>;
  };

  const sno=(rowData,rowIndex)=>{
    return(
      <div>
        {rowIndex['rowIndex']+1}
      </div>
    )
  }

  return(
    <div >
      <div >
        <DataTable value={tabledata} totalRecords={totalRecords} scrollable loading={loading} scrollHeight="640px" className='!text-sm' filters={filters} 
          paginator rows={10} lazy first={page} onPage={onPage} CurrentPageReport >
          <Column header="S.No" style={{minWidth: "100px"}} body={sno} />
          <Column header="Action" style={{minWidth: "100px"}} body={actionbotton} />
          <Column header="Images" style={{minWidth: "200px"}} body={image} />
          {columns.map((col, i) => (
            col.formattype == "html"?
            <Column key={i} header={col.header} field={col.field} className='truncate' style={{minWidth: col.width}} body={descriptionTemplate} />:
            col.formattype == "Color"?
            <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={ColorTemplate} />:
            col.formattype == "array"||col.formattype == "arrayy"?
            <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={col.formattype == "array"?array:arrayy} />:
              col.formattype == "array1"||col.formattype == "array2"?
            <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={col.formattype == "array1"?array1:array2} />:
            <Column key={i} field={col.field}  filterApply={filterapply} style={{minWidth: col.width}} filterClear={filterclear} filter={col.filter} filterElement={col.filterElement} header={col.header} />
          ))}

        </DataTable>
      </div>
    </div>
  )
}

export default Tableview;