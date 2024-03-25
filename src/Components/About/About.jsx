import Navbar from '../Navbar/Navbar'
import './About.css'
import GitHubCalendar from 'react-github-calendar'
import React from 'react'
import SocialsHorizontal from '../Socials/SocialsHorizontal'

const About = () => {
  return (
    <>
        {/* THis is the about page */}
        <Navbar/>

        <div className="abt-me">
        <h1>
            Hi, my name is <span className='bigger'>Rohan Dey</span>.<br/><br/> I am a aspiring software engineer, pursuing B.Tech in Computer Science Engineering with Cyber Security as my specialization from MSIT, Kolkata. I enjoy problem solving which serves as the root for my keen interest in the field of Computer Science.<br/><br/>
        </h1>
        <h3>
        I am also a active open source contributor, python backend developer and indie game dev newbie.
        </h3>
        <div className="calendar">
        <GitHubCalendar username='rohxn16' colorScheme='light' style={{color:'white'}} />
        </div>
        <br />
        <br />
        <h3>
            I also actively document my work and active projects on my Social media. I'm mostly active on twitter and linkedin. You can follow me there to stay updated with my work from the links below.
        </h3>
        <br />
        <br />
        <SocialsHorizontal/>
        </div>

    </>
  )
}

export default About