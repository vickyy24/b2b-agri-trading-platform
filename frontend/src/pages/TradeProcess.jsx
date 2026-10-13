import CommonHero from "../Components/CommonHero";
import ProcessStep from "../Components/ProcessStep";
import bgImageHome from "../assets/bgImageHome.jpg";
import { Link } from "react-router-dom";

const TradeProcess=()=>{

    const tradeSteps = [
        {
            title: "Share Your Requirement",
            description: "Tell us the commodity, quantity, grade, packaging, destination, and expected delivery schedule you need."
        },
        {
            title: "Review the Offer",
            description: "We review your requirements and share product, pricing, and trade information for your consideration."
        },
        {
            title: "Confirm Specifications",
            description: "Before an order is confirmed, align on the product grade, quality requirements, packing, quantity, and delivery terms."
        },
        {
            title: "Order & Supply Planning",
            description: "Once the order details are agreed, procurement and preparation are coordinated against the confirmed requirements."
        },
        {
            title: "Quality & Dispatch Coordination",
            description: "Product readiness, packaging, documentation, and shipment arrangements are coordinated for dispatch."
        },
        {
            title: "Delivery Follow-up",
            description: "We keep communication open through the agreed delivery milestones and follow up on any post-delivery requirements."
        }
    ];

    return(
        <div>
            <CommonHero
                bgImage={bgImageHome}
                title="Our Trade Process"
                description="A clear path from your first commodity inquiry to coordinated delivery."
            />

            <section className="py-16 bg-sky-50/40">
                <div className="mx-auto px-4">

                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#8b4513] mb-4">From Inquiry to Delivery</h2>
                        <p className="text-gray-600 leading-relaxed">Every trade begins with clear product requirements. These steps help both sides align on specifications, order details, and delivery expectations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tradeSteps.map((step, index)=>(
                            <ProcessStep
                                key={index}
                                number={index + 1}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/contact" className="inline-block bg-green-800 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-lg duration-300">
                            Start an Inquiry
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default TradeProcess;
