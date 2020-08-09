import React from 'react'
import projectData from '../data/projectdata'
import github2 from '../images/github.jpeg'
import click from '../images/click.png'
import { Link } from 'react-router-dom'

export default function Projects() {

  // console.log(projectData)

  return (
    <div id="project" className="">
      <div className="flex justify-evenly flex-wrap mt-24 mb-24">
        {projectData.map(data => {
          return <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 border-4 border-indigo-300" key={data.title}>
            <img className="w-full" src={data.image} alt={data.title} width="250px" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 flex justify-center">{data.title}</div>

              <div className="text-gray-700 text-lg md:text-l pb-2">{data.description}</div>
              <div className="text-gray-700 font-bold text-xs md:text-sm pb-2">{data.stack}</div>
              <div className="flex justify-evenly">
                <div className="inline-block m-1">
                  <Link to={{ pathname: data.website_link }} target="_blank" > <img src={click} alt="website" width="20px" /></Link>
                </div>
                <div className="inline-block m-1">
                  <Link to={{ pathname: data.github_link }} target="_blank" > <img src={github2} alt="github" width="20px" /></Link>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}
