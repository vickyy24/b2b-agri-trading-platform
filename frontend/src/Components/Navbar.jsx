import { NavLink } from "react-router-dom"
import logo from "../assets/PadmayogLogo.png"
import { useState } from "react";
import { useSelector } from "react-redux";
import { PiShoppingCart, PiList, PiX } from "react-icons/pi";

const Navbar=()=>{

    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className="relative flex justify-between items-center px-4 py-2">
                <NavLink to="/" className="bg-white p-4 rounded-2xl">
                    
                    <img src={logo} alt="Padmayog" className="h-12 object-contain"/>
                    
                </NavLink>

                <button type="button" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} className="xl:hidden flex items-center justify-center rounded-lg border border-white/40 bg-[#8b4513] p-2 text-2xl text-white shadow-sm">
                    {menuOpen ? <PiX /> : <PiList />}
                </button>

                <ul className="hidden xl:flex gap-6 items-center text-white font-medium">
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

                {menuOpen &&
                    <ul className="absolute left-0 right-0 top-full z-50 flex max-h-[calc(100vh-6rem)] flex-col gap-1 overflow-y-auto border-t border-white/20 bg-[#26372e]/95 px-4 py-3 text-white font-medium shadow-xl backdrop-blur-md xl:hidden">
                        <li><NavLink to="/" onClick={()=>setMenuOpen(false)} className={({isActive})=>`${navLinkClass({isActive})} block rounded-lg px-3 py-2.5`}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={()=>setMenuOpen(false)} className={({isActive})=>`${navLinkClass({isActive})} block rounded-lg px-3 py-2.5`}>About</NavLink></li>
                        <li><NavLink to="/commodities" onClick={()=>setMenuOpen(false)} className={({isActive})=>`${navLinkClass({isActive})} block rounded-lg px-3 py-2.5`}>Commodities</NavLink></li>
                        <li><NavLink to="/services" onClick={()=>setMenuOpen(false)} className={({isActive})=>`${navLinkClass({isActive})} block rounded-lg px-3 py-2.5`}>Services</NavLink></li>
                        <li><NavLink to="/trade-process" onClick={()=>setMenuOpen(false)} className={({isActive})=>`${navLinkClass({isActive})} block rounded-lg px-3 py-2.5`}>Trade Process</NavLink></li>
                        <li><NavLink to="/global-reach" onClick={()=>setMenuOpen(false)} className={({isActive})=>`${navLinkClass({isActive})} block rounded-lg px-3 py-2.5`}>Global Reach</NavLink></li>
                        <li><NavLink to="/contact" onClick={()=>setMenuOpen(false)} className={({isActive})=>`${navLinkClass({isActive})} block rounded-lg px-3 py-2.5`}>Contact</NavLink></li>
                        <li>
                            <NavLink to="/cart" onClick={()=>setMenuOpen(false)} className="relative mt-1 flex items-center gap-2 rounded-lg bg-[#8b4513] px-3 py-2.5">
                                <span className="absolute left-8 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs">{itemCount}</span>
                                <PiShoppingCart className="text-2xl" />
                                <span>Cart</span>
                            </NavLink>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar;
