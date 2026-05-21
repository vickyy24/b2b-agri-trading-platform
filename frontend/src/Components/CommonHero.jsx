const CommonHero = ({bgImage, title, description}) => {

    return(

        <section className="relative text-white">

            <div className="h-100 overflow-hidden relative">

                <img src={bgImage} alt="heroImage" className="w-full h-full object-cover scale-110 brightness-55 saturate-60"/>

            </div>

            <div className="absolute top-25 w-full text-center">

                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                    {description}
                </p>

            </div>

        </section>

    )
}

export default CommonHero;