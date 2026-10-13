import { NavLink } from "react-router-dom"
import logo from "../assets/PadmayogLogo.png"
import { useSelector } from "react-redux";
import { PiShoppingCart } from "react-icons/pi";

const Navbar=()=>{

    const cartitems = useSelector((state)=>
        state.cart.cartItems
    )

    let itemCount = 0;
    cartitems.forEach((item)=>{
        itemCount += item.quantity;
    })

    const navLinkClass = ({isActive})=>
        isActive
        ? "text-[#d4af37] underline decoration-2 underline-offset-8 transition-all duration-200"
        : "transition-colors duration-200 hover:text-[#d4af37]";


    return(
        <nav className="w-full absolute  z-50 border-b border-white/30">
            <div className="flex justify-between items-center px-4 py-2 ">
                <NavLink to="/" className="bg-white p-4 rounded-2xl">
                    
                    <img src={logo} alt="Padmayog" className="h-12 object-contain"/>
                    
                </NavLink>

                <ul className="flex gap-6 items-center text-white font-medium">
                    <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
                    <li><NavLink to="/commodities" className={navLinkClass}>Commodities</NavLink></li>
                    <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
                    <li><NavLink to="/trade-process" className={navLinkClass}>Trade Process</NavLink></li>
                    <li><NavLink to="/global-reach" className={navLinkClass}>Global Reach</NavLink></li>
                    <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
                    <li>
                        <NavLink to="/cart" className="relative flex items-center gap-2 bg-[#8b4513] hover:bg-[#622e09] px-4 py-2 rounded-lg">

                            <p className="absolute top-0 left-7 bg-red-600 min-w-5 h-5 text-xs rounded-full flex justify-center items-center">
                                {itemCount}
                            </p>

                            <PiShoppingCart className="text-3xl"/>

                            <p>
                                Cart
                            </p>

                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
