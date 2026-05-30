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


    return(
        <nav className="w-full absolute  z-50 border-b border-white/30">
            <div className="flex justify-between items-center px-4 py-2 ">
                <NavLink to="/" className="bg-white p-4 rounded-2xl">
                    
                    <img src={logo} alt="Padmayog" className="h-12 object-contain"/>
                    
                </NavLink>

                <ul className="flex gap-6 items-center text-white font-medium">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/commodities">Commodities</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/trade-process">Trade Process</NavLink></li>
                    <li><NavLink to="/global-reach">Global Reach</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
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