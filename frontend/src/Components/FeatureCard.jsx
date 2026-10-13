const FeatureCard = ({ icon, title, description, className, iconClassName, titleClassName, descriptionClassName }) => {

    return(
        <div className={className}>
            <p className={iconClassName}>{icon}</p>
            <h3 className={titleClassName}>{title}</h3>
            <p className={descriptionClassName}>{description}</p>
        </div>
    )
}

export default FeatureCard;
