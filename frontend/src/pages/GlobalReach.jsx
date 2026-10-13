import CommonHero from "../Components/CommonHero";
import FeatureCard from "../Components/FeatureCard";
import bgImageHome from "../assets/bgImageHome.jpg";
import { Link } from "react-router-dom";

const GlobalReach=()=>{
    return(
        <div>
            <CommonHero
                bgImage={bgImageHome}
                title="Global Reach"
                description="Connecting agricultural supply from India with buyers and markets around the world."
            />

            <section className="py-16 bg-white">
                <div className="mx-auto px-4">

                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#8b4513] mb-5">From Indian Origins to Global Markets</h2>
                        <p className="text-gray-600 leading-relaxed">Padmayog Agrotech works across agricultural sourcing and international trade. We bring product requirements, origin networks, quality expectations, and shipment coordination together to support reliable supply for global buyers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="🌱"
                            title="Origin-Led Sourcing"
                            description="Procurement relationships across key agricultural belts connect buyers with available commodities and product specifications."
                            className="bg-sky-50/40 rounded-xl border border-gray-200 p-7 text-center"
                            iconClassName="text-5xl mb-4"
                            titleClassName="text-xl font-bold text-[#2f855a] mb-3"
                            descriptionClassName="text-gray-600 leading-relaxed"
                        />
                        <FeatureCard
                            icon="📋"
                            title="Buyer Requirements"
                            description="Product grade, packaging, quantity, and delivery requirements are aligned before an order is confirmed."
                            className="bg-sky-50/40 rounded-xl border border-gray-200 p-7 text-center"
                            iconClassName="text-5xl mb-4"
                            titleClassName="text-xl font-bold text-[#2f855a] mb-3"
                            descriptionClassName="text-gray-600 leading-relaxed"
                        />
                        <FeatureCard
                            icon="🚢"
                            title="Trade Coordination"
                            description="Export preparation and shipment milestones are coordinated to keep buyers informed through delivery."
                            className="bg-sky-50/40 rounded-xl border border-gray-200 p-7 text-center"
                            iconClassName="text-5xl mb-4"
                            titleClassName="text-xl font-bold text-[#2f855a] mb-3"
                            descriptionClassName="text-gray-600 leading-relaxed"
                        />
                    </div>

                </div>
            </section>

            <section className="py-14 bg-[#f5f5dc]">
                <div className="mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#8b4513] mb-4">Looking for a Supply Partner?</h2>
                    <p className="text-gray-700 leading-relaxed mb-7">Share your destination market and product requirements with our team to start a conversation about sourcing and delivery.</p>
                    <Link to="/contact" className="inline-block bg-green-800 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-lg duration-300">
                        Contact Our Team
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default GlobalReach;
