import CommonHero from "../Components/CommonHero";
import bgImageHome from "../assets/bgImageHome.jpg";
const Services=()=>{
    return(
        <div>
            {/* section 1 */}
            <CommonHero
              bgImage={bgImageHome}
              title= "Our Comprehensive Services"
              description={`End-to-end solutions for agricultural commodities trading, processing, and supply chain management. From procurement to final delivery, we provide integrated solutions for agricultural commodities trading. Our expertise spans sourcing, quality processing, value addition, and complete supply chain management.`}
            />

            {/* Section 2 */}
            <section className="py-16 bg-sky-50/40">
                <div className="mx-auto px-4">

                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white  rounded-lg border-t-8 border-t-blue-500 shadow-xl hover:shadow-2xl duration-300 hover:-translate-y-1" >
                            <p>📊</p>
                            <h4></h4>
                            <p></p>
                            <h6></h6>
                            <ul>
                                <li><span>✓</span><span>Spot trading of agricultural commodities</span></li>
                                <li><span>✓</span><span></span></li>
                                <li><span>✓</span><span></span></li>
                                <li><span>✓</span><span></span></li>
                                <li><span>✓</span><span></span></li>

                                <button type="button">Inquire Now</button>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg border-t-8 border-t-green-500 shadow-xl hover:shadow-2xl duration-300 hover:-translate-y-1">
                            <p>📤</p>
                            <h4></h4>
                            <p></p>
                            <h6></h6>
                            <ul>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>

                                <button type="button">Inquire Now</button>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg border-t-8 border-t-orange-500 shadow-xl hover:shadow-2xl duration-300 hover:-translate-y-1">
                            <p>🏭</p>
                            <h4></h4>
                            <p></p>
                            <h6></h6>
                            <ul>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>
                                <li>✓<span></span></li>

                                <button type="button">Inquire Now</button>
                            </ul>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}
export default Services;