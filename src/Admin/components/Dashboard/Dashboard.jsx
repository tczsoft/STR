import { useCallback, useEffect, useState } from "react";
import Dashboardcard from "../../shared/components/cards/Dashboardcard";
import { getdashboard } from "../../shared/services/apiorders/apiorders";

export default function Dashboard(){
    const [totalCustomers,setTotalCustomers]=useState(0);
    const [data,setData]=useState([]);



    const dashboardData=useCallback(async ()=>{
        const res = await getdashboard();
        setTotalCustomers(res?.totalcustomer)
        setData(res?.arrayData)
    },[])

    useEffect(()=>{
        dashboardData();
    },[])
    return(
        <div>
           <Dashboardcard totalCustomers={totalCustomers} data={data}/>
        </div>
    )
}