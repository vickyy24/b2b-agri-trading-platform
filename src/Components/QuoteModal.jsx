const QuoteModal = (props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-start px-6 py-4 bg-[#e9efe9]">
                    <div>
                        <h2 className="text-2xl font-semibold text-[#8b4513]">Get Instant Commodity Quote</h2>
                        <p className="text-base text-gray-600 mt-1">
                            Fill out the form below to get competitive pricing for your requirements
                        </p>
                    </div>

                    <button onClick={props.onClose} className="text-gray-500 text-xl cursor-pointer hover:bg-white rounded-full w-10 h-10 p-2"> ✕</button>
                </div>

                {/* Body */}
                <div className="bg-gray-50 p-6 max-h-[65vh] overflow-y-auto">

                    <div className="bg-white p-6 rounded-xl shadow-sm">

                        {/* Commodity Details */}
                        <h3 className="text-lg font-semibold text-[#8b4513] mb-3">Commodity Details</h3>

                        <label className="block text-[15px] font-medium text-gray-800 mb-1">Select Commodity *</label>
                        <select className="w-full border p-3 rounded-md mb-4 border-gray-400">
                            <option>Select Commodity</option>
                            <option>Sugar</option>
                            <option>Maize</option>
                            <option>Wheat</option>
                            <option>Rice</option>
                            <option>Corn</option>
                            <option>Barley</option>
                            <option>Soyabean</option>
                            <option>Sunflower</option>
                            <option>Mustard</option>
                        </select>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[15px] font-medium text-gray-800 mb-1">
                                    Quantity (Tons) *
                                </label>
                                <input type="text" placeholder="e.g., 100" className="border p-3 rounded-md w-full border-gray-400"/>
                                <p className="text-sm text-gray-500 mt-1">
                                    Quantity in metric tons
                                </p>
                            </div>

                            <div>
                                <label className="block text-[15px] font-medium text-gray-800 mb-1">
                                    Delivery Location *
                                </label>
                                <input type="text" placeholder="e.g., Mumbai Port, India" className="border p-3 rounded-md  w-full border-gray-400"/>
                            </div>
                        </div>

                        <hr className="my-6 text-gray-400" />

                        {/* Company Details */}
                        <h3 className="text-lg font-semibold text-[#8b4513] mb-3">
                            Company Details
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[15px] font-medium text-gray-800 mb-1">
                                    Company Name *
                                </label>
                                <input type="text" placeholder="Your Company Name" className="border p-3 rounded-md w-full border-gray-400"/>
                            </div>

                            <div>
                                <label className="block text-[15px] font-medium text-gray-800 mb-1">
                                    GST Number *
                                </label>
                                <input type="text" placeholder="27AABCP1234D1Z2" className="border p-3 rounded-md w-full border-gray-400"/>
                                <p className="text-sm text-gray-500 mt-1">Format: 27AABCP1234D1Z2</p>
                            </div>
                        </div>

                        <hr className="my-6 text-gray-400" />

                        {/* Contact Details */}
                        <h3 className="text-lg font-semibold text-[#8b4513] mb-3">Contact Details</h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[15px] font-medium text-gray-800 mb-1">Email Address *</label>
                                <input type="email" placeholder="contact@company.com" className="border p-3 rounded-md w-full border-gray-400"/>
                            </div>

                            <div>
                                <label className="block text-[15px] font-medium text-gray-800 mb-1">Phone Number *</label>
                                <input type="text" placeholder="+91 98765 43210" className="border p-3 rounded-md w-full border-gray-400"/>
                            </div>
                        </div>

                        <hr className="my-6 text-gray-400" />

                        {/* Additional */}
                        <h3 className="text-lg font-semibold text-[#8b4513] mb-3">Additional Requirements</h3>

                        <label className="block text-[15px] font-medium text-gray-800 mb-1">
                            Special Instructions or Requirements
                        </label>

                        <textarea placeholder="Any special packaging, testing requirements, delivery timelines, etc." 
                        className="w-full border p-3 rounded-md h-28 border-gray-400 resize-none"></textarea>

                        {/* Submit */}
                        <button className="w-full mt-6 bg-[#2f855a] hover:bg-green-700 text-white py-3.5 px-4 rounded-md font-medium">
                            Request Quote
                        </button>

                        {/* Required text (correct position) */}
                        <p className="text-sm text-gray-500 text-center mt-3">
                            * Required fields. Our sales team will contact you within 24 hours with a competitive quote.
                        </p>

                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center px-6 py-3 border-t border-gray-400 bg-white">

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-600">✔</span>24-hour response
                    </div>

                    <div className="flex gap-3">
                        <button className="px-4 py-2 border rounded-md text-gray-600 font-medium cursor-pointer" onClick={props.onClose}>
                            Maybe Later
                        </button>
                        
                            <button className="px-4 py-2 text-white rounded-md font-medium bg-linear-to-r from-green-800 to-green-600 cursor-pointer" onClick={props.onClose}>
                                <a href="#NeedQuote" >View on Page</a>
                            </button>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default QuoteModal;