import React from 'react'
import projectData from '../data/projectdata'
import github2 from '../images/github2.png'
import click from '../images/click.png'
import { Link } from 'react-router-dom'

export default function Projects() {

  console.log(projectData)

  return (
    <div id="project">
      <div>
        {projectData.map(data => {
          return <div key={data.title}>
            <img src={data.image} alt={data.title} width="250px" />
            <div>{data.title}</div>

            <div>{data.description}</div>
            <div>{data.stack}</div>
            <div className="inline-block m-1">
              <Link to={{ pathname: data.website_link }} target="_blank" > <img src={click} alt="website" width="20px" /></Link>
            </div>
            <div className="inline-block m-1">
              <Link to={{ pathname: data.github_link }} target="_blank" > <img src={github2} alt="github" width="20px" /></Link>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}
