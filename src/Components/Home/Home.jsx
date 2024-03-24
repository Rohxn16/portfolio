import React from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Socials from '../Socials/Socials'


const lnk = 'https://www.google.com/maps/place/Meghnad+Saha+Institute+Of+Technology/@22.510475,88.4125134,17z/data=!4m14!1m7!3m6!1s0x3a0273f14bca0c15:0xbd1ef59baa5eafd0!2sMeghnad+Saha+Institute+Of+Technology!8m2!3d22.5104701!4d88.4150883!16s%2Fm%2F02rfdv4!3m5!1s0x3a0273f14bca0c15:0xbd1ef59baa5eafd0!8m2!3d22.5104701!4d88.4150883!16s%2Fm%2F02rfdv4?entry=ttu'
const Home = () => {
  return (
    <>
    <Navbar/>
        <div className="main-wrapper">
            <div className="display">
                <h2>Hey there, I'm <span className='big'>Rohan Dey</span>,<br />Computer Science undergrad at <br/>
                <a className='college' href={lnk} target='_blank'><span className='big'>MSIT</span></a>. I'm a
                </h2>
                {/* <h2>I am a,</h2> */}
                <h1>
                <Typewriter
                    options={{
                        strings: ['Python Backend Developer', 'React Developer', 'Open Source Contributor','AI-ML Enthusiast','Competitive Programmer','Indie Game Dev'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1000,
                        delay: 50,
                    }}
                    />
                </h1>

                {/* insert icons for social media here  as links*/}
                
            </div>

            <div className="mycard">
                <img className='myImg' src="https://avatars.githubusercontent.com/u/142105763?s=400&u=7f9fd7f0994b0b15f0154f18b6fcc6e8f3c42c59&v=4" alt="git" />
            </div>

            {/* <div className="socials">
                    <ul className="sm-links">
                        <li className="sm-link"><a href="https://github.com/Rohxn16" target='_blank'><FaGithub/></a></li>
                        <li className="sm-link"><a href="https://www.linkedin.com/in/rohan-dey-20a835268/" target='_blank'><FaLinkedin/></a></li>
                        <li className="sm-link"><a href="https://twitter.com/rohxn_16" target='_blank'><FaTwitter/></a></li>
                        <li className="sm-link"><a href="https://www.youtube.com/channel/UC1SXYQoObI_xWGWyj9lOnHQ" target='_blank'><FaYoutube/></a></li>
                    </ul>
                </div> */}
            <Socials/>
        </div>
    </>
  )
}

export default Home