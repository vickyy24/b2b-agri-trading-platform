import bg1 from "../assets/bgImageHome.jpg";
import bg2 from "../assets/bgImageHome2.jpg";
const Home=()=>{
    return(
        <div>
            <section className="relative text-white">
                <div className="h-144 overflow-hidden relative">
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-110 brightness-73 saturate-75"
                        style={{ backgroundImage: `url(${bg1})` ,}}
                    ></div>
                </div> 
                <div className="absolute top-26 w-full text-center">
                    <h1 className=" text-3xl font-bold mb-6">Global Agricultural Solutions Rooted in Indian Excellence</h1>
                    <p className="text-lg text-gray-200 mb-10">Sustainable sourcing, advanced processing, and dependable global delivery.</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-[#8b4513] hover:bg-gray-100 rounded-md font-semibold px-8 py-3">Request a Quote</button>
                        <a href="#" className="border border-white/80 text-white hover:bg-white hover:text-[#8b4513] rounded-md font-semibold px-8 py-3">Our Services</a>
                    </div>
                </div>
                <div className="grid  bottom-20 absolute grid-cols-4 w-full px-4 gap-6">
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000+</div>
                        <div className="text-gray-200 text-sm md:text-base">Tons Traded</div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000+</div>
                        <div className="text-gray-200 text-sm md:text-base">Tons Traded</div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000+</div>
                        <div className="text-gray-200 text-sm md:text-base">Tons Traded</div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 duration-300 hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000+</div>
                        <div className="text-gray-200 text-sm md:text-base">Tons Traded</div>
                    </div>
                </div>
            </section>    
            
            <div className=" bg-cover bg-center h-130 brightness-75 saturate-90" style={{backgroundImage: `url(${bg2})`}}>
                <h2>Next Section Content</h2>
            </div>
            <div className="h-95">
                <h4>Our Services</h4>
            </div>
            <div className="h-120  bg-pink-50">
                <h5>Need a Quote?</h5>
            </div>
            <div className="h-85 bg-linear-to-r">
                <h5> Featured Commodities</h5>
            </div>
            <div className="h-85 bg-pink-50">
                <h5> Brands that Trust Us</h5>
            </div>
            <div className="h-105 bg-amber-800 text-white">
                <h5> footer section</h5>
            </div>
        </div>
        
    )
}
export default Home;