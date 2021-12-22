import React from "react";

import './waitButton.css';

const WaitButton = ({onWaitClick}) => {
    return (
        <>
            <div className="wait-button__container" onClick={onWaitClick}>
                <p className="wait-button__text">Wait</p>
            </div>
        </>
    );
};

export default WaitButton;
