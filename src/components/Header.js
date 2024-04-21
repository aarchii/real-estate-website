import React from "react";

//import link
import { Link } from "react-router-dom";

//import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
  <header className='w-full py-6 mb-12 border-b'>
    <div className="w-[90%] mx-auto flex justify-between items-center">
      {/* logo */}
      <div className="flex justify-start">
      <Link to='/'>
        <img src={Logo} alt='' className="h-10 w-auto"/> 
      </Link>
      </div>
      {/* buttons */}
      <div className='flex items-center gap-6'>
        <Link className='text-lg hover:text-violet-900 transition' to='/login'>Log in</Link>
        <Link className='text-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/signup'>Sign up</Link>
        <Link className='text-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/submit-property'>Post Property</Link>
      </div>
    </div>
  </header>
  );
};

export default Header;
