import React from "react";
import StartButton from "../buttons/startButton/startButton";
import ResetButton from "../buttons/resetButton/ResetButton";
import WaitButton from "../buttons/waitButton/waitButton";
import StopwatchDisplay from "../stopwatchDisplay/stopwatchDisplay";

import './stopwatchControls.css';

const StopwatchControls = ({time, onStartClick, onResetClick, stopwatchState, onWaitClick}) => {
    return (
        <>
            <div className="stopwatch-controls__container">
                <div className="stopwatch-controls__display-container">
                    <StopwatchDisplay time={time}/>
                </div>
                <div className="stopwatch-controls__buttons-container">
                    <StartButton onStartClick={onStartClick} stopwatchState={stopwatchState}/>
                    <WaitButton onWaitClick={onWaitClick}/>
                    <ResetButton onResetClick={onResetClick}/>
                </div>
            </div>
        </>
    );
};

export default StopwatchControls;
