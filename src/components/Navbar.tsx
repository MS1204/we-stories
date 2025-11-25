import {NavLink} from 'react-router-dom'
// import { useState } from "react";
const Navbar = () => {

  return (
    <>
    <nav className="hidden md:flex">
      <div className="pl-[28rem] text-[rgb(186,172,172)] text-sm pt-[1rem] pb-[1rem] pl-[1rem] pr-[1rem]"> <NavLink to="/" className={({ isActive }) => isActive ? "text-amber-950" : "text-[rgb(186,172,172)]"}>Home</NavLink></div>
      <div className="pl-[2rem] text-[rgb(186,172,172)] text-sm pt-[1rem] pb-[1rem] pr-[1rem]"><NavLink to='/about' className={({ isActive }) => isActive ? "text-amber-950" : "text-[rgb(186,172,172)]"}>About </NavLink></div>
      <div className="pl-[2rem] text-[rgb(186,172,172)] text-sm pt-[1rem] pb-[1rem] pr-[1rem]"><NavLink to='/services' className={({ isActive }) => isActive ? "text-amber-950" : "text-[rgb(186,172,172)]"}>Services</NavLink></div>
      <div className="pl-[2rem] text-[rgb(186,172,172)] text-sm pt-[1rem] pb-[1rem] pr-[2rem]"><NavLink to='/gallery' className={({ isActive }) => isActive ? "text-amber-950" : "text-[rgb(186,172,172)]"}>Gallery</NavLink></div>

      <button className="px-4 mb-4 mt-3 rounded-full border text-sm text-amber-950 border-amber-950 cursor-pointer">
        <div>
          Get started
          <span className="ml-2 text-lg"> ›</span>
        </div>
      </button>
      
    </nav>
    </>
    
  );
};

export default Navbar;