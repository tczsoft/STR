import { Route, Routes } from "react-router-dom";
import Main from "../Core/Main/Main";
import ScrollToTop from "./ScrollToTop";
import HomePage from "../Components/HomePage/HomePage";
import ShopPage from "../Components/ShopPage/ShopPage";
import ProductviewPage from "../Components/ProductviewPage/ProductviewPage";
import CartPage from "../Components/CartPage/CartPage";
import ContactPage from "../Components/ContactPage/ContactPage";
import AdminRouter from "../Admin/Router/AdminRouter";
import ProtectedRoute from "../shared/Services/Token/ProtectedRoute";
import SignInPage from "../Components/SignInPage/SignInPage";


export default function Approuter() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<Main />}  >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path='/product-event/:id' element={<ProductviewPage/>}/>
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<SignInPage />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/course" element={<CoursesPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/admission" element={<AdmissionPage />} />
                    <Route path="/university-details" element={<UniversityPage />} />

                    <Route path="/rotate" element={<Rotate />} /> */}
                </Route >
                <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['Admin']}><AdminRouter/></ProtectedRoute>} />
            </Routes>

        </>
    )
}



