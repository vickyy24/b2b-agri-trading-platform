import CommonHero from "../Components/CommonHero";
import bgImageHome from "../assets/bgImageHome.jpg";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact=()=>{
    return(
        <div>
            <CommonHero
                bgImage={bgImageHome}
                title="Contact Us"
                description="Talk to our team about agricultural commodities, product specifications, and supply requirements."
            />

            <section className="py-16 bg-sky-50/40">
                <div className="mx-auto px-4">

                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#8b4513] mb-4">Let’s Discuss Your Requirements</h2>
                        <p className="text-gray-600 leading-relaxed">Contact us with the commodity, quantity, grade, packaging, and destination you have in mind. We’ll be glad to discuss the next steps.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8">
                            <h3 className="text-2xl font-bold text-[#8b4513] mb-2">Direct Contact</h3>
                            <p className="text-gray-600 mb-6">Vikas Sontakke</p>

                            <div className="space-y-5">
                                <a href="tel:+919325287261" className="flex items-center gap-4 text-gray-700 hover:text-green-800">
                                    <FaPhoneAlt className="text-green-700" />
                                    <span>+91 93252 87261</span>
                                </a>
                                <a href="mailto:vikassontakke2002@gmail.com" className="flex items-center gap-4 text-gray-700 hover:text-green-800">
                                    <FaEnvelope className="text-green-700" />
                                    <span>vikassontakke2002@gmail.com</span>
                                </a>
                                <a href="https://www.linkedin.com/in/vikassontakke/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-green-800">
                                    <FaLinkedin className="text-green-700" />
                                    <span>LinkedIn Profile</span>
                                </a>
                                <a href="https://github.com/vickyy24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-green-800">
                                    <FaGithub className="text-green-700" />
                                    <span>GitHub Profile</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8">
                            <h3 className="text-2xl font-bold text-[#8b4513] mb-2">Padmayog Agrotech</h3>
                            <p className="text-gray-600 mb-6">Company office contact</p>

                            <div className="space-y-5">
                                <p className="flex items-start gap-4 text-gray-700">
                                    <FaMapMarkerAlt className="text-green-700 mt-1" />
                                    <span>109, Suratwala Mark Plazoo, Hinjewadi, Pune, MS-411057</span>
                                </p>
                                <a href="tel:+917887662700" className="flex items-center gap-4 text-gray-700 hover:text-green-800">
                                    <FaPhoneAlt className="text-green-700" />
                                    <span>+91 788 766 2700</span>
                                </a>
                                <a href="mailto:info@padmayog.in" className="flex items-center gap-4 text-gray-700 hover:text-green-800">
                                    <FaEnvelope className="text-green-700" />
                                    <span>info@padmayog.in</span>
                                </a>
                            </div>

                            <a href="mailto:info@padmayog.in" className="inline-block mt-8 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg duration-300">
                                Email Padmayog
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
