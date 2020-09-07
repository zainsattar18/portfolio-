import BelayOn from '../images/belay-on.gif'
import OneWorld from '../images/OneWorld.png'
import Pokemon from '../images/Pokemon.png'
import Spork from '../images/spork.gif'
import ZainShop from '../images/zains-shop.gif'


const projectData = [
  {
    title:"Zain's Shop",
    stack: "React, Redux, Firebase, Stripe, Netlify",
    description:"Developed an E-Commerce platform which allows to Authenticate using their Email or Google Account (OAuth 2.0) and processes payments using Stripe. Created a Firebase account for user and shop data. React for client side rendering using Redux & updated React practices (Hooks).",
    image:ZainShop,
    website_link:"https://zainsgearshop.netlify.app/",
    github_link: "https://github.com/zainsattar18/zains-shop"
  },
  {
    title:"Belay-On",
    stack: "React, Tailwind, Ruby on Rails, PostgreSQL, Heroku, Surge, Netlify",
    description:"Full-Stack application that allows the user to create an account and then create a new climb that they've recently completed. Other users are able to leave reviews for any previous climb and give it ratings. Climb On!",
    image:BelayOn,
    website_link:"http://belayon.surge.sh/",
    github_link: "https://github.com/zainsattar18/belay-on"
  },
  {
    title:"Spork",
    stack: "React, CSS, MongoDB, Express, Heroku, Surge",
    description:"Collaborative effort with fellow classmates & UXDI Cohort. SPORK is a Full-Stack application used to find your new favorite recipes. Search for easy at-home recipes by keyword, find substitutions for common ingredients, add your own personal recipes to our database and add comments on your favorite recipes.",
    image: Spork,
    website_link:"http://spork-app-p3.surge.sh/",
    github_link: "https://github.com/kellymakesstuff/spork"
  },
  {
    title:"OneWorld",
    stack: "React, CSS, JavaScript, Country-Api, Netlify",
    description:"OneWorld allows the user to retrieve pertinent information on any country in the world! Start by continent and continue down via sub-continent until you reach your desired location.",
    image:OneWorld,
    website_link:"https://one-world-p2.netlify.app/",
    github_link: "https://github.com/zainsattar18/one-world"
  },
  {
    title:"PokeDex",
    stack: "HTML, CSS, JavaScript, Poke-Api, Netlify",
    description:"Need information about your favorite Pokemon? Look no further. Get stats on over 650+ Pokemon and a brief description all while staying true to the late 90's style. Gotta Catch 'Em All!",
    image:Pokemon,
    website_link:"https://pokedex-p1.netlify.app/",
    github_link: "https://github.com/zainsattar18/PokeDex"
  }  
]
export default projectData