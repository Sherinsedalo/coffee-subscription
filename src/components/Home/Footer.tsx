import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <nav className="flex justify-between items-center py-6 px-2 max-w-screen-xl mx-auto bg-[#333D4B] mt-4 ">
            <img src="src/assets/shared/desktop/logo-light.svg" alt="Coffee Bean" className="w-50" />
            <ul className="flex space-x-8  font-barlow uppercase text-[#83888F] text-sm font-bold tracking-widest ">
                <li className="hover:text-[#FEFCF7] "><Link to="/">Home</Link></li>
                <li className="hover:text-[#FEFCF7] "><Link to="/about">About us</Link></li>
                <li className="hover:text-[#FEFCF7] "><Link to="/plan">Create a plan</Link></li>
            </ul>

            <div className="flex gap-3">
                <img src="src/assets/shared/desktop/icon-facebook.svg" />
                <img src="src/assets/shared/desktop/icon-twitter.svg" />
                <img src="src/assets/shared/desktop/icon-instagram.svg" />
            </div>
        </nav>
    );
};


