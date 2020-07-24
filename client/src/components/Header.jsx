import React from 'react'
import { Link } from "react-scroll";


export default function () {
  return (
    <div>
      <div>
        <div>Zain Sattar</div>

        <div>
          
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >About</Link>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Resume</Link>

            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >Projects</Link>
            <Link
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
  )
}
