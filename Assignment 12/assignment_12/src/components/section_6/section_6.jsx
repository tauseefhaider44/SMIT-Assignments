import React from 'react'
import './section_6.css'
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';

function Section6() {
    return (
        <>
            <div className="section6_Container">
                <div className="section6_Left">
                    <div className="section6_Logo">
                        <img src={logo} alt="" width={'100px'} />
                    </div>
                    <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
                    <ul>
                        <li><img src={facebook} alt="" /></li>
                        <li><img src={instagram} alt="" /></li>
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={youtube} alt="" /></li>
                    </ul>
                </div>
                <div className="section6_Right">
                    <ul>
                        <li>
                            <ul>
                                <li>Project</li>
                                <li>Houses</li>
                                <li>Rooms</li>
                                <li>Flats</li>
                                <li>Appartments</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Company</li>
                                <li>How we work ?</li>
                                <li>Capital</li>
                                <li>Security</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Movement</li>
                                <li>Who are we ?</li>
                                <li>Support Us</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Help</li>
                                <li>Privacy</li>
                                <li>Condition</li>
                                <li>Blog</li>
                                <li>FAQs</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Section6;