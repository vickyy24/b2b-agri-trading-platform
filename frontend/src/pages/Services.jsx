import CommonHero from "../Components/CommonHero";
import ServiceCard from "../Components/ServiceCard";
import ProcessStep from "../Components/ProcessStep";
import CaseStudyCard from "../Components/CaseStudyCard";
import FeatureCard from "../Components/FeatureCard";
import bgImageHome from "../assets/bgImageHome.jpg";
import { Link } from "react-router-dom";

const Services=()=>{

    const serviceSteps = [
        { title: "Requirement Analysis", description: "Understanding client needs" },
        { title: "Sourcing/Supplier Identification", description: "Finding quality suppliers" },
        { title: "Quality Verification", description: "Testing and certification" },
        { title: "Contract Finalization", description: "Terms and conditions agreement" },
        { title: "Delivery & Support", description: "Final delivery and after-sales" }
    ];

    return(
        <div>
            {/* section 1 */}
            <CommonHero
                bgImage={bgImageHome}
                title="Our Comprehensive Services"
                description={`End-to-end solutions for agricultural commodities trading, processing, and supply chain management. From procurement to final delivery, we provide integrated solutions for agricultural commodities trading. Our expertise spans sourcing, quality processing, value addition, and complete supply chain management.`}
            />

            {/* Section 2 */}
            <section className="py-16 max-lg:py-10 bg-gray-50">
                <div className="mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-lg:grid-cols-2 gap-8 max-lg:gap-3">

                        <ServiceCard
                            icon="📊"
                            title="Trading Operations"
                            description="Comprehensive trading solutions with market expertise"
                            details={["Spot trading of agricultural commodities", "Futures and forward contracts", "Contract farming arrangements", "Price risk management", "Market intelligence and analysis"]}
                            accentClass="border-t-blue-500"
                        />

                        <ServiceCard
                            icon="📤"
                            title="Export Services"
                            description="End-to-end export solutions for global markets"
                            details={["Export documentation and compliance", "International logistics coordination", "Quality compliance certifications", "Customs clearance assistance", "Letter of Credit facilitation"]}
                            accentClass="border-t-green-500"
                        />

                        <ServiceCard
                            icon="🏭"
                            title="Manufacturing"
                            description="Processing excellence with quality control"
                            details={["Processing and milling facilities", "Value-added product manufacturing", "Quality control laboratories", "Packaging and labeling", "Research and development"]}
                            accentClass="border-t-orange-500"
                        />

                    </div>

                </div>
            </section>

            <section className="py-16 max-lg:py-10 bg-[#f5f5dc]">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-center text-[#8b4513] mb-12">Our Service Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:grid-cols-2 gap-6 max-lg:gap-3">
                        {serviceSteps.map((step, index)=>(
                            <ProcessStep
                                key={index}
                                number={index < 4 ? index + 1 : 6}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 max-lg:py-10 bg-gray-50">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-center text-[#8b4513] mb-12">Case Studies &amp; Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-lg:grid-cols-2 gap-8 max-lg:gap-3">
                        <CaseStudyCard
                            initials="GFC"
                            client="Global Food Corp"
                            project="Wheat Export to Middle East"
                            result="Increased efficiency by 40%"
                            description="Coordinated export documentation, logistics, and compliance for the full shipment process."
                        />
                        <CaseStudyCard
                            initials="ASL"
                            client="Asian Spices Ltd"
                            project="Spice Import from India"
                            result="Saved 30% in costs"
                            description="Optimized the supply chain and reduced transit time by 15 days."
                        />
                        <CaseStudyCard
                            initials="EGT"
                            client="European Grain Traders"
                            project="Corn Futures Trading"
                            result="20% better pricing"
                            description="Applied price risk management strategies to support improved pricing."
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 max-lg:py-10 bg-white">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-center text-[#8b4513] mb-12">Why Choose Padmayog Agrotech?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-lg:grid-cols-2 gap-8 max-lg:gap-3">
                        <FeatureCard
                            icon="🌍"
                            title="Global Network"
                            description="Connections in 10+ countries worldwide"
                            className="text-center p-6"
                            iconClassName="text-5xl mb-4"
                            titleClassName="text-xl font-bold text-[#2f855a] mb-2"
                            descriptionClassName="text-gray-600"
                        />
                        <FeatureCard
                            icon="⭐"
                            title="Quality Guarantee"
                            description="ISO-certified quality control processes"
                            className="text-center p-6"
                            iconClassName="text-5xl mb-4"
                            titleClassName="text-xl font-bold text-[#2f855a] mb-2"
                            descriptionClassName="text-gray-600"
                        />
                        <FeatureCard
                            icon="⚡"
                            title="Fast Execution"
                            description="Efficient logistics and timely delivery"
                            className="text-center p-6"
                            iconClassName="text-5xl mb-4"
                            titleClassName="text-xl font-bold text-[#2f855a] mb-2"
                            descriptionClassName="text-gray-600"
                        />
                        <FeatureCard
                            icon="🤝"
                            title="Transparent Pricing"
                            description="Competitive rates with no hidden costs"
                            className="text-center p-6"
                            iconClassName="text-5xl mb-4"
                            titleClassName="text-xl font-bold text-[#2f855a] mb-2"
                            descriptionClassName="text-gray-600"
                        />
                    </div>
                </div>
            </section>

            <section className="py-14 max-lg:py-10 bg-[#f5f5dc]">
                <div className="mx-auto px-4 text-center">
                    <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-[#8b4513] mb-4">Ready to Partner with Us?</h2>
                    <p className="text-gray-700 mb-7">Contact Vikas to discuss your agricultural commodity requirements.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact" className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-7 py-3 rounded-lg duration-300">
                            Get In Touch
                        </Link>
                        <a href="tel:+919325287261" className="inline-block bg-[#8b4513] hover:bg-[#622e09] text-white font-semibold px-7 py-3 rounded-lg duration-300">
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
