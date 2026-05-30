import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Commodities from "./pages/Commodities";
import Services from "./pages/Services";
import TradeProcess from "./pages/TradeProcess";
import GlobalReach from "./pages/GlobalReach";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footerSection";
import Admin from "./pages/AdminPanel";
import CategoryAdmin from "./pages/CategoryAdmin";
import ProductAdmin from "./pages/ProductAdmin";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";

const App=()=> {
    return(
        <BrowserRouter>

            <Routes>
                {/* Parent Layout */}
                <Route element={
                    <>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </>}>
                    
                    {/* child routes rendered inside Outlet */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/commodities" element={<Commodities />} />
                    <Route path="/view-product/:productid" element={<ViewProduct/>}/>
                    <Route path="/services" element={<Services />} />
                    <Route path="/trade-process" element={<TradeProcess />} />
                    <Route path="/global-reach" element={<GlobalReach />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart/>}/>

                </Route>
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<Navigate to="category" replace />} /> {/*  /admin automatically redirects to: /admin/category  */}
                    <Route path="category" element={<CategoryAdmin />} />
                    <Route path="product" element={<ProductAdmin />} />
                </Route>

            </Routes>

        </BrowserRouter>
    ) 
}

export default App;