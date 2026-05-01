import { NavLink } from "react-router-dom"
import logo from "../assets/PadmayogLogo.png"

const Navbar=()=>{
    return(
        <nav className="w-full absolute  z-50 border-b border-white/30">
            <div className="flex justify-between items-center px-4 py-3 ">
                <NavLink to="/" className="bg-white p-4 rounded-2xl">
                    
                    <img src={logo} alt="Padmayog" className="h-12 object-contain"/>
                    
                </NavLink>

                <ul className="flex gap-6 text-white font-semibold">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/commodities">Commodities</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/trade-process">Trade Process</NavLink></li>
                    <li><NavLink to="/global-reach">Global Reach</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;