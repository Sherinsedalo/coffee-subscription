import { FC } from "react";

export const OrderGuide: FC = () => {
   return (
      <section>
         <h4 className="font-fraunces text-[#83888F] font-bold text-2xl py-12 flex flex-col text-left">How it works</h4>
         <div className="mt-8 mb-12">

            <div className="relative h-4">
               <div className="absolute top-2 left-0 right-0 h-0.5 bg-[#FDD6BA]"></div>
               <div className="absolute top-0 left-0 w-full flex justify-between">
                  <span className="w-4 h-4 border-2 border-[#0E8784]  bg-white rounded-full"></span>
                  <span className="w-4 h-4 border-2 border-[#0E8784] bg-white rounded-full"></span>
                  <span className="w-4 h-4 border-2 border-[#0E8784] bg-white rounded-full"></span>
               </div>
            </div>
         </div>
         <div className="flex text-left gap-10">
            <div>
               <p className="font-fraunces text-[#FDD6BA] font-bold text-4xl">01</p>
               <h3 className="font-fraunces text-[#333D4B] text-3xl font-bold">Pick your coffee</h3>
               <p className='font-barlow text-[#333D4B] text-md py-8'> Select from our evolving range of artisan coffees. Our beans are ethically
                  sourced and we pay fair prices for them. There are new coffees in all profiles
                  every month for you to try out.</p>
            </div>
            <div>
               <p className="font-fraunces text-[#FDD6BA] font-bold text-4xl">02</p>
               <h3 className="font-fraunces text-[#333D4B] text-3xl font-bold"> Choose the frequency</h3>
               <p className='font-barlow text-[#333D4B] text-md py-8'>  Customize your order frequency, quantity, even your roast style and grind type.
                  Pause, skip or cancel your subscription with no commitment through our online portal.</p>
            </div>
            <div>
               <p className="font-fraunces text-[#FDD6BA] font-bold text-4xl">03</p>
               <h3 className="font-fraunces text-[#333D4B] text-3xl font-bold">Receive and enjoy!</h3>
               <p className='font-barlow text-[#333D4B] text-md py-8'> We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
                  world-class coffees curated to provide a distinct tasting experience.
               </p>
            </div>
         </div>
      </section>
   )
}