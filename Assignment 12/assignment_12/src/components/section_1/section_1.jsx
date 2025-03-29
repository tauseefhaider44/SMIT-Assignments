import React from 'react'
import './section_1.css'
import house from '../../assets/images/house.jpg'
import feature_1 from '../../assets/images/feature_1.png'
import feature_2 from '../../assets/images/feature_2.png'
import feature_3 from '../../assets/images/feature_3.png'
import feature_4 from '../../assets/images/feature_4.png'
import feature_5 from '../../assets/images/feature_5.png'
import side_green_arrow from '../../assets/images/side_green_arrow.png'
function Section1() {
    return (
        <>
            <div className="section1_Container">
                <div className="section1_Upper">
                    <div className="section1_Left">
                        <h1>Perfect Way To Buy And Sell A Home</h1>
                        <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.</p>
                        <div className="house_Props">
                            <ul>
                                <li>
                                    <p>Purpose</p>
                                    <h4>Buy</h4>
                                </li>
                                <li>
                                    <p>Location</p>
                                    <h4>Toronto, Canada</h4>
                                </li>
                                <li>
                                    <p>Type</p>
                                    <h4>Industrial Home</h4>
                                </li>
                                <li>
                                    <div>Search</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="section1_Right">
                        <img src={house} alt="house" width={'700px'} />
                    </div>
                </div>
                <div className="section1_Lower">
                    <h1>Featured In</h1>
                    <ul>
                        <li><img src={feature_1} alt="" /></li>
                        <li><img src={feature_2} alt="" /></li>
                        <li><img src={feature_3} alt="" /></li>
                        <li><img src={feature_4} alt="" /></li>
                        <li><img src={feature_5} alt="" /></li>
                    </ul>
                </div>
                <div className="side_Arrow">
                    <img src={side_green_arrow} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section1;