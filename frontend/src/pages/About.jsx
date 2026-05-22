import CommonHero from "../Components/CommonHero";
import homeBgImage from "../assets/bgImageHome.jpg";

const About=()=>{
    return(
        <div>
            {/* Section 1 */}
            <CommonHero
                bgImage = {homeBgImage}
                title = "About Padmayog Agrotech Pvt Ltd"
                description = {`From India's fertile farmlands to global marketplaces, we bridge agricultural excellence with international trade integrity. Our journey is built on deep-rooted procurement networks, advanced processing capabilities, and export expertise. We transform agricultural potential into commercially viable, quality-assured commodities for worldwide consumption.`}
            />

            {/* Section 2 */}
            <section className="py-16">

                <div className="mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div className="p-8 bg-sky-50/40 rounded-lg shadow-lg border border-gray-200">
                            <h2 className="text-3xl text-center font-bold text-[#8b4513] mb-6">Our Journey</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>Padmayog Agrotech Private Limited is an India-based agri-commodities and global trade company, purpose-built to deliver reliable agricultural supply solutions to international markets.</p>
                                <p>We operate at the intersection of <strong>sourcing strength, processing capability,</strong> and <strong>export excellence</strong>—transforming agricultural potential into globally traded value.</p>
                                <p>Backed by deep-rooted procurement networks and a sharp understanding of international trade dynamics, every shipment we deliver reflects <strong>quality, compliance, and commercial integrity.</strong></p>
                            </div>
                        </div>

                        <div className="p-8 rounded-lg bg-[#f5f5dc]">
                            <h3 className="text-2xl font-bold text-[#2f855a] mb-6">What Sets Us Apart</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li>
                                    🌱<strong>Strong Origin Network:</strong> Direct engagement with farmers, aggregators, and processors across key agricultural belts.
                                </li>
                                <li>
                                    🌍<strong>Global Trade Expertise:</strong> Operations aligned with Incoterms®, SGS inspections, and ICC-compliant payment mechanisms.
                                </li>
                                <li>
                                    📦<strong>Quality & Compliance First:</strong> Stringent QC, accurate documentation, and third-party inspections for every shipment.
                                </li>
                                <li>
                                    🤝<strong>Transparent & Secure Transactions:</strong> Clear contracts, protected payments, and execution-focused delivery commitments.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="py-14 bg-[#f5f5dc]">

                <div className="mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-4xl mb-4">🎯</p>
                            <h3 className="text-2xl font-bold text-[#2f855a] mb-4">Our Mission</h3>
                            <p className="text-gray-600">To deliver dependable, compliant, and high-quality agricultural commodities to global markets through strong sourcing, disciplined execution, and ethical trade practices.</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-4xl mb-4">🔭</p>
                            <h3 className="text-2xl font-bold text-[#2f855a] mb-4">Our Vision</h3>
                            <p className="text-gray-600">To become a globally trusted agri-trade partner by transforming agricultural supply chains into transparent, efficient, and value-driven ecosystems.</p>
                        </div>
                    </div>    
                </div>

            </section>

            {/* Section 4 */}
            <section className="py-16">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#8b4513] mb-12"></h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <p className="text-5xl mb-4">🤝</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Integrity</h3>
                            <p className="text-gray-600">Transparent, ethical, and compliance-driven trade practices</p>
                        </div>
                        <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <p className="text-5xl mb-4">🎯</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Quality</h3>
                            <p className="text-gray-600">Strict sourcing, processing, and inspection standards</p>
                        </div>
                        <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <p className="text-5xl mb-4">🌍</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Global Focus</h3>
                            <p className="text-gray-600">Aligned with international trade norms and buyer expectations</p>
                        </div>
                        <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <p className="text-5xl mb-4">📦</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Reliability</h3>
                            <p className="text-gray-600">Consistent supply execution with end-to-end accountability</p>
                        </div>
                        <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <p className="text-5xl mb-4">🌱</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Strong Origins</h3>
                            <p className="text-gray-600">Deep-rooted sourcing from trusted agricultural networks</p>
                        </div>
                        <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <p className="text-5xl mb-4">🔐</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Trust</h3>
                            <p className="text-gray-600">Secure contracts, protected payments, and long-term partnerships</p>
                        </div>

                    </div>
                </div>

            </section>

            {/* Section 5 */}
            <section className="py-16 bg-[#f5f5dc]">

                <div className="mx-auto px-4">
                    
                    <h2 className="text-3xl font-bold text-center text-[#8b4513] mb-12">Leadership Team</h2>
                    <div className="flex justify-center">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <p className="w-24 h-24 bg-[#2f855a] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">DSMR</p>
                                <h3 className="text-xl font-bold text-agri-brown mb-1">Dr. Suyog M. Rasal</h3>
                                <p className="text-agri-green font-medium mb-2">Director, Padmayog Agrotech Private Limited</p>
                                <p className="text-sm text-gray-600">25+ years in Agri & Global Trade</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <p className="w-24 h-24 bg-[#2f855a] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">DSMR</p>
                                <h3 className="text-xl font-bold text-agri-brown mb-1">Dr. Suyog M. Rasal</h3>
                                <p className="text-agri-green font-medium mb-2">Director, Padmayog Agrotech Private Limited</p>
                                <p className="text-sm text-gray-600">25+ years in Agri & Global Trade</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <p className="w-24 h-24 bg-[#2f855a] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">DSMR</p>
                                <h3 className="text-xl font-bold text-agri-brown mb-1">Dr. Suyog M. Rasal</h3>
                                <p className="text-agri-green font-medium mb-2">Director, Padmayog Agrotech Private Limited</p>
                                <p className="text-sm text-gray-600">25+ years in Agri & Global Trade</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6 */}
            <section className="py-16">

                <div className="mx-auto px-4">

                    <h2 className="text-3xl font-bold text-center text-[#8b4513] mb-12">Certifications & Compliance</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="border border-gray-200 rounded-lg p-6 hover:border-[#2f855a] transition-colors duration-300">

                            <div className="flex items-center space-x-3 mb-3">
                                <p className="w-10 h-10 bg-[#f5f5dc] rounded-full flex items-center justify-center">
                                    <span class="text-[#2f855a] font-bold">✓</span>
                                </p>
                                <h3 className="text-lg font-bold text-[#8b4513]">ISO 22000:2018</h3>
                            </div>
                            <p className="text-gray-600">Food Safety Management System</p>
                            
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6 hover:border-[#2f855a] transition-colors duration-300">

                            <div className="flex items-center space-x-3 mb-3">
                                <p className="w-10 h-10 bg-[#f5f5dc] rounded-full flex items-center justify-center">
                                    <span class="text-[#2f855a] font-bold">✓</span>
                                </p>
                                <h3 className="text-lg font-bold text-[#8b4513]">FSSAI Certified</h3>
                            </div>    
                            <p className="text-gray-600">Food Safety & Compliance Authority</p>
                            
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6 hover:border-[#2f855a] transition-colors duration-300">

                            <div className="flex items-center space-x-3 mb-3">
                                <p className="w-10 h-10 bg-[#f5f5dc] rounded-full flex items-center justify-center">
                                    <span className="text-[#2f855a] font-bold">✓</span>
                                </p>
                                <h3 className="text-lg font-bold text-[#8b4513]">APEDA Registered</h3>
                            </div>    
                            <p className="text-gray-600">Agricultural & Processed Food Export Council</p>
                            
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;