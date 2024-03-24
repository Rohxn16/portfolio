import './Card.css';

import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <img className='cardImage' src="https://via.placeholder.com/150" alt="placeholder" />
            <div className="cardBody">
                <h2 className='cardHeader'>
                    {props.title}
                </h2>
                <p className='cardDescription'>
                    {props.desc}
                </p>
            </div>
        </div>
    )
}

export default Card