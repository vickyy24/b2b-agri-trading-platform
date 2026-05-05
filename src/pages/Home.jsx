import { FiUserPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

import bg1 from "../assets/bgImageHome.jpg";
import bg2 from "../assets/bgImageHome2.jpg";
import wheat from "../assets/Wheat.png";
import Rice from "../assets/Rice.png";
import Vegetables from "../assets/Vegetables.png";
import Soyabeans from "../assets/Soyabeans.png";
import Barley from "../assets/Barley.png";
import Corn from "../assets/Corn.png";
import logo from"../assets/PadmayogLogo.png";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div>



            
            {/* Vendor registration floating button */}
            <a href="#" className="fixed right-4 top-1/2 z-40 -translate-y-1/2 hidden lg:flex flex-col items-center">

                <div className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-lg  border border-green-200 shadow-[0_4px_18px_rgba(0,0,0,0.25),0_0_14px_rgba(34,197,94,0.22)]">

                    <FiUserPlus className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-[#8b4513] whitespace-nowrap">
                        Vendor Registration
                    </span>

                </div>

                <span className="mt-2 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur px-2 py-1 rounded-full">
                    Join Our Network
                </span>
            </a>
            
            {/* Hero Section 1 */}
            <section className="relative text-white">
                <div className="h-144 overflow-hidden relative">
                    <div className="absolute inset-0 bg-cover bg-center scale-110 brightness-73 saturate-75" style={{ backgroundImage: `url(${bg1})` ,}}>
                    </div>
                </div> 
                <div className="absolute top-26 w-full text-center">
                    <h1 className=" text-3xl md:text-4xl font-bold leading-tight mb-6">
                        Global Agricultural Solutions Rooted in Indian Excellence
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10">
                        Sustainable sourcing, advanced processing, and dependable global delivery.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-[#8b4513] hover:bg-gray-100 rounded-md font-semibold px-8 py-3">
                            Request a Quote
                        </button>
                        <a href="#services" className="border border-white/80 text-white hover:bg-white hover:text-[#8b4513] rounded-md font-semibold px-8 py-3">
                            Our Services
                        </a>
                        <a href="#" className="lg:hidden border border-white/80 text-white rounded-md font-semibold hover:bg-white hover:text-[#8b4513] px-8 py-3">
                            Vendor Registration
                        </a>


                    </div>
                </div>
                <div className="grid  bottom-20 absolute grid-cols-4 w-full px-4 gap-6">
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-semibold text-white mb-2">
                            50,000+
                        </div>
                        <div className="text-gray-200 text-sm md:text-base">Tons Traded</div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-semibold text-white mb-2">
                            10+
                        </div>
                        <div className="text-gray-200 text-sm md:text-base">Countries Served</div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-semibold text-white mb-2">
                            15+
                        </div>
                        <div className="text-gray-200 text-sm md:text-base">Years Experience</div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-semibold text-white mb-2">
                            100+
                        </div>
                        <div className="text-gray-200 text-sm md:text-base">Happy Clients</div>
                    </div>
                </div>
            </section>    
            
            {/* Section 2 */}
            <section className="relative">
                <div className=" bg-cover bg-center h-130 brightness-75 saturate-90" style={{backgroundImage: `url(${bg2})`}}>
                    
                </div>
                <div className="absolute top-[13%] px-63">
                    <div className="bg-white rounded-2xl md:p-8 p-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#8b4513] mb-4">
                            Smart Digital B2B Hub for Global Agri Trade
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                            Padmayog Agrotech empowers buyers to source agricultural commodities through a secure,
                            transparent, and performance-driven B2B platform built for scale, consistency, and trust.
                            We streamline procurement by connecting buyers with verified producers, processors, and
                            suppliers, delivering assured quality, competitive market-linked pricing, and reliable
                            on-time fulfillment—across volumes, markets, and geographies.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                            From contract structuring and compliance to logistics coordination and documentation, we
                            manage the entire trade lifecycle, allowing buyers to focus on growth while we handle
                            execution. With proven expertise in domestic and international trade, exports, imports,
                            value-added processing, and integrated logistics, Padmayog Agrotech serves as a
                            single-window, risk-managed sourcing partner.
                        </p>
                        <div className="border-l-4 border-green-600 pl-4 bg-green-50 py-3 rounded">
                            <p className="text-base md:text-lg font-bold text-green-800">
                                "Grow smarter, business badhao Padmayog Agrotech ke saath..!"
                            </p>
                        </div>
                    </div>
                    
                </div>
            </section>
           

            {/* Section 3 */}
            <section id="services" className="h-95 py-16 bg-sky-50/40">
                <div>
                    <h4 className="text-3xl text-center font-bold text-[#8b4513] mb-12">Our Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        <div className="bg-white border border-gray-100 shadow-md p-6 rounded-lg text-center hover:scale-105 duration-300">
                            <p className="text-4xl mb-4">🌾</p>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Trading</h3>
                            <p className="text-gray-600">Global commodity trading solutions</p>
                        </div>
                        <div className="bg-white border border-gray-100 shadow-md  p-6 rounded-lg text-center hover:scale-105 duration-300">
                            <p className="text-4xl mb-4">📤</p>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Exports</h3>
                            <p className="text-gray-600">International export services</p>
                        </div>
                        <div className="bg-white border border-gray-100 shadow-md  p-6 rounded-lg text-center hover:scale-105 duration-300">
                            <p className="text-4xl mb-4">📥</p>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Imports</h3>
                            <p className="text-gray-600">Import sourcing & logistics</p>
                        </div>
                        <div className="bg-white border border-gray-100 shadow-md  p-6 rounded-lg text-center hover:scale-105 duration-300">
                            <p className="text-4xl mb-4">🏭</p>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Manufacturing</h3>
                            <p className="text-gray-600">Processing facilities</p>
                        </div>
                    </div>
                </div>
                
            </section>

            {/* Section 4 */}
            <section className="h-117 py-16  bg-[#FFF7ED]">
                <div className="px-4">
                    <div className="text-center mb-12">
                        <h5 className="text-3xl text-center font-bold text-[#8b4513] mb-4">Need a Quote?</h5>
                        <p className="text-gray-600 mb-8">Get competitive pricing for your commodity requirements. Click below to open the quote form.</p>
                        
                        <button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg"> <span className="flex items-center gap-2"><MdArrowForwardIos />Open Quote Form</span></button>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <p className="text-4xl mb-4">⚡</p>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Fast Response</h3>
                            <p className="text-gray-600">Get quotes within 24 hours</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl mb-4">💰</p>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Competitive Pricing</h3>
                            <p className="text-gray-600">Best market rates guaranteed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl mb-4">✅</p>
                            <h3 className="text-xl font-bold text-green-700 mb-2">Quality Assured</h3>
                            <p className="text-gray-600">Certified quality with documentation</p>
                        </div>
                    </div>
                </div>
                
            </section>

            {/* Section 5 */}
            <section className="h-83 py-16 bg-white">
                <div className="px-4">
                    <h5 className="text-3xl text-center font-bold text-[#8b4513] mb-12"> Featured Commodities</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                        <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                            <img src={wheat} alt="wheatImg" className="absolute w-full h-full object-cover duration-500 hover:scale-110"/>
                            <div className="flex justify-center h-full items-center  ">
                                <h6 className="font-bold text-white text-center text-sm bg-black/10 mt-11 px-3 py-1.5 rounded-full backdrop-blur-sm">Wheat</h6>
                            </div>
                            
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                            <img src={Rice} alt="RiceImg" className="absolute w-full h-full object-cover duration-500 hover:scale-110"/>
                            <div className="flex justify-center h-full items-center  ">
                                <h6 className="font-bold text-white text-center text-sm bg-black/10 mt-11 px-3 py-1.5 rounded-full backdrop-blur-sm">Rice</h6>
                            </div>
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                            <img src={Vegetables} alt="VegetablesImg" className="absolute w-full h-full object-cover duration-500 hover:scale-110"/>
                            <div className="flex justify-center h-full items-center  ">
                                <h6 className="font-bold text-white text-center text-sm bg-black/10 mt-11 px-3 py-1.5 rounded-full backdrop-blur-sm">Vegetables</h6>
                            </div>
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                            <img src={Soyabeans} alt="SoyabeansImg" className="absolute w-full h-full object-cover duration-500 hover:scale-110"/>
                            <div className="flex justify-center h-full items-center  ">
                                <h6 className="font-bold text-white text-center text-sm bg-black/10 mt-11 px-3 py-1.5 rounded-full backdrop-blur-sm">Soyabeans</h6>
                            </div>
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                            <img src={Barley} alt="BarleyImg" className="absolute w-full h-full object-cover duration-500 hover:scale-110"/>
                            <div className="flex justify-center h-full items-center  ">
                                <h6 className="font-bold text-white text-center text-sm bg-black/10 mt-11 px-3 py-1.5 rounded-full backdrop-blur-sm">Barley</h6>
                            </div>
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                            <img src={Corn} alt="CornImg" className=" absolute w-full h-full object-cover duration-500 hover:scale-110"/>
                            <div className=" flex justify-center h-full items-center  ">
                                <h6 className="font-bold text-white text-center text-sm bg-black/10 mt-11 px-3 py-1.5 rounded-full backdrop-blur-sm">Barley</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            {/* Section 6 */}
            <section className="h-87 bg-pink-50 py-16">
                <div className="px-4">
                    <div className="text-center mb-12">
                        <h5 className="text-3xl text-center font-bold text-[#8b4513] mb-4"> Brands that Trust Us</h5>
                        <p className="text-gray-600 mb-8">Trusted by leading agricultural companies worldwide</p>
                    </div>
                    <div className="flex justify-center gap-7">
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">Global Grain Corp</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">AgriTrade International</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">FarmFresh Exports</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">GreenField Trading</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">Harvest Partners</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">CropMasters Inc</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">SeedToShelf Co</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md w-40 h-28 p-4 border border-gray-200">
                            <div className="w-24 h-12 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <p className="text-sm text-gray-700 font-medium text-center">OrganicTrade Ltd</p>
                        </div>
                    </div>
                </div>
                
            </section>

            {/* Section 7 */}
            {/* <footer className="h-105 bg-amber-800 text-white">
                <div className="flex justify-center">
                    <div>
                        <Link to="/" className="bg-white p-4 rounded-2xl" >
                            <img src={logo} alt="Padmayoglogo" className="h-12 object-contain"/>
                        </Link>
                        
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Legal</h4>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                    </div>
                </div>
            </footer> */}
        </div>
        
    )
}
export default Home;