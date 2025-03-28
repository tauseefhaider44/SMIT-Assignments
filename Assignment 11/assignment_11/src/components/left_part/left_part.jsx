import React from 'react';
import './left_part.css';
import LowerPart from './lower_part';
import LowerLogos from './lower_logos';
import MiddleLine from './middle_line';
import UpperPart from './upper_part';

function LeftPart() {
    return (
        <>
            <div className="left_Container">
                <UpperPart />
                <MiddleLine />
                <LowerPart />
                <LowerLogos />
            </div>
        </>
    );
}

export default LeftPart;