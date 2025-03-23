import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-white p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li> 
          <li><a href="#resume" className="hover:text-gray-400">Resume</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
