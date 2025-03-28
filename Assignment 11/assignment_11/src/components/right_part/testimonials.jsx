import React from 'react'
import './testimonials.css'
import avatar_1 from '../../assets/images/avatar-1.png'
import avatar_2 from '../../assets/images/avatar-2.png'
import avatar_3 from '../../assets/images/avatar-3.png'
import avatar_4 from '../../assets/images/avatar-4.png'

function Testimonials() {
    return (
        <>
            <div className="test_Container">
                <h1>Testimonials</h1>
                <div className="test_Cards_Box">
                    <div className="test_Card">
                        <div className="test_Left">
                            <img src={avatar_1} alt="" />
                        </div>
                        <div className="test_Right">
                            <h3>Daniel lewis</h3>
                            <p>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt dolore magnarels alia.</p>
                        </div>
                    </div>
                    <div className="test_Card">
                        <div className="test_Left">
                            <img src={avatar_2} alt="" />
                        </div>
                        <div className="test_Right">
                            <h3>Jessica miller</h3>
                            <p>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia..</p>
                        </div>
                    </div>
                    <div className="test_Card">
                        <div className="test_Left">
                            <img src={avatar_3} alt="" />
                        </div>
                        <div className="test_Right">
                            <h3>Emily evans</h3>
                            <p>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt dolore magnarels alia.</p>
                        </div>
                    </div>
                    <div className="test_Card">
                        <div className="test_Left">
                            <img src={avatar_4} alt="" />
                        </div>
                        <div className="test_Right">
                            <h3>Henry william</h3>
                            <p>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt dolore magnarels alia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;