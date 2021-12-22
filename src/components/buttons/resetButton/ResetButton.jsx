import React from "react";

import './ResetButton.css';

const ResetButton = ({onResetClick}) => {
    return (
        <>
            <div className="reset-button__container" onClick={onResetClick}>
                <p className="reset-button__text">Reset</p>
            </div>
        </>
    );
};

export default ResetButton;
