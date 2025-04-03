import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">

      <img src="./assets/home/desktop/icon-coffee-bean.svg" alt="Coffee Bean" />


      <ul className="flex space-x-6 text-gray-600">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/plan">Create a plan</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
