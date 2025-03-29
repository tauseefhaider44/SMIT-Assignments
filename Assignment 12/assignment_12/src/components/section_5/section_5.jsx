import React from 'react'
import './section_5.css'
import curve_line_pattern from '../../assets/images/curve_line_pattern.png';

function Section5() {
    return (
        <>
            <div className="section5_Container">
                <div className="section5_Left">
                    <h1>Let's Simply Begin With Rentiz.</h1>
                </div>
                <div className="section5_Right">
                    <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
                    <h4>Get Started</h4>
                </div>
                <div className="curve_Pattern">
                    <img src={curve_line_pattern} alt="" width={'150px'}/>
                </div>
            </div>
        </>
    )
}

export default Section5;