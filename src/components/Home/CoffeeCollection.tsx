import { FC } from "react";
import { coffeeItems, coffeeItem } from "../../data/coffeeCollectionData";


export const CoffeeCollection: FC = () => {

    return (
        <section className="relative px-4 md:px-8 max-w-screen-xl mx-auto py-20 ">

            <h1 className=" absolute top-8 left-1/2 transform -translate-x-1/2 font-fraunces text-black text-[40px] sm:text-[72px] md:text-[100px] lg:text-[160px] xl:text-[200px] font-extrabold z-0 text-shadow-lg opacity-10 text-center leading-none">Our collection</h1>

            {/* Coffee options */}

            <div className=" relative z-10 py-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-12 pt-20 md:pt-40 text-center ">
                {coffeeItems.map((item: coffeeItem) => (
                    <div key={item.title} className="flex flex-col items-center">
                        <img src={item.img} alt={item.title} className='mb-4 w-32 h-auto' />
                        <h4 className="font-fraunces text-[#333D4C] text-xl font-extrabold mb-2">{item.title}</h4>
                        <p className="text-[#83888F] font-barlow text-lg leading-5 py-8">{item.description}</p>
                    </div>
                ))
                }

            </div>


            <div className="relative max-w-screen-xl mx-auto">
                <div className="bg-[#333D4B] rounded-lg z-0 h-auto md-h-[550px] flex flex-col justify-center items-center text-center px-6 py-16 ">
                    <div className="max-w-2xl">
                        <h4 className="font-fraunces text-white text-3xl md:text-4xl font-bold">Why choose us</h4>
                        <p className='text-[#83888F] font-barlow text-base md:text-lg  leading-6 mt-6'> A large part of our role is choosing which particular coffees will be featured
                            in our range. This means working closely with the best coffee growers to give
                            you a more impactful experience on every level.</p>
                    </div>
                </div>

                {/* Benefits cards */}

                <div className="relative w-full px-4 mt-10 lg:-mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-6 max-w-6xl mx-auto">

                        <div className="flex flex-col bg-[#0E8784] justify-center items-center text-[#FEFCF7] h-[300px] w-full p-8 text-center shadow-lg rounded-lg sm:p-10 sm:max-w-md mx-auto sm:h-[320px]">
                            <img src="/assets/home/desktop/icon-coffee-bean.svg" className="w-15 mb-6" />
                            <h4 className="font-bold text-lg font-fraunces  mb-4">Best quality</h4>
                            <p className=" text-sm  ">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </div>

                        <div className="flex flex-col bg-[#0E8784] justify-center items-center text-[#FEFCF7] h-[300px] w-full p-8 text-center shadow-lg rounded-lg sm:p-10 sm:max-w-md mx-auto sm:h-[320px]">
                            <img src="/assets/home/desktop/icon-gift.svg" className="w-15 mb-4" />
                            <h4 className="font-bold text-lg font-fraunces  mb-4"> Exclusive benefits </h4>
                            <p className="text-sm max-w-md p-3">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                        </div>

                        <div className="flex flex-col bg-[#0E8784] justify-center items-center text-[#FEFCF7] h-[300px] w-full p-8 text-center shadow-lg rounded-lg sm:p-10 sm:max-w-md mx-auto sm:h-[320px]">
                            <img src="/assets/home/desktop/icon-truck.svg" className="w-15 mb-4" />
                            <h4 className="font-bold text-lg font-fraunces mb-4">Free shipping </h4>
                            <p className="text-sm max-w-md p-3"> We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )
}