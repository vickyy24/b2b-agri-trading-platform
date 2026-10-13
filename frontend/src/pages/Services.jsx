import CommonHero from "../Components/CommonHero";
import ServiceCard from "../Components/ServiceCard";
import bgImageHome from "../assets/bgImageHome.jpg";

const Services=()=>{
    return(
        <div>
            {/* section 1 */}
            <CommonHero
                bgImage={bgImageHome}
                title="Our Comprehensive Services"
                description={`End-to-end solutions for agricultural commodities trading, processing, and supply chain management. From procurement to final delivery, we provide integrated solutions for agricultural commodities trading. Our expertise spans sourcing, quality processing, value addition, and complete supply chain management.`}
            />

            {/* Section 2 */}
            <section className="py-16 bg-sky-50/40">
                <div className="mx-auto px-4">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-[#8b4513] mb-4">How We Support Your Trade</h2>
                        <p className="text-gray-600 leading-relaxed">We connect buyers with agricultural supply through sourcing, quality coordination, and export support tailored to each requirement.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        <ServiceCard
                            icon="📊"
                            title="Commodity Trading"
                            description="Source agricultural commodities against your required grade, quantity, packaging, and delivery terms."
                            details={["Spot trading of agricultural commodities", "Category and grade-based product sourcing", "Requirements aligned to buyer specifications"]}
                            accentClass="border-t-blue-500"
                        />

                        <ServiceCard
                            icon="📤"
                            title="Export Coordination"
                            description="Coordinate the steps between confirmed supply and delivery for international trade requirements."
                            details={["Order and shipment coordination", "Export documentation support", "Communication through delivery milestones"]}
                            accentClass="border-t-green-500"
                        />

                        <ServiceCard
                            icon="🏭"
                            title="Processing & Quality"
                            description="Support product preparation and quality requirements before commodities are packed for dispatch."
                            details={["Product specifications and grade selection", "Packaging requirement coordination", "Quality and compliance information"]}
                            accentClass="border-t-orange-500"
                        />

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Services;
