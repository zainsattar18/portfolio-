import React from 'react'
import github from "../images/github.jpeg"
import linkedin from '../images/linkedin.png'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div className="bg-gray-300 p-4 flex items-center justify-between">

      <div className="inline-block m-1 text-xl">&copy; Zain Sattar 2020 </div>

      <div className="inline-block">
        <div className="inline-block m-1">
          <Link to={{ pathname: "https://github.com/zainsattar18" }} target="_blank" > <img src={github} alt="github" width="25px" /></Link>
        </div>

        <div className="inline-block m-1">
          <Link to={{ pathname: "https://www.linkedin.com/in/zain-sattar-0368611b0" }} target="_blank" > <img src={linkedin} alt="linkedin" width="25px" /></Link>
        </div>
      </div>
    </div>
  )
}
