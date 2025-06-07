import React, { useState } from "react";
import cmwlogo from "../assets/images/cmwlogo.png";
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const navlinks = [
  "Home",
  "Find Jobs",
  "Find Talents",
  "About Us",
  "Testimonials",
];

const Navbar = ({openForm}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-6 bg-white">  
      <nav className="nav-shadow max-w-4xl mx-auto flex justify-between items-center  px-7 py-4 rounded-full bg-white">
        <div>
          <img src={cmwlogo} alt="logo" className="w-12" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-between gap-3 font-medium">
            {navlinks.map((navItem, index) => (
              <li className="hover:shadow-lg hover:scale-105 hover:translate-x-[1.5px] hover:translate-y-[1.5px] transition-transform duration-300 ease-in-out
                  py-3 px-6 rounded-lg" key={index}>
                <a href="#">{navItem}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={openForm}
            className="
            cursor-pointer hover:shadow-lg 
                  hover:scale-105 
                  hover:translate-x-[1.5px] hover:translate-y-[1.5px] 
                  transition-transform duration-300 ease-in-out
            bg-gradient-to-b from-[#A128FF] to-[#6100AD] rounded-full text-white
            font-medium px-4 py-2
            "
          >
            Create Job
          </button>
        </div>
        <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)}>
              <FaBars className="text-xl cursor-pointer" />
            </button>
        </div>
             <div className={`w-full h-full bg-white/95 fixed left-0 z-30 flex justify-between p-5 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'top-0' : '-top-full'} md:hidden`}>
      <ul className='space-y-4 font-semibold text-2xl'>
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href="#" className='cursor-pointer hover:underline'>{item}</a>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <IoMdClose className="text-3xl cursor-pointer" />
          </button>
        </div>
     
      </div>

      </nav>
    </div>
  );
};

export default Navbar;
