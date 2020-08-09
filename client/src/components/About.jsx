import React from 'react'
import {Link} from 'react-router-dom'

export default function () {
  return (
    <div id="about" className='bg-red-300'>
      <div className='text-gray-200 font-bold flex text-sm md:text-3xl justify-center pt-6 stroke-current '>Hello, World! I'm Zain, a Junior Software Engineer.</div>
      <div className="pt-6 p-10 pb-24">
        <div className='bg-gray-700 p-10 border-t-8  border-b-8 rounded-lg'>
        <div>
          <div className='text-gray-200 font-medium'> >> Zain.origin</div>
          <div className='text-gray-200 text-xs md:text-sm p-1 pl-2'> => 'Brooklyn, NY' </div>
        </div>

        <div>
          <div className='text-gray-200 font-medium pt-2'> >> Zain.education</div>
          <div className='text-gray-200 text-xs md:text-sm p-1 pl-2'> => 'Fordham University && General Assembly' </div>
        </div>

        <div>
          <div className='text-gray-200 font-medium pt-2'> >> Zain.interests</div>
          <div className='text-gray-200 text-xs md:text-sm p-1 pl-2'> => [ 'Photography', 'Code', 'Coffee', 'Rock Climbing', 'Pizza', 'Progressive Causes' ] </div>
        </div>

        <div>
          <div className='text-gray-200 font-medium pt-2'> >> Zain.résumé</div>
          <div className='text-blue-400 text-xs md:text-sm p-1 pl-2'> => `<Link to={{ pathname: "https://www.docdroid.net/It2MHaB/resume-zain-sattar-pdf" }} target="_blank" >zainsattar.pdf</Link>`</div>
        </div>

        <div>
          <div className='text-gray-200 font-medium pt-2'> >> Zain.email</div>
          <div className='text-gray-200 text-xs md:text-sm p-1 pl-2'> => 'Zainsattar18@gmail.com' </div>
        </div>
        </div>
      </div>
    </div>
  )
}
