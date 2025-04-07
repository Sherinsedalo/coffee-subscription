import { FC } from "react";

export const CoffeeCollection: FC = () => {
    return (
        <section>
            <div className='flex flex-col m-4 items-center'>

                <h1 className=" absolute font-fraunces text-black text-[150px] font-extrabold z-0 text-shadow-lg opacity-85">Our collection</h1>
                <div className="flex  relative z-10 py-35  ">
                    <div>
                        <img src="src/assets/home/desktop/image-gran-espresso.png" />
                        <h4 className="font-fraunces text-[#333D4C] font-extrabold text-xl">Gran Espresso</h4>
                        <p className="font-barlow text-lg text-[#333D4C] font-medium">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                    </div>
                    <div>
                        <img src="src/assets/home/desktop/image-planalto.png" />
                        <h4 className="font-fraunces text-[#333D4C] font-extrabold text-xl">Planalto</h4>
                        <p className="font-barlow text-lg text-[#333D4C] font-medium">  Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </div>
                    <div>
                        <img src="src/assets/home/desktop/image-piccollo.png" />
                        <h4 className="font-fraunces text-[#333D4C] font-extrabold  text-xl">Piccollo</h4>
                        <p className="font-barlow text-lg text-[#333D4C] font-medium">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                    <div>
                        <img src="src/assets/home/desktop/image-danche.png" />
                        <h4 className="font-fraunces text-[#333D4C] font-extrabold  text-xl"> Danche</h4>
                        <p className="font-barlow text-lg text-[#333D4C] font-medium">Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>

                    </div>
                </div>
            </div>

            <div className="relative pb-40">
                <div className="bg-[#333D4B] rounded-lg z-0 h-[550px] flex flex-col justify-center items-center ">
                    <div className="max-w-lg flex  flex-col">
                        <h4 className="font-fraunces text-[#fff] text-4xl font-bold">Why choose us</h4>
                        <p className='text-[#83888F] font-barlow text-lg leading-5 py-8'> A large part of our role is choosing which particular coffees will be featured
                            in our range. This means working closely with the best coffee growers to give
                            you a more impactful experience on every level.</p>
                    </div>
                </div>


                <div className=" absolute left-1/2 transform -translate-x-1/2 -bottom-3 px-4 z-10 ">
                    <div className="flex justify-between  items-start gap-6 max-w-3xl mx-auto pb-3">
                        <div className="flex flex-col bg-[#0E8784] justify-center items-center text-[#FEFCF7] h-[300px] w-80 p-6 text-center shadow-lg rounded-lg">
                            <img src="src/assets/home/desktop/icon-coffee-bean.svg" className="w-15 mb-6" />
                            <h4 className="font-bold text-lg font-fraunces py-2 mb-4">Best quality</h4>
                            <p className=" text-sm  ">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </div>

                        <div className="flex flex-col bg-[#0E8784] justify-center items-center text-[#FEFCF7] h-[300px] w-80 p-6 text-center shadow-lg rounded-lg">
                            <img src="src/assets/home/desktop/icon-gift.svg" className="w-15 mb-4" />
                            <h4 className="font-bold text-lg font-fraunces py-2 mb-2"> Exclusive benefits </h4>
                            <p className="text-sm max-w-md p-3">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                        </div>

                        <div className="flex flex-col bg-[#0E8784] justify-center items-center text-[#FEFCF7] h-[300px] w-80 p-6 text-center shadow-lg rounded-lg">
                            <img src="src/assets/home/desktop/icon-truck.svg" className="w-15 mb-4" />
                            <h4 className="font-bold text-lg font-fraunces py-2 mb-2">Free shipping </h4>
                            <p className="text-sm max-w-md p-3"> We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )
}