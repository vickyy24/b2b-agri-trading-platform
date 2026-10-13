const CaseStudyCard = ({ initials, client, project, result, description }) => {

    return(
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
            <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#f5f5dc] text-[#8b4513] flex items-center justify-center font-bold">
                    {initials}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[#8b4513]">{client}</h3>
                    <p className="text-sm text-gray-600">{project}</p>
                </div>
            </div>
            <p className="text-green-700 font-bold text-xl mb-3">{result}</p>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}

export default CaseStudyCard;
