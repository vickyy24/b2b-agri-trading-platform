import { useState } from "react";
import CommonHero from "../Components/CommonHero";
import ProcessStep from "../Components/ProcessStep";
import bgImageHome from "../assets/bgImageHome.jpg";

const TradeProcess=()=>{

    const [activeStep, setActiveStep] = useState(0);

    const tradeSteps = [
        {
            icon: "📝",
            title: "Inquiry & Requirement Analysis",
            description: "We begin by understanding your specific requirements, quality standards, and timeline.",
            duration: "1-2 Days",
            documents: "Requirements Sheet, Specifications Document"
        },
        {
            icon: "📄",
            title: "Contract Finalization",
            description: "Legal documentation and agreement on terms and conditions.",
            duration: "2-3 Days",
            documents: "Sales Contract, Incoterms Agreement"
        },
        {
            icon: "🔍",
            title: "Sourcing & Quality Verification",
            description: "Identification of suitable suppliers and rigorous quality verification.",
            duration: "3-5 Days",
            documents: "Quality Certificates, Test Reports"
        },
        {
            icon: "🏭",
            title: "Processing & Packaging",
            description: "Processing, quality control, and packaging as per requirements.",
            duration: "2-7 Days",
            documents: "Packing List, Quality Certificate"
        },
        {
            icon: "🚢",
            title: "Logistics & Shipping",
            description: "Arrangement of transportation and shipping documentation.",
            duration: "3-10 Days",
            documents: "Bill of Lading, Shipping Invoice"
        },
        {
            icon: "🛃",
            title: "Customs Clearance",
            description: "Export/import customs clearance and documentation.",
            duration: "2-5 Days",
            documents: "Customs Declaration, Certificate of Origin"
        },
        {
            icon: "📦",
            title: "Delivery & After-Sales",
            description: "Final delivery and post-delivery support services.",
            duration: "2-5 Days",
            documents: "Delivery Note, Feedback Form"
        }
    ];

    const activeTradeStep = tradeSteps[activeStep];

    return(
        <div>
            <CommonHero
                bgImage={bgImageHome}
                title="Our Transparent Trade Process"
                description="A transparent methodology for global agricultural commodities trading, step-by-step approach to global agricultural commodities trading"
            />

            <section className="py-10 bg-gray-50">
                <div className="mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                        {tradeSteps.map((step, index)=>(
                            <button
                                key={index}
                                type="button"
                                onClick={()=>setActiveStep(index)}
                                className={"flex items-center gap-3 p-4 rounded-lg border text-left duration-300 " +
                                    (activeStep === index ? "bg-green-700 text-white border-green-700 shadow-md" : "bg-white text-gray-700 border-gray-200 hover:border-green-700")}
                            >
                                <span className="text-2xl">{step.icon}</span>
                                <span>
                                    <span className="block text-xs font-semibold opacity-80">Step {index + 1}</span>
                                    <span className="font-semibold">{step.title}</span>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 md:p-8 mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <p className="text-4xl mb-3">{activeTradeStep.icon}</p>
                                <h2 className="text-2xl font-bold text-[#8b4513] mb-3">Step {activeStep + 1}: {activeTradeStep.title}</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">{activeTradeStep.description}</p>
                                {activeStep === 0 &&
                                    <>
                                        <h3 className="text-lg font-bold text-[#2f855a] mb-3">Process Details</h3>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Initial consultation and requirement gathering</li>
                                            <li>Volume assessment and specifications</li>
                                            <li>Market analysis and feasibility study</li>
                                            <li>Budget estimation and quotation</li>
                                            <li>Timeline planning and scheduling</li>
                                        </ol>
                                    </>
                                }
                            </div>
                            <div className="space-y-5">
                                <div className="bg-sky-50/60 rounded-lg p-5">
                                    <h3 className="font-bold text-[#8b4513] mb-2">⏱️ Average Duration</h3>
                                    <p className="text-gray-700">{activeTradeStep.duration}</p>
                                </div>
                                <div className="bg-sky-50/60 rounded-lg p-5">
                                    <h3 className="font-bold text-[#8b4513] mb-2">📋 Key Documents</h3>
                                    <p className="text-gray-700">{activeTradeStep.documents}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <button type="button" disabled={activeStep === 0} onClick={()=>setActiveStep(activeStep - 1)} className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 cursor-pointer">
                                ← Previous Step
                            </button>
                            <button type="button" disabled={activeStep === tradeSteps.length - 1} onClick={()=>setActiveStep(activeStep + 1)} className="px-5 py-3 rounded-lg bg-green-700 hover:bg-green-800 text-white disabled:opacity-50 cursor-pointer">
                                Next Step →
                            </button>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center text-[#8b4513] mb-10">Complete Process Timeline</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tradeSteps.map((step, index)=>(
                            <ProcessStep
                                key={index}
                                number={index + 1}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-[#f5f5dc]">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#8b4513] mb-10">Benefits of Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <p className="text-4xl mb-3">👁️</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Transparency</h3>
                            <p className="text-gray-600">Complete visibility at every stage with regular updates and documentation</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <p className="text-4xl mb-3">⚡</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Efficiency</h3>
                            <p className="text-gray-600">A streamlined process designed to reduce time and unnecessary steps</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <p className="text-4xl mb-3">✅</p>
                            <h3 className="text-xl font-bold text-[#2f855a] mb-2">Quality Control</h3>
                            <p className="text-gray-600">Multiple quality checkpoints support consistent standards</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TradeProcess;
