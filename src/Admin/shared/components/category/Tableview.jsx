/* eslint-disable react/prop-types */

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
import apiurl from '../../../../shared/Services/apiendpoint/apiendpoint';


const Tableview = (props) =>{
  const {tabledata,totalRecords,editfrom,page,onPage, rows,handledelete,cusfilter,filtervalues,handlefiltervalue,loading}=props
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

  const array = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Subcategories'] && rowData['Subcategories'].length > 0 && (
          <span>{rowData['Subcategories'].join(', ')}</span>
        )}
      </div>
    );
  };

  const arrayy = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Gender'] && rowData['Gender'].length > 0 && (
          <span>{rowData['Gender'].join(', ')}</span>
        )}
      </div>
    );
  };

  const image = (rowData) => {
    return (
      <div className="flex gap-4 ">
        <img src={`${apiurl()}/${rowData['Images'][0]}`}  className='rounded-xl h-[100px] w-[150px] object-cover' />
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
  // {field: 'Brand_Name', header: 'Brand Name',filter: true,width: "150px", filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter},
  {field: 'Category_Name', header: 'Category Name' ,width: "150px"},
  {field: 'Subcategories', header: 'Sub Categories', width: "150px", formattype:'array'},
  {field: 'Gender', header: 'Gender', width: "200px", formattype:'arrayy'},
  // {field: 'Card_color', header: 'Card Color',filter: true, filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter},
  {field: 'Status', header: 'Status', filter: true,width: "150px", filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter}
];
  return(
    <div >
      <div >
        <DataTable value={tabledata} totalRecords={totalRecords} loading={loading} scrollable scrollHeight="680px" className='!text-sm' filters={filters}
          paginator lazy rows={rows} first={page} onPage={onPage} > 

          <Column header="Action" style={{minWidth: "100px"}} body={actionbotton} />
          {/* <Column header="Images"  body={image} /> */}
          {columns.map((col, i) => (
           col.formattype == "array"||col.formattype == "arrayy"?
           <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={col.formattype == "array"?array:arrayy} />:
            <Column key={i} field={col.field}  filterApply={filterapply} filterClear={filterclear} style={{minWidth: col.width}} filter={col.filter} filterElement={col.filterElement} header={col.header} />
          ))}

        </DataTable>
      </div>
    </div>
  )
}

export default Tableview;