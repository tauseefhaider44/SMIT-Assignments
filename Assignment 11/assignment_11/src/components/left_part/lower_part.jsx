import React from 'react'
import './lower_part.css'
import mail_icon from '../../assets/icons/mail_icon.svg'
import birthday_icon from '../../assets/icons/birthday_icon.svg'
import location_icon from '../../assets/icons/location_icon.svg'
import phone_icon from '../../assets/icons/phone_icon.svg'

function LowerPart() {
    return (
        <>
            <div className="lower_Part">
                <ul>
                    <li>
                        <div className="left">
                            <img src={mail_icon} alt="" />
                        </div>
                        <div className="right">
                            <ul>
                                <li>EMAIL</li>
                                <li>richard@example.com</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src={phone_icon} alt="" />
                        </div>
                        <div className="right">
                            <ul>
                                <li>PHONE</li>
                                <li>+1 (213) 352-2795</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src={birthday_icon} alt="" />
                        </div>
                        <div className="right">
                            <ul>
                                <li>BIRTHDAY</li>
                                <li>June 23, 1982</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src={location_icon} alt="" />
                        </div>
                        <div className="right">
                            <ul>
                                <li>LOCATION</li>
                                <li>Sacramento California, USA</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LowerPart;