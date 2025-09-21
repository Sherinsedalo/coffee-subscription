import { FC } from "react"


export const OrderGuidePlan: FC = () => {
   return (
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-20 bg-[url(/assets/plan/mobile/bg-steps.png)] md:bg-[url(/assets/plan/tablet/bg-steps.png)] lg:bg-[url(/assets/plan/desktop/bg-steps.png)] m-25 rounded-xl">
         <div className="mt-8 mb-12 lg:mt-0">

            {/* Timeline dots */}

            <div className="relative h-4 mb-16 hidden md:block">
               <div className="absolute top-2 left-0 right-0 h-0.5 bg-[#FDD6BA]"></div>
               <div className="absolute top-0 left-0 w-full flex justify-between">
                  <span className="w-4 h-4 border-2 border-[#0E8784] bg-none rounded-full"></span>
                  <span className="w-4 h-4 border-2 border-[#0E8784] bg-none rounded-full"></span>
                  <span className="w-4 h-4 border-2 border-[#0E8784] bg-none rounded-full"></span>
               </div>
            </div>
         </div>
         {/* Ordering steps */}
         <div className="flex flex-col md:flex-row gap-12">
            <div>
               <p className="font-fraunces text-[#FDD6BA] font-extrabold text-4xl mb-4 lg:text-6xl">01</p>
               <h3 className="font-fraunces text-[#FEFCF7] text-2xl md:text-3xl font-bold mb-4">Pick your coffee</h3>
               <p className='font-barlow text-[#FEFCF7] text-md md:text-base lg:text-lg leading-relaxed'> Select from our evolving range of artisan coffees. Our beans are ethically
                  sourced and we pay fair prices for them. There are new coffees in all profiles
                  every month for you to try out.</p>
            </div>
            <div>
               <p className="font-fraunces text-[#FDD6BA] font-extrabold text-4xl mb-4 lg:text-6xl">02</p>
               <h3 className="font-fraunces text-[#FEFCF7] text-2xl md:text-3xl font-bold mb-4"> Choose the frequency</h3>
               <p className='font-barlow text-[#FEFCF7] text-md md:text-base lg:text-lg  leading-relaxed'>  Customize your order frequency, quantity, even your roast style and grind type.
                  Pause, skip or cancel your subscription with no commitment through our online portal.</p>
            </div>
            <div>
               <p className="font-fraunces text-[#FDD6BA] font-extrabold text-4xl mb-4 lg:text-6xl">03</p>
               <h3 className="font-fraunces text-[#FEFCF7] text-2xl md:text-3xl font-bold mb-4">Receive and enjoy!</h3>
               <p className='font-barlow text-[#FEFCF7] text-md md:text-base lg:text-lg  leading-relaxed'> We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
                  world-class coffees curated to provide a distinct tasting experience.
               </p>
            </div>
         </div>

      </section>
   )
}