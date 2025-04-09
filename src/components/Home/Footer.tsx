import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer>
        <nav className="flex flex-col h-80 lg:flex-row md:flex-row md:h-26 justify-between items-center py-6 px-2 max-w-screen-xl mx-auto bg-[#333D4B] lg:mt-4 ">
            <img src="src/assets/shared/desktop/logo-light.svg" alt="Coffee Bean logo" className="w-50 mb-2 lg:mb-0" />
            <ul className="flex flex-col justify-center items-center  space-y-4 lg:space-x-8 lg:space-y-0 lg:flex-row font-barlow uppercase text-[#83888F] text-sm font-bold tracking-widest ">
                <li className="hover:text-[#FEFCF7] "><Link to="/">Home</Link></li>
                <li className="hover:text-[#FEFCF7] "><Link to="/about">About us</Link></li>
                <li className="hover:text-[#FEFCF7] "><Link to="/plan">Create a plan</Link></li>
            </ul>

            <div className="flex gap-6 lg:gap-5 mt-4 lg:mt-0">
                <img src="src/assets/shared/desktop/icon-facebook.svg" alt="Facebook logo" />
                <img src="src/assets/shared/desktop/icon-twitter.svg" alt="Twitter logo"  />
                <img src="src/assets/shared/desktop/icon-instagram.svg" alt="Instagram logo" />
            </div>
        </nav>
       </footer>
    );
};


