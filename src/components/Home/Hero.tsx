import { FC } from 'react';
import { Link } from 'react-router-dom';


export const Hero: FC = () => {

    return (
        <section className='relative  bg-[url(/src/assets/home/desktop/image-hero-coffeepress.jpg)] bg-cover bg-center text-[#] h-[600px] text-[#FEFCF7] rounded-xl mt-8'>
            <div className='flex flex-col items-start px-8 py-20 max-w-xl text-left'>
                <h1 className='font-extrabold text-7xl font-fraunces '>Great coffee made simple.</h1>
                <p className='font-barlow  text-lg py-8 '> Start your mornings with the world’s best coffees. Try our expertly curated artisan
                    coffees from our best roasters delivered directly to your door, at your schedule.
                </p>

                <button className='bg-[#0E8784] hover:bg-[#66D2CF] rounded-md h-[56px] w-[217px] font-bold text-lg '><Link to='/plan'>Create your plan</Link></button>
            </div>


        </section>
    )



}

