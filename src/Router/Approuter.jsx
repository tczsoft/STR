import { Route, Routes } from "react-router-dom";
import Main from "../Core/Main/Main";
import ScrollToTop from "./ScrollToTop";
import HomePage from "../Components/HomePage/HomePage";
import BlogPage from "../Components/BlogPage/BlogPage";

// import CartPage from "../Components/CartPage/CartPage";
// import ContactPage from "../Components/ContactPage/ContactPage";
// import AdminRouter from "../Admin/Router/AdminRouter";
// import ProtectedRoute from "../shared/Services/Token/ProtectedRoute";
// import SignInPage from "../Components/SignInPage/SignInPage";
import ReadblogPage from "../Components/ReadblogPage/ReadblogPage";
import RegisterPage from "../Components/RegisterPage/RegisterPage";


export default function Approuter() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<Main />}  >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path='/blog/:id' element={<ReadblogPage/>}/>
                    <Route path='/join-our-team' element={<RegisterPage/>}/>
                    {/* <Route path="/cart" element={<CartPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<SignInPage />} /> */}
                    {/* <Route path="/about" element={<About />} />

                    <Route path="/rotate" element={<Rotate />} /> */}
                </Route >
                {/* <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['Admin']}><AdminRouter/></ProtectedRoute>} /> */}
            </Routes>

        </>
    )
}



