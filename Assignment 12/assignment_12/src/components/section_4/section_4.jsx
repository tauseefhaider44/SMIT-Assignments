import React from 'react'
import './section_4.css'
import home_1 from '../../assets/images/home_1.png'
import home_2 from '../../assets/images/home_2.png'
import box_overlay_pattern from '../../assets/images/box_overlay_pattern.png';
function Section4() {
    return (
        <>
            <div className="section4_Container">
                <div className="section4_Left">
                    <ul>
                        <li><img src={home_1} alt="" width={'300px'} /></li>
                        <li><img src={home_2} alt="" width={'300px'} /></li>
                    </ul>
                </div>
                <div className="section4_Right">
                    <h1>We Help People To Find Homes</h1>
                    <p>Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa consectetur. Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
                    <h4>Get In Touch</h4>
                </div>
                <div className="box_Pattern">
                    <img src={box_overlay_pattern} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section4;