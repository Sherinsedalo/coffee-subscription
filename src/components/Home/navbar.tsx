import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto  ">
      <img src="src/assets/shared/desktop/logo.svg" alt="Coffee Bean" className="w-50" />
      <ul className="flex space-x-8  font-barlow uppercase text-[#333D4B] text-sm font-bold tracking-widest ">
        <li className="hover:text-[#83888F] "><Link to="/">Home</Link></li>
        <li className="hover:text-[#83888F] "><Link to="/about">About us</Link></li>
        <li className="hover:text-[#83888F]  "><Link to="/plan">Create a plan</Link></li>
      </ul>
    </nav>
  );
};


