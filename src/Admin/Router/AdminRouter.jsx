import { Routes,Route, Navigate } from "react-router-dom";
import Adminmain from "../core/Adminmain";
import Dashboard from "../components/Dashboard/Dashboard";
import Product from "../components/Product/Product";
// import Customers from "../components/Customers/Customers";
import Category from "../components/Category/Category";
// import Orders from "../components/Orders/Orders";
// import Collection from "../components/Collection/Collection";



const AdminRouter = () => {
  return (
    <>
      <Routes>
      <Route element={<Adminmain/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/products" element={<Product />} />
            {/* <Route path="/customers" element={<Customers />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/collections" element={<Collection/>} />*/}
            <Route path="/" element={<Navigate to="/admin/dashboard" />} /> 
          </Route>
      </Routes>
    </>
  )
}
export default AdminRouter;