import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact=()=>{

    const [message, setMessage] = useState("");

    function handleContactSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const subject = encodeURIComponent(formData.get("serviceInquiry"));
        const body = encodeURIComponent(
            `Name: ${formData.get("fullName")}\n` +
            `Email: ${formData.get("emailAddress")}\n` +
            `Contact Number: ${formData.get("contactNumber")}\n` +
            `Company: ${formData.get("companyName") || "Not provided"}\n\n` +
            formData.get("message")
        );

        setMessage("Your email app will open with your inquiry addressed to Vikas.");
        window.location.href = `mailto:vikassontakke2002@gmail.com?subject=${subject}&body=${body}`;
    }

    return(
        <div>
            <section className="bg-[linear-gradient(to_bottom,#8b4513_0px_80px,#f9fafb_80px_100%)] pt-32 pb-10 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-[#8b4513] mb-4">Contact Us</h1>
                    <p className="text-gray-600 leading-relaxed">Get in touch for inquiries about commodities, services, trade partnerships, vendor registrations, or other business opportunities.</p>
                </div>
            </section>

            <section className="py-10 bg-gray-50">
                <div className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-[#8b4513] mb-2">Get in Touch</h2>
                            <p className="text-gray-600">Fill out the form and your email app will prepare a message to Vikas.</p>
                        </div>

                        <form onSubmit={handleContactSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input id="fullName" name="fullName" type="text" placeholder="John Doe" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-700" />
                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input id="emailAddress" name="emailAddress" type="email" placeholder="john@example.com" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-700" />
                                </div>
                                <div>
                                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                                    <input id="contactNumber" name="contactNumber" type="tel" placeholder="+91 98765 43210" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-700" />
                                </div>
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                    <input id="companyName" name="companyName" type="text" placeholder="Your Company Pvt. Ltd." className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-700" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="serviceInquiry" className="block text-sm font-medium text-gray-700 mb-2">Service Inquiry *</label>
                                <select id="serviceInquiry" name="serviceInquiry" required className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-green-700">
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Trading Operations">Trading Operations</option>
                                    <option value="Export Services">Export Services</option>
                                    <option value="Import Services">Import Services</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Supply Chain Solutions">Supply Chain Solutions</option>
                                    <option value="Vendor Registration">Vendor Registration</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                                <textarea id="message" name="message" rows="5" required placeholder="Tell me about your inquiry..." className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-y focus:outline-none focus:border-green-700"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg duration-300 cursor-pointer">
                                Send Message
                            </button>
                            <p className="text-sm text-gray-500">* Required fields. Submitting opens your email app so you can review and send the message.</p>
                            {message && <p className="text-sm text-green-700">{message}</p>}
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-[#2f855a] mb-6">My Contact Details</h2>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                <h3 className="text-xl font-bold text-[#8b4513] mb-2">Vikas Sontakke</h3>
                                <p className="text-gray-600 mb-5">Pune, Maharashtra</p>
                                <div className="space-y-4">
                                    <a href="tel:+919325287261" className="flex items-center gap-3 text-gray-700 hover:text-green-800">
                                        <FaPhoneAlt className="text-green-700" />
                                        <span>+91 93252 87261</span>
                                    </a>
                                    <a href="mailto:vikassontakke2002@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-green-800">
                                        <FaEnvelope className="text-green-700" />
                                        <span>vikassontakke2002@gmail.com</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/vikassontakke/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-green-800">
                                        <FaLinkedin className="text-green-700" />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href="https://github.com/vickyy24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-green-800">
                                        <FaGithub className="text-green-700" />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-[#2f855a] mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-5">
                                <div>
                                    <h3 className="font-bold text-[#8b4513] mb-2">How can I contact you directly?</h3>
                                    <p className="text-gray-600">Use the phone number or email above, or send an inquiry through the form.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#8b4513] mb-2">What information should I include?</h3>
                                    <p className="text-gray-600">Please include the commodity, quantity, quality specifications, delivery timeline, and any special requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact;
