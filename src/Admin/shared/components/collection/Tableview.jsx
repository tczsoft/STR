/* eslint-disable react/prop-types */

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
const Tableview = (props) =>{
  const {tabledata,editfrom,handledelete,cusfilter,filtervalues,handlefiltervalue, loading}=props
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
      <div className="flex gap-4 ">
        <img src={`${apiurl()}/${rowData['Images'][0]}`}  className='rounded-xl h-[100px] w-[150px] object-cover object-top' />
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
  // {field: 'Brand_Name', header: 'Brand Name',filter: true, filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter},
  {field: 'Collection_Name', header: 'Collection Name'},
  {field: 'Tag', header: 'Tag Name'},
  {field: 'Status', header: 'Status', filter: true, filterElement: statusFilterTemplate, filterMatchMode: "custom", filterFunction: cusfilter}
];
  return(
    <div >
      <div >
        <DataTable value={tabledata} scrollable loading={loading} scrollHeight="680px" className='!text-sm' filters={filters}  stateStorage="session" stateKey="dt-state-demo-local" > 
          <Column header="Action"  body={actionbotton} />
          <Column header="Images"  body={image} />
          {columns.map((col, i) => (
            <Column key={i} field={col.field}  filterApply={filterapply} filterClear={filterclear} filter={col.filter} filterElement={col.filterElement} header={col.header} />
          ))}

        </DataTable>
      </div>
    </div>
  )
}

export default Tableview;