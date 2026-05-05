import { Link } from "react-router-dom";
import logo from "../assets/PadmayogLogo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer=()=>{
    return(
        <>
            <footer className="h-105 bg-amber-800 text-white py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <Link to="/" className="bg-white p-2 inline-block rounded-xl mb-4" >
                            <img src={logo} alt="Padmayoglogo" className="h-11 object-contain"/>
                        </Link>
                        <p className="text-gray-300 mb-4">Global leader in agri-commodities trading, processing, and supply chain solutions.</p>
                        <p className="text-sm">© 2026 Padmayog Agrotech. All rights reserved.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                               <Link to="/" className="text-gray-300 hover:text-white"> Home</Link></li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Commodities</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Services</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Trade Process</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Global Reach</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Contact</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Generate Packing List</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Admin Panel</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Terms of Trade</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Shipping Policy</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-300 hover:text-white">Quality Guarantee</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <div className="space-y-2 text-gray-300 mb-6">
                            <p>📍 109, Suratwala Mark Plazoo, Hinjewadi, Pune, MS-411057</p>
                            <p>📞 +91 788 766 2700</p>
                            <p>✉️ info@padmayog.in</p>
                        </div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-800 hover:bg-green-700 flex items-center justify-center"><FaFacebookSquare className="w-6 h-6"/></a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-800 hover:bg-green-700 flex items-center justify-center"><FaSquareXTwitter className="w-6 h-6"/></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-800 hover:bg-green-700 flex items-center justify-center"><FaInstagram className="w-6 h-6"/></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-800 hover:bg-green-700 flex items-center justify-center"><FaLinkedin className="w-6 h-6"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;