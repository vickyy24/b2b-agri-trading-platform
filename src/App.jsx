import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Commodities from "./pages/Commodities";
import Services from "./pages/Services";
import TradeProcess from "./pages/TradeProcess";
import GlobalReach from "./pages/GlobalReach";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";

const App=()=> {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/commodities" element={<Commodities/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/trade-process" element={<TradeProcess/>}/>
                <Route path="/global-reach" element={<GlobalReach/>}/>
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    ) 
}

export default App;