import CommonHero from "../Components/CommonHero";
import bgImageHome from "../assets/bgImageHome.jpg";

const GlobalReach=()=>{

    const tradeRoutes = [
        { origin: "India", destination: "United Kingdom", commodities: "Rice, Onion", frequency: "As required" },
        { origin: "India", destination: "Dubai, UAE", commodities: "Rice, Onion", frequency: "As required" },
        { origin: "India", destination: "Bangladesh", commodities: "Rice, Onion", frequency: "As required" }
    ];

    return(
        <div>
            <CommonHero
                bgImage={bgImageHome}
                title="GlobalReach Market Connections"
                description="Connecting agricultural markets across 10+ countries with reliable trade networks. Expanding beyond borders, we connect Indian agricultural excellence with international demand. Operating across multiple continents, we've established reliable trade networks in key markets worldwide."
            />

            <section className="py-16 max-lg:py-10 bg-white">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-center text-[#8b4513] mb-5">Our Global Network</h2>
                    <p className="max-w-4xl mx-auto text-center text-gray-600 leading-relaxed mb-12">Padmayog Agrotech connects Indian agricultural excellence with international markets through reliable export and import networks.</p>

                    <div className="max-w-5xl mx-auto bg-sky-50/40 rounded-2xl border border-gray-200 p-6 md:p-10">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center w-full md:w-56">
                                <p className="text-4xl mb-3">🇮🇳</p>
                                <h3 className="text-xl font-bold text-[#8b4513]">India</h3>
                                <p className="text-gray-600 text-sm mt-3">Rice • Wheat • Sugar • Pulses • Vegetables • Spices</p>
                                <p className="text-green-700 font-semibold mt-3">Export &amp; Import Hub</p>
                            </div>

                            <div className="text-green-700 text-3xl hidden md:block">→</div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-lg:gap-3 flex-1 w-full">
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 text-center">
                                    <p className="text-3xl mb-2">🇬🇧</p>
                                    <h3 className="font-bold text-[#8b4513]">United Kingdom</h3>
                                    <p className="text-sm text-gray-600 mt-2">Export: Rice, Onion</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 text-center">
                                    <p className="text-3xl mb-2">🇦🇪</p>
                                    <h3 className="font-bold text-[#8b4513]">Dubai, UAE</h3>
                                    <p className="text-sm text-gray-600 mt-2">Export: Rice, Onion</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 text-center">
                                    <p className="text-3xl mb-2">🇧🇩</p>
                                    <h3 className="font-bold text-[#8b4513]">Bangladesh</h3>
                                    <p className="text-sm text-gray-600 mt-2">Export: Rice, Onion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 max-lg:py-10 bg-[#f5f5dc]">
                <div className="mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-[#8b4513] mb-4">Countries We Serve</h2>
                    <p className="text-gray-700 leading-relaxed">We are actively expanding our international footprint. New markets and trade corridors will be announced as global partnerships grow.</p>
                    <div className="bg-white rounded-xl shadow-md p-7 mt-8 inline-block">
                        <p className="text-5xl mb-3">🌍</p>
                        <h3 className="text-xl font-bold text-[#2f855a] mb-2">Coming Soon</h3>
                        <p className="text-gray-600">New countries and trade regions will be announced as the global presence expands.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 max-lg:py-10 bg-white">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-center text-[#8b4513] mb-10">Major Trade Routes</h2>
                    <div className="overflow-x-auto max-w-5xl mx-auto rounded-xl border border-gray-200 shadow-md">
                        <table className="w-full min-w-[620px] text-left">
                            <thead className="bg-[#f3f5f2]">
                                <tr>
                                    <th className="px-5 py-4">Origin</th>
                                    <th className="px-5 py-4">Destination</th>
                                    <th className="px-5 py-4">Major Commodities</th>
                                    <th className="px-5 py-4">Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tradeRoutes.map((route, index)=>(
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="px-5 py-4">{route.origin}</td>
                                        <td className="px-5 py-4">{route.destination}</td>
                                        <td className="px-5 py-4">{route.commodities}</td>
                                        <td className="px-5 py-4">{route.frequency}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mt-12">
                        <div className="bg-sky-50/40 rounded-xl p-6 text-center">
                            <p className="text-4xl font-bold text-[#2f855a]">10+</p>
                            <p className="text-gray-700 mt-2">Countries</p>
                        </div>
                        <div className="bg-sky-50/40 rounded-xl p-6 text-center">
                            <p className="text-4xl font-bold text-[#2f855a]">15+</p>
                            <p className="text-gray-700 mt-2">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GlobalReach;
