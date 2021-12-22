import React from "react";
import convertSeconds from "../../secondsConverter/secondsConverter";

import './stopwatchDisplay.css';

const StopwatchDisplay = ({time}) => {
    return (
        <>
            <p className="stopwatch-display__time">
                {
                    convertSeconds(time, 'h')
                    + ":"
                    + convertSeconds(time, 'm')
                    + ":"
                    + convertSeconds(time, 's')}
            </p>
        </>
    );
};

export default StopwatchDisplay;
