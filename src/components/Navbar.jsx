import logo from "../assets/V.png"
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20 h-20 " src={logo} alt="logo" />
        </div>
        <div className="m-8  flex items-center justify-center gap-4 text-4xl"> 
        <a href="https://www.linkedin.com/in/shreya-vishwas/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  />
    </a>
    <a href="https://github.com/shreya250101/" target="_blank" rel="noopener noreferrer">
    <FaGithub/>
    </a>
    
    <a href="https://docs.google.com/document/d/1LfQdWzDBeqDzVbEYEur0zEi72JXJf0fB/edit?usp=sharing&ouid=105546091329362916726&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
    <FaDownload/>
    </a>
            
            
            
            
        </div>
    </nav>
   
     
  );
};

export default Navbar;
