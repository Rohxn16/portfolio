import React from 'react'
import './Skills.css'
import Navbar from '../Navbar/Navbar'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import SkillCard from '../SkillCard/SkillCard'

const percentage = 66;
const Skills = () => {
  return (
    <>  
        <Navbar/>
        <h1 className='head'>
            My Fields of Technical Expertise are:
        {/* <h3>(But is not limited to)</h3> */}
        </h1>
        <div className="skillsGrid">
        <SkillCard name='HTML' percentage='95' />
        <SkillCard name='CSS' percentage='90' />
        <SkillCard name='JAVASCRIPT' percentage='85' />
        <SkillCard name='REACT.JS' percentage='60' />
        <SkillCard name='PYTHON' percentage='85' />
        <SkillCard name='BACKEND(Py)' percentage='80' />
        <SkillCard name='MONGO DB' percentage='75' />
        <SkillCard name='APIs' percentage='70' />
        <SkillCard name='JAVA' percentage='75' />
        </div>

        <h1 className="head">
          My Soft Skills Include:
        </h1>
        <div className="skillsGrid">
          <SkillCard name='Problem Solving' percentage='95' />
          <SkillCard name='Teamwork' percentage='90' />
          <SkillCard name='Leadership' percentage='85' />
          <SkillCard name='Communication' percentage='80' />
          <SkillCard name='Time Mgmt.' percentage='75' />
          <SkillCard name='Adaptability' percentage='70' />
        </div>

        <h1 className="head">
          And My Hobby Skills are:
        </h1>
        <div className="skillsGrid">
          <SkillCard name='2D GameDev' percentage='35' />
          <SkillCard name='3D GameDev' percentage='40' />
          <SkillCard name='Tech. Writing' percentage='85' />
        </div>
    </>
  )
}

export default Skills