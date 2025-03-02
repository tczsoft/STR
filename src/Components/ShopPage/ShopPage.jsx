import React, { useCallback, useEffect, useState } from 'react'
import Filter from '../../shared/Components/Shop/Filter/Filter';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';
import { getAllproducts, getFilerValus } from '../../shared/Services/products/apiProducts';
import apiurl from '../../shared/Services/apiendpoint/apiendpoint';
import { Helmet } from 'react-helmet';


export default function ShopPage() {

    const [products, setProducts] = useState([]);
    const [TotalRecords, setTotalRecords] = useState(0);
    const [visible, setVisible] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [FilterValues, setFilterValues] = useState({Price:[0,100]});
    const [FilterOptions, setFilterOptions] = useState({Price:[0,100]});
    const [loading, setLoading] = useState(true);
    const [reached80Percent, setReached80Percent] = useState(false);

    let isMounted = true;

    const getallproduct = useCallback(async ()=>{
        setLoading(true);
        const res = await getAllproducts({limit: 24, skip: pageNumber,FilterValues });
        setProducts((prev) => {
            // Merge previous products with new products
            const mergedProducts = [...prev, ...res.resdata];
        
            // Remove duplicates based on the "_id" field
            const uniqueProducts = mergedProducts.reduce((acc, current) => {
                // Check if the "_id" is already in the accumulator
                if (!acc.find(product => product._id === current._id)) {
                    acc.push(current);
                }
                return acc;
            }, []);
        
            return uniqueProducts;
        });
        setTotalRecords(res.totallength)
        setReached80Percent(prev=>(prev=products.length >= res.totallength ?true:false))
        setLoading(false);
    },[pageNumber,FilterValues]);


    useEffect(() => {
        if (isMounted) {
          getallproduct();
        }
        return (() => isMounted = false);
    }, [pageNumber,FilterValues]);

    const handleScroll = async () => {
        const scrollTop = window.scrollY;  // Current scroll position
        const windowHeight = window.innerHeight;  // Viewport height
        const documentHeight = document.documentElement.scrollHeight;  // Total document height
        const scrollPercent = (scrollTop + windowHeight) / documentHeight * 100;
        if (scrollPercent >= 90 && !reached80Percent) {
            setReached80Percent(true);
            setPageNumber(prev=>prev+1)
            console.log("Reached 80% of the page!");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [reached80Percent]);

    const getFilerOptions = useCallback(async ()=>{
        setLoading(true)
        const res = await getFilerValus();
        setFilterOptions(res);
        setFilterValues({...FilterValues,Price:res.Price})
        setLoading(false)
    },[]);

    useEffect(() => {
        if (isMounted) {
            getFilerOptions();
        }
        return (() => isMounted = false);
    }, []);

    const OnchangeFilter = (value,field)=> {
        console.log(value,field)
        setProducts([])
        setPageNumber[1]
        if(field == 'Price'){
            setFilterValues(prev => ({...prev,Price:value}))
        }
        else if(field == 'Sort'){
            console.log(value)
            setFilterValues(prev => ({...prev,Sort:value}))
        }
        else{
            setFilterValues((prev) =>{
                const currentValues = prev[field] || [];
                const newValues = currentValues.includes(value) ? currentValues.filter(v => v !== value) : [...currentValues, value];
                return { ...prev, [field]: newValues };
            })
        }
    }

    const customHeader = (
        <div className="p-4 bg-[#FBFDFF]">
            <p className='text-lg font-semibold'>Filter</p>
        </div>
    );

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shop | Venba Boutique | Custom-Made Sarees & Kurtis - Affordable, Stylish & Perfect Fit</title>
                <meta name="description" content="Discover beautifully crafted sarees and kurtis at Venba Boutique, Villupuram. Get customized designs tailored to your size and style at affordable prices. Shop now for the perfect ethnic wear!" />
                {/* <script type="application/ld+json">{JSON.stringify(schemaData)}</script> */}
            </Helmet>

            <section>
                <div className='max-w-[85rem] w-full mx-auto px-4 py-12 lg:py-16'>
                    <h1 className='text-center text-3xl font-bold mb-6'><span className='text-[#ed9d22]'><i className="fi fi-br-store-alt"></i> Our</span> Products</h1>
                    <div className='py-2 sticky top-[66px] bg-white flex justify-between items-center mb-4 block lg:hidden'>
                        <button type="button" className="py-1 px-2 rounded-2xl inline-flex items-center gap-x-2 text-sm font-medium border-1 "
                        onClick={() => setVisible(true)}>
                            Filter <i className="fi fi-rs-filter"></i>
                        </button>

                        <select onChange={(e) => OnchangeFilter(e.target.value,'Sort')} className="pointer peer py-1 px-1 pe-9 block border-1 rounded-2xl text-sm ">
                            <option selected="">Sort </option>
                            <option value="1">Price Low to High</option>
                            <option value="-1">Price High to Low</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
                        <div className="lg:col-span-4 col-span-5 h-full">
                            {
                                products&&products.length ==0?(
                                <div className='h-full flex items-center justify-center'>
                                    <img src="/assets/Images/Patten/No Found.png" className='w-64' alt="" />
                                </div>):
                                (<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5'>

                                    {products?.map((product, index) => (
                                        <Link key={index} to={`/product-event/${product._id}`} role='button' className="flex w-full flex-col group hover:bg-white overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition">
                                            <div className="overflow-hidden">
                                                <img className="w-full" src={`${apiurl()}/${product?.Images[0]}`} alt="Card Image" />
                                            </div>
                                            <div className="p-4 md:p-5">
                                                <h3 className="text-lg text-center text-gray-800 truncate">{product?.Product_Name}</h3>
                                                <h3 className="text-lg text-center text-[#ed9d22]">Rs. {product?.Sale_Price}</h3>
                                                {/* <div className="flex justify-between mt-4">
                                                    <button type="button" className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-[#FFC600] focus:outline-none">
                                                        Shop Now
                                                    </button>
                                                    <button type="button" className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-[#FFC600] focus:outline-none">
                                                        Add to Cart
                                                    </button>
                                                </div> */}
                                            </div>
                                        </Link>
                                    ))} 
                                </div>)
                            }
                        </div>
                        <div className='hidden lg:block'>
                            <div className='sticky top-[70px]'>
                                <div className='text-center mb-3'>
                                    <select onChange={(e) => OnchangeFilter(e.target.value,'Sort')} className="peer py-1 px-1 pe-9 block  rounded-2xl border-1 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                        <option selected="">Sort </option>
                                        <option value="1">Price Low to High</option>
                                        <option value="-1">Price High to Low</option>
                                    </select>
                                </div>

                                <div className='bg-[#FBFDFF] p-5 shadow-lg'>
                                    <Filter FilterValues={FilterValues} FilterOptions={FilterOptions} OnchangeFilter={OnchangeFilter} TotalRecords={TotalRecords} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} >
                    <div className='h-full bg-[#FBFDFF] p-5 shadow-lg'>
                        <Filter FilterValues={FilterValues} FilterOptions={FilterOptions} OnchangeFilter={OnchangeFilter} TotalRecords={TotalRecords} className="h-full" />
                    </div>
                </Sidebar>
            </section>
        </>
    )
}
