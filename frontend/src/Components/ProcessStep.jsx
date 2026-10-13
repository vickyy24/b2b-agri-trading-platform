const ProcessStep = ({ number, title, description }) => {

    return(
        <div className="flex gap-4 items-start bg-white rounded-xl border border-gray-200 shadow-md p-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center text-base font-bold">
                {number}
            </div>
            <div>
                <h3 className="text-lg font-bold text-[#8b4513] mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default ProcessStep;
