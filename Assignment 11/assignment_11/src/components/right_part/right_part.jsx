import React from 'react'
import './right_part.css'
import Navbar from './navbar'
import AboutMe from './about_me'
import WhatIMDoing from './what_i_m_doing'
import Testimonials from './testimonials'
import Clients from './clients'
function RightPart() {
    return (
        <>
            <div className="right_Container">
                <Navbar />
                <AboutMe />
                <WhatIMDoing />
                <Testimonials />
                <Clients />
            </div>
        </>
    )
}

export default RightPart;