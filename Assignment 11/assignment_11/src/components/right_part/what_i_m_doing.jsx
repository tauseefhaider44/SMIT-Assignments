import React from 'react'
import './what_i_m_doing.css'
import web_desing_icon from '../../assets/icons/web_design_icon.svg'
import web_dev_icon from '../../assets/icons/web_dev_icon.svg'
import mobile_apps_icon from '../../assets/icons/mobile_apps_icon.svg'
import photography_icon from '../../assets/icons/photography_icon.svg'

function WhatIMDoing() {
    return (
        <>
            <div className="what_Container">
                <h1>What I'm Doing</h1>
                <ul className='what_Cards_Box'>
                    <li className='what_Card'>
                        <div className="what_Left">
                            <img src={web_desing_icon} alt="" />
                        </div>
                        <div className="what_Right">
                            <ul>
                                <li><h3>Web Design</h3></li>
                                <li><p>The most modern and high-quality design made at a professional level.</p></li>
                            </ul>
                        </div>

                    </li><li className='what_Card'>
                        <div className="what_Left">
                            <img src={web_dev_icon} alt="" />
                        </div>
                        <div className="what_Right">
                            <ul>
                                <li><h3>Web Development</h3></li>
                                <li><p>High-quality development of sites at the professional level.</p></li>
                            </ul>
                        </div>

                    </li>

                    <li className='what_Card'>
                        <div className="what_Left">
                            <img src={mobile_apps_icon} alt="" />
                        </div>
                        <div className="what_Right">
                            <ul>
                                <li><h3>Mobile apps</h3></li>
                                <li><p>Professional development of applications for iOS and Android.</p></li>
                            </ul>
                        </div>

                    </li><li className='what_Card'>
                        <div className="what_Left">
                            <img src={photography_icon} alt="" />
                        </div>
                        <div className="what_Right">
                            <ul>
                                <li><h3>Photography</h3></li>
                                <li><p>I make high-quality photos of any category at a professional level.</p></li>
                            </ul>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default WhatIMDoing;