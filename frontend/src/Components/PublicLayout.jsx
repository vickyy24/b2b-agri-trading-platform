import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footerSection";

const PublicLayout=()=>{
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicLayout;
