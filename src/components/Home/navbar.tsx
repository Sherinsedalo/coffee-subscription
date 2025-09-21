import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  md:shadow-none">
      <nav className="flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto  ">
        <img src="/assets/shared/desktop/logo.svg" alt="Coffee Bean logo" className="w-50" />

        <ul className="hidden md:flex space-x-8  font-barlow uppercase text-[#333D4B] text-sm font-bold tracking-widest ">
          <li className="hover:text-[#83888F] "><Link to="/">Home</Link></li>
          <li className="hover:text-[#83888F] "><Link to="/about">About us</Link></li>
          <li className="hover:text-[#83888F]  "><Link to="/plan">Create a plan</Link></li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none z-50" aria-label="Toggle menu" >
          <img src={isOpen ? '/assets/shared/mobile/icon-close.svg' : '/assets/shared/mobile/icon-hamburger.svg'}
            alt={isOpen ? 'Close menu' : 'Open menu'}
            className="w-6 h-6"
          />
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md z-40 flex flex-col items-center space-y-6 text-lg py-6 font-barlow uppercase text-[#333D4B] font-bold tracking-widest ">
          <li className="hover:text-[#83888F] "><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="hover:text-[#83888F] "><Link to="/about" onClick={() => setIsOpen(false)}>About us</Link></li>
          <li className="hover:text-[#83888F]  "><Link to="/plan" onClick={() => setIsOpen(false)}>Create a plan</Link></li>
        </ul>
      )}

    </header>

  );
};


