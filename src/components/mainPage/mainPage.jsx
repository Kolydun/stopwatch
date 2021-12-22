import React from "react";
import {useState, useEffect} from "react";
import {Observable} from "rxjs";
import StopwatchControls from "../stopwatchControls/stopwatchControls";

const MainPage = () => {
    const [time, setTime] = useState(0)
    const [stopwatchState, setStopwatchState] = useState("stop");

    const onStartClick = () => {
        if (stopwatchState === "stop" || stopwatchState === "wait") {
            setStopwatchState("start");
        } else if (stopwatchState === "start") {
            setStopwatchState("stop");
            setTime(0)
        } else if (stopwatchState === "wait") {
            setStopwatchState("stop");
        }
    };

    const onResetClick = () => {
        if (stopwatchState === "start") {
            setTime(0)
        } else if (stopwatchState === "wait") {
            setTime(0);
            setStopwatchState("start");
        }
    };

    const onWaitClick = () => {
        stopwatchState !== ("wait" || "stop") && setStopwatchState("wait");
    }

    useEffect(() => {
        const timer$ = new Observable((observer) => {
            let count = 0;
            const intervalId = setInterval(() => {
                observer.next(count += 1);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        });

        const subscribtion$ = timer$
            .subscribe({
                next: () => {
                    if (stopwatchState === 'start') {
                        setTime((prev) => prev + 1);
                    }
                },
            });

        return (() => {
            subscribtion$.unsubscribe();
        });
    }, [stopwatchState]);

    return (
        <>
            <StopwatchControls
                time={time}
                onStartClick={onStartClick}
                onResetClick={onResetClick}
                stopwatchState={stopwatchState}
                onWaitClick={onWaitClick}
            />
        </>
    );
};

export default MainPage;
