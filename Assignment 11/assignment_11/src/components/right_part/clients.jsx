import React from 'react'
import './clients.css'
import logo_1_color from '../../assets/images/logo-1-color.png';
import logo_2_color from '../../assets/images/logo-2-color.png';
import logo_3_color from '../../assets/images/logo-3-color.png';
import logo_4_color from '../../assets/images/logo-4-color.png';
import logo_5_color from '../../assets/images/logo-5-color.png';
import logo_6_color from '../../assets/images/logo-6-color.png';

function Clients() {
    return (
        <>
            <div className="client_Container">
                <h1>Clients</h1>
                <ul>
                    <li><img src={logo_1_color} alt="" /></li>
                    <li><img src={logo_2_color} alt="" /></li>
                    <li><img src={logo_3_color} alt="" /></li>
                    <li><img src={logo_4_color} alt="" /></li>
                    <li><img src={logo_5_color} alt="" /></li>
                    <li><img src={logo_6_color} alt="" /></li>
                </ul>
            </div>
        </>
    )
}

export default Clients;