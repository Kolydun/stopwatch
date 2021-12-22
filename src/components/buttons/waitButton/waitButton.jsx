import React from "react";
import {useState} from "react";

import './waitButton.css';

const WaitButton = ({onWaitClick}) => {
    const [prevClickTime, setPrevClickTime] = useState('');

    const clickTimeAdd = () => {
        setPrevClickTime(new Date().getTime());
        clickTimeCompare();
    };

    const clickTimeCompare = () => {
        const currentTimeOfClick = new Date().getTime();
        const diffBetweenTwoClicks = currentTimeOfClick - prevClickTime;
        diffBetweenTwoClicks <= 300 && onWaitClick();
    };

    return (
        <>
            <div className="wait-button__container" onClick={clickTimeAdd}>
                <p className="wait-button__text">Wait</p>
            </div>
        </>
    );
};

export default WaitButton;
