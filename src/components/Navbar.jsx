import { NavLink } from "react-router-dom";

import {PortLogo} from "../assets/icons/index";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={PortLogo} alt='logo' className='w-12 h-12 object-contain rounded-xl' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;