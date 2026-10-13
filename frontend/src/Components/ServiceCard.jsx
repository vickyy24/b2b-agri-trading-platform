import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, details, accentClass }) => {

    return(
        <div className={`bg-white rounded-lg border-t-8 ${accentClass} shadow-xl hover:shadow-2xl duration-300 hover:-translate-y-1 p-8`}>

            <p className="text-4xl mb-4">{icon}</p>
            <h3 className="text-2xl font-bold text-[#1f2937] mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <h4 className="text-base font-semibold text-[#2f855a] mb-4">Key Features:</h4>

            <ul className="space-y-3 mb-8">
                {details.map((item, index)=>(
                    <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-green-700">✓</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            <Link to="/contact" className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-md duration-300">
                Inquire Now
            </Link>

        </div>
    )
}

export default ServiceCard;
