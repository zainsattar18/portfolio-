import React from 'react'
import { Link } from "react-scroll";



export default function () {
  return (
    <div>
      <div className="flex justify-between items-center  bg-gray-200 p-2 md:p-6">
        <div className="flex flex row text-lg md:text-5xl text-indigo-600 hover:text-black">Zain Sattar
        <div className="text-sm flex items-center pl-1 md:text-lg md:pl-3 md:pt-2 text-indigo-400 hover:text-black"> // Full Stack Developer</div> 
        </div>

        <div className="">
        <div className="text-sm md:text-3xl md:flex-grow">
          <Link
            className="block mt-4 md:inline-block lg:mt-0 text-indigo-600  hover:text-black mr-4"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
          >About</Link>
          
            <a href="https://www.docdroid.net/It2MHaB/resume-zain-sattar-pdf" rel="noopener noreferrer" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-600  hover:text-black mr-4" >
              Resume</a>

          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-600  hover:text-black mr-4"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
          >Projects</Link>
          
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-600 hover:text-black mr-4"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
