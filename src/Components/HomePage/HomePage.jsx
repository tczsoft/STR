import React, { useCallback, useEffect, useState } from 'react'
import Herosection from '../../shared/Components/Home/Herosection'
import Slidesection from '../../shared/Components/Home/Slidesection'
import Infosection from '../../shared/Components/Home/Infosection'
import { getHomeproducts } from '../../shared/Services/products/apiProducts';

export default function HomePage() {

    const [Products, setProducts] = useState([]);

    let isMounted = true;

    const getallproduct = useCallback(async ()=>{
        const res = await getHomeproducts();
        setProducts(res);
    },[]);


    useEffect(() => {
        if (isMounted) {
            getallproduct();
        }
        return (() => isMounted = false);
    }, []);

    return (
        <section className='mt-16'>
            <Herosection />
            {/* <Slidesection Products={Products} />
            <Infosection /> */}
        </section>
    )
}
