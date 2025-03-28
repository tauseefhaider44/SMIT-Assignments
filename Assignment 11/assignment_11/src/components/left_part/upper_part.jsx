import React from 'react'
import './upper_part.css'
import my_Avatar from '../../assets/images/my-avatar.png';

function UpperPart() {
    return (
        <>
            <div className="upper_Part">
                <ul>
                    <li><img src={my_Avatar} alt="My Avatar" /></li>
                    <li><h2>Richard Hanrick</h2></li>
                    <li>Web Developer</li>
                </ul>
            </div>
        </>
    )
}

export default UpperPart;