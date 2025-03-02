/* eslint-disable react/prop-types */

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
const Tableview = (props) =>{
  const {tabledata,editfrom,handledelete,cusfilter,filtervalues,handlefiltervalue, loading }=props
  const [filters, setFilters] = useState({
    Brand_Name: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    Color: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    Status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
   
  });

  const actionbotton = (rowData) => {
    return (
      <div className="flex gap-4 ps-3">
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
        {rowData['Category_Name'] && rowData['Category_Name'].length > 0 && (
          <span>{rowData['Category_Name'].join(', ')}</span>
        )}
      </div>
    );
  };

  const array1 = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Subcategories'] && rowData['Subcategories'].length > 0 && (
          <span>{rowData['Subcategories'].join(', ')}</span>
        )}
      </div>
    );
  };

  const array2 = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Size'] && rowData['Size'].length > 0 && (
          <span>{rowData['Size'].join(', ')}</span>
        )}
      </div>
    );
  };

  const array3 = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Tag'] && rowData['Tag'].length > 0 && (
          <span>{rowData['Tag'].join(', ')}</span>
        )}
      </div>
    );
  };

  const array4 = (rowData) => {
    return (
      <div className="flex gap-4">
        {rowData['Gender'] && rowData['Gender'].length > 0 && (
          <span>{rowData['Gender'].join(', ')}</span>
        )}
      </div>
    );
  };

  // const array5 = (rowData) => {
  //   return (
  //     <div className="flex gap-4">
  //       {rowData['Colors'] && rowData['Colors'].length > 0 && (
  //         <span>{rowData['Colors'].join(', ')}</span>
  //       )}
  //     </div>
  //   );
  // };

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
  {field: 'Category_Name', header: 'Category Name' ,width: "150px",formattype:'array', data:'categ'},
  {field: 'Subcategories', header: 'Sub Categories', width: "150px",formattype:'array1' , data:'categ'},
  {field: 'Size', header: 'Size' ,width: "150px",formattype:'array2', data:'categ1' },
  {field: 'Colors', header: 'Colors' ,width: "150px",formattype:'array5', data:'categ2' },
  {field: 'Tag', header: 'Tag', width: "150px",formattype:'array3' , data:'categ1'},
  {field: 'Gender', header: 'Gender', width: "200px"},
];
  return(
    <div >
      <div >
        <DataTable value={tabledata} scrollable loading={loading} scrollHeight="680px" className='!text-sm' filters={filters}  stateStorage="session" stateKey="dt-state-demo-local" > 
          <Column header="Action" style={{minWidth: "100px"}} body={actionbotton} />
          {/* <Column header="Images"  body={image} /> */}
          {columns.map((col, i) => (
             col.data=="categ"?
             <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={col.formattype == "array"?array:array1} />:
              col.data=="categ1"?
              <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={col.formattype == "array2"?array2:array3} />:
              col.data=="categ2"?
              // <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={array5} />:
              '':
              <Column key={i} header={col.header} field={col.field} style={{minWidth: col.width}} body={array4} />

           
            // <Column key={i} field={col.field}  filterApply={filterapply} filterClear={filterclear} style={{minWidth: col.width}} filter={col.filter} filterElement={col.filterElement} header={col.header} />
          ))}

        </DataTable>
      </div>
    </div>
  )
}

export default Tableview;