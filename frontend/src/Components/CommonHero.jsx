const CommonHero = ({bgImage, title, description, heroHeight = "h-90"}) => {

    return(

        <section className="relative text-white">

            <div className={`${heroHeight} overflow-hidden relative`}>

                <img src={bgImage} alt="heroImage" className="w-full h-full object-cover scale-110 brightness-55 saturate-60"/>

            </div>

            <div className="absolute inset-0 flex flex-col justify-center w-full text-center px-4 translate-y-10">

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
