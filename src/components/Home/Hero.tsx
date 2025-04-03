import { FC } from 'react';


export const Hero: FC = () => {

    return (
        <section>
            <div>
                <h1>Great coffee made simple</h1>
                <p> Start your mornings with the world’s best coffees. Try our expertly curated artisan
                    coffees from our best roasters delivered directly to your door, at your schedule.
                </p>

                <button>Create your plan</button>
            </div>
            <div className='coffee-collection'>
                <div className='coffee-type'> <h3>Gran Espresso</h3>
                    <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p></div>
                <div className='coffee-type'>
                    <h3>Planalto</h3>
                    <p>  Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p></div>
                <div>
                    <h3>Piccollo</h3>
                    <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p></div>
                <div className='coffee-type'></div>
            </div>
        </section>
    )



}