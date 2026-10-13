const ProcessStep = ({ number, title, description }) => {

    return(
        <div className="relative bg-white rounded-xl border border-gray-200 shadow-md p-6">
            <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center text-xl font-bold mb-5">
                {number}
            </div>
            <h3 className="text-xl font-bold text-[#8b4513] mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}

export default ProcessStep;
