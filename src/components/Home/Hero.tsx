import { FC } from 'react';
import { CreatePlanButton } from '../buttons/CreatePlanButton';

export const Hero: FC = () => {

    return (
        <section className='relative bg-cover bg-center h-[600px] text-[#FEFCF7] rounded-xl mt-8 sm-h[500px] md:h-[550px] bg-[url(/src/assets/home/desktop/image-hero-coffeepress.jpg)] sm:bg-[url(/src/assets/home/mobile/image-hero-coffeepress.jpg)] md:bg-[url(/src/assets/home/tablet/image-hero-coffeepress.jpg)]'>
            <div className='flex flex-col items-start px-6 py-16 max-w-xl text-left sm:px-4 md:px-10'>
                <h1 className='font-extrabold text-4xl font-fraunces sm:text-3xl md:text-5xl lg:text-7xl'>Great coffee made simple.</h1>
                <p className='font-barlow  text-base py-6 md:text-lg '> Start your mornings with the world’s best coffees. Try our expertly curated artisan
                    coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
               <CreatePlanButton/>
            </div>
        </section>
    )
}

