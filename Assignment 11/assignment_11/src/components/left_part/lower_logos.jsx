import React from 'react'
import './lower_logos.css'
import facebook_icon from '../../assets/icons/facebook_icon.svg'
import twitter_icon from '../../assets/icons/twitter_icon.svg'
import instagram_icon from '../../assets/icons/instagram_icon.svg'

function LowerLogos() {
    return (
        <>
            <div className="lower_Logos">
                <ul>
                    <li><img src={facebook_icon} alt="facebook_icon" width={'24px'} /></li>
                    <li><img src={twitter_icon} alt="twitter_icon" width={'24px'}/></li>
                    <li><img src={instagram_icon} alt="instagram_icon" width={'24px'}/></li>
                </ul>
            </div>
        </>
    )
}

export default LowerLogos;