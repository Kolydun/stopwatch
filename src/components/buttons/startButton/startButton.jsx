import React from "react";

import './startButon.css';

const StartButton = ({onStartClick, stopwatchState}) => {
    return (
        <>
            <div className="start-button__container" onClick={onStartClick}>
                <p className="start-button__text">
                    {stopwatchState === "stop" && "Start"}
                    {stopwatchState === "start" && "Stop"}
                    {stopwatchState === "wait" && "Start"}
                </p>
            </div>
        </>
    );
};

export default StartButton;
