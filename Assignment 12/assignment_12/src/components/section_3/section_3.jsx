import React from 'react'
import './section_3.css'
import why_1 from '../../assets/images/why_1.png'
import why_2 from '../../assets/images/why_2.png'
import why_3 from '../../assets/images/why_3.png'
import vector_l from '../../assets/images/vector_l.png'
import vector_r from '../../assets/images/vector_r.png'
import comma from '../../assets/images/comma.png'
import arrow_shade_pattern from '../../assets/images/arrow_shade_pattern.png'
function Section3() {
    return (
        <>
            <div className="section3_Container">
                <div className="section3_Upper">
                    <h1>Why To Choose Us</h1>
                    <div className="why_Cards_Box">
                        <div className="why_Card">
                            <img src={why_1} alt="" width={'50px'} />
                            <h3>Easy to Find</h3>
                            <p>Urna, massa aliqua dui pellentesque. Ac,gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</p>
                        </div>
                        <div className="why_Card">
                            <img src={why_2} alt="" width={'50px'} />
                            <h3>Affordable Prices</h3>
                            <p>Urna, massa aliqua dui pellentesque. Ac,gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</p>
                        </div>
                        <div className="why_Card">
                            <img src={why_3} alt="" width={'50px'} />
                            <h3>Quickly Processe</h3>
                            <p>Urna, massa aliqua dui pellentesque. Ac,gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</p>
                        </div>
                    </div>
                </div>
                <div className="section3_Lower">
                    <img src={comma} alt="" width={'100px'}/>
                    <p>Massa Semper Non Rutrum Orci Facilisi Sit. Lectus Porta Quam A Fringilla Eget Viverra Sem. Vulputate Massa Hendrerit Turpis Gravida Tempor, Porttitor.</p>
                    <div className="section3_Lower_Bottom">
                        <div className="section3_Bottom_Left">
                            <ul>
                                <li><h4>Elena Pravo</h4></li>
                                <li>Ceo, Upstate</li>
                            </ul>
                        </div>
                        <div className="section3_Bottom_Right">
                            <ul>
                                <li><img src={vector_l} alt="" /></li>
                                <li><img src={vector_r} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="arrow_Container">
                    <img src={arrow_shade_pattern} alt="" />
                </div>
            </div>
        </>

    )
}

export default Section3;