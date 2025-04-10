export const AboutUs: React.FC = () => {
    const locations = [
        {
            logo: 'src/assets/about/desktop/illustration-uk.svg',
            country: 'United Kingdom',
            street: '68 Asfordby Rd',
            county: '  Alcaston',
            postalCode: 'SY6 1YA',
            phoneNumber: ' +44 1241 918425'
        },
        {
            logo: 'src/assets/about/desktop/illustration-canada.svg',
            country: 'Canada',
            street: '1528 Eglinton Avenue',
            county: 'Toronto',
            postalCode: ' Ontario M4P 1A6',
            phoneNumber: '+1 416 485 2997'
        },
        {
            logo: 'src/assets/about/desktop/illustration-australia.svg',
            country: 'Australia',
            street: '36 Swanston Street',
            county: 'Kewell',
            postalCode: ' Victoria',
            phoneNumber: '+61 4 9928 3629'
        }
    ]


    return (

        <section className="bg-[#FEFCF7]">
            <div className="bg-[url('src/assets/about/desktop/image-hero-whitecup.jpg')] bg-cover bg-center h-90 m-auto mb-10  lg:mt-10 lg:h-[400px] rounded-xl  text-[#FEFCF7] flex flex-col justify-center  ">
                <h1 className=" font-fraunces font-extrabold text-2xl leading-relaxed lg:text-5xl ">About Us</h1>
                <p className="font-barlow leading-relaxed text-base lg:text-xl">  Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of
                    coffee from around the world. We have since been dedicated to bring the perfect cup - from
                    bean to brew - in every shipment.</p>
            </div>

            <div className=" flex flex-col lg:flex-row lg:justify-center lg:gap-14 items-center">
                <div className="flex ">
                    <img srcSet="src/assets/about/mobile/image-commitment.jpg 480w,
                   src/assets/about/tablet/image-commitment.jpg 768w,
                   src/assets/about/desktop/image-commitment.jpg 1024w " alt="staff making a coffee" className="rounded-xl mt-8 mb-8 h-100 w-sm" />


                </div>
                <div className=" flex flex-col text-[#2C2C2C] mb-6 text-center lg:w-90  lg:text-left">
                    <h4 className="font-fraunces text-4xl mb-5 font-bold">Our commitment</h4>
                    <p className="font-barlow text-md leading-7">  We’re built on a simple mission and a commitment to doing good along the way. We want to
                        make it easy for you to discover and brew the world’s best coffee at home. It all starts
                        at the source. To locate the specific lots we want to purchase, we travel nearly 60 days
                        a year trying to understand the challenges and opportunities in each of these places.
                        We collaborate with exceptional coffee growers and empower a global community of farmers
                        through with well above fair-trade benchmarks. We also offer training, support farm community
                        initiatives, and invest in coffee plant science. Curating only the finest blends, we roast
                        each lot to highlight tasting profiles distinctive to their native growing region.</p>
                </div>
            </div>

            <div className="relative max-w-screen-xl mx-auto mt-40 ">
                <img srcSet="src/assets/about/mobile/image-quality.jpg 480w,
                   src/assets/about/tablet/image-quality.jpg 768w,
                   src/assets/about/desktop/image-quality.jpg 1024w"
                    alt="Cup of coffee with heart design"
                    className="absolute -top-34 left-1/2 -translate-x-1/2 rounded-xl lg:top[-40px] lg:left-auto lg:right-15 lg:translate-x-0 z-10 md:-top-40 md:w-70 lg:w-120 " />

                <div className="flex flex-col text-[#FEFCF7] z-0 mb-6 text-center bg-cover bg-[url(src/assets/about/mobile/bg-quality.png)] md:bg-[url(src/assets/about/tablet/bg-quality.png)] lg:bg-[url(src/assets/about/desktop/bg-quality.png)] h-[500px] rounded-xl p-6 justify-center mt-32 lg:text-left lg:px-24  ">
                    <h4 className="font-fraunces text-4xl mb-5 font-bold"> Uncompromising quality</h4>
                    <p className="font-barlow text-md leading-7 lg:text-lg lg:max-w-[500px]">  Although we work with growers who pay close attention to all stages of harvest and processing,
                        we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the
                        coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                        consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center m-14  ">
                <h4 className="font-fraunces text-[#83888F] text-xl font-bold lg:text-3xl lg:self-start">Our headquarters</h4>
                <div className="m-6 flex flex-col md:flex-row md:gap-15 lg:mt-8 lg:gap-30">
                    {locations.map((item) => (
                        <div key={item.country} className="p-3 flex flex-col items-center md:justify-evenly font-barlow  ">
                            <img src={item.logo} className="mb-4" />
                            <h2 className="font-fraunces font-extrabold text-xl">{item.country}</h2>
                            <p>{item.street}</p>
                            <p>{item.county}</p>
                            <p>{item.postalCode}</p>
                            <p>{item.phoneNumber}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}