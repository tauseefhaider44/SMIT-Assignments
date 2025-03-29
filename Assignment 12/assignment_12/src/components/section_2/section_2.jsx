import React from 'react'
import './section_2.css'
import residence_1 from '../../assets/images/residence_1.png'
import residence_2 from '../../assets/images/residence_2.png'
import residence_3 from '../../assets/images/residence_3.png'
import arrow_left from '../../assets/images/arrow_left.png'
import arrow_right from '../../assets/images/arrow_right.png'
function Section2() {
    return (
        <>
            <div className="section2_Container">
                <h1>Popular Residence</h1>
                <ul>
                    <li><img src={arrow_left} alt="" width={'70px'}/></li>
                    <li><img src={residence_1} alt="" width={'410px'} /></li>
                    <li><img src={residence_2} alt="" width={'410px'} /></li>
                    <li><img src={residence_3} alt="" width={'410px'} /></li>
                    <li><img src={arrow_right} alt="" width={'70px'}/></li>
                </ul>
                <h4>View All Properties</h4>
            </div>
        </>
    )
}

export default Section2;