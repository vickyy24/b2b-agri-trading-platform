import { Link } from "react-router-dom";
import logo from "../assets/PadmayogLogo.png";
const Footer=()=>{
    return(
        <>
            <footer className="h-105 bg-amber-800 text-white py-12">
                <div className="grid grid-cols-4 gap-6 px-4">
                    <div>
                        <Link to="/" className="bg-white p-2 inline-block rounded-xl mb-4" >
                            <img src={logo} alt="Padmayoglogo" className="h-11 object-contain"/>
                        </Link>
                        <p className="text-gray-300 mb-4">Global leader in agri-commodities trading, processing, and supply chain solutions.</p>
                        <p className="text-sm">© 2026 Padmayog Aggrotech. All rights reserved.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Commodities</p>
                        <p>Services</p>
                        <p>Trade Process</p>
                        <p>Global Reach</p>
                        <p>Contact</p>
                        <p>Generate Packing List</p>
                        <p>Admin Panel</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Legal</h4>
                        <p>Terms of Trade</p>
                        <p>Privacy Policy</p>
                        <p>Shipping Policy</p>
                        <p>Quality Guarantee</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <p>📍 109, Suratwala Mark Plazoo, Hinjewadi, Pune, MS-411057</p>
                        <p>📞 +91 788 766 2700</p>
                        <p>✉️ info@padmayog.in</p>
                        {/* <div> */}
                            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        {/* </div> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;