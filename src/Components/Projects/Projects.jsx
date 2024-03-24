import './Projects.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import Socials from '../Socials/Socials'
import { FaGithub } from 'react-icons/fa'

const project1 = {
  title: 'Project1',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea at mollitia repellat dolore commodi asperiores laboriosam nobis. Eos facere ipsam adipisci animi provident at ut nam dolores veniam quisquam, aperiam aut accusantium numquam velit, nemo dolorum corporis temporibus placeat. Rerum distinctio rem totam maxime veritatis dicta odio ad, adipisci quis omnis consequatur? Quam molestias in incidunt harum sequi? Odio deserunt recusandae incidunt enim!'
}

const project2 = {
  title: 'Project2',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea at mollitia repellat dolore commodi asperiores laboriosam nobis. Eos facere ipsam adipisci animi provident at ut nam dolores veniam quisquam, aperiam aut accusantium numquam velit, nemo dolorum corporis temporibus placeat. Rerum distinctio rem totam maxime veritatis dicta odio ad, adipisci quis omnis consequatur? Quam molestias in incidunt harum sequi? Odio deserunt recusandae incidunt enim!'
}

const project3 = {
  title: 'Project3',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea at mollitia repellat dolore commodi asperiores laboriosam nobis. Eos facere ipsam adipisci animi provident at ut nam dolores veniam quisquam, aperiam aut accusantium numquam velit, nemo dolorum corporis temporibus placeat. Rerum distinctio rem totam maxime veritatis dicta odio ad, adipisci quis omnis consequatur? Quam molestias in incidunt harum sequi? Odio deserunt recusandae incidunt enim!'
}

const project4 = {
  title: 'Project4',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea at mollitia repellat dolore commodi asperiores laboriosam nobis. Eos facere ipsam adipisci animi provident at ut nam dolores veniam quisquam, aperiam aut accusantium numquam velit, nemo dolorum corporis temporibus placeat. Rerum distinctio rem totam maxime veritatis dicta odio ad, adipisci quis omnis consequatur? Quam molestias in incidunt harum sequi? Odio deserunt recusandae incidunt enim!'
}

const Projects = () => {
return (

<div className="projects" id='projects'>
<div className="link2Github">
      <h2>
        <a href="https://github.com/Rohxn16?tab=repositories" target='_blank'> 
        <FaGithub className='github-icon'/>  View all projects on Github &rarr;
        </a>
      </h2>
    </div>
    {/* arrange the cards in such a way that they can be arranged in a rowwise order, they are all divs and should be placed inside a div with class name 'projectContainer' */}
    <div className='projectContainer'>
      <Card title={project1.title} desc={project1.desc}/>
      <Card title={project2.title} desc={project2.desc}/>
      <Card title={project3.title} desc={project3.desc}/>
      <Card title={project4.title} desc={project4.desc}/>
    </div>
    <Navbar/>

  </div>
  )
}

export default Projects