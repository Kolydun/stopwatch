import React from "react";
import {useState, useMemo, useEffect} from "react";
import {Observable, Subject} from 'rxjs';
import {
    map,
    buffer,
    debounceTime,
    filter,
    takeUntil,
} from 'rxjs/operators';
import StopwatchControls from "../stopwatchControls/stopwatchControls";

import './mainPage.css';

const MainPage = () => {
    const [time, setTime] = useState(0)
    const [stopwatchState, setStopwatchState] = useState("stop");

    const click$ = useMemo(() => new Subject(), []);

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
        stopwatchState === "start" && setTime(0);
    };

    const onWaitClick = () => {

        click$.next();
        stopwatchState !== ("wait" || "stop") && setStopwatchState("wait");
        click$.next();
    }

    useEffect(() => {
        const doubleClick$ = click$.pipe(
            buffer(click$.pipe(debounceTime(300))),
            map((list) => list.length),
            filter((value) => value >= 2),
        );

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
            .pipe(takeUntil(doubleClick$))
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
