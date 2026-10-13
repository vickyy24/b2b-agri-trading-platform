const FeatureCard = ({ icon, title, description, className, iconClassName, titleClassName, descriptionClassName }) => {

    return(
        <div className={`${className} max-lg:p-4`}>
            <p className={`${iconClassName} max-lg:text-4xl`}>{icon}</p>
            <h3 className={`${titleClassName} max-lg:text-lg`}>{title}</h3>
            <p className={descriptionClassName}>{description}</p>
        </div>
    )
}

export default FeatureCard;
