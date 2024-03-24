import './SkillCard.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import React from 'react'

function SkillCard(props) {
    return (
        <div className='skillCard'>
            <h2 className='skillName'>
                {props.name}
            </h2>
            <CircularProgressbar className='scard' value={props.percentage} text={`${props.percentage}%`} />
        </div>
    )
}

export default SkillCard
