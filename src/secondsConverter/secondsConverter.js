const convertSeconds = (totalSeconds, format) => {

    const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    const totalHours = parseInt(Math.floor(totalMinutes / 60));

    const seconds = parseInt(totalSeconds % 60);
    const minutes = parseInt(totalMinutes % 60);
    const hours = parseInt(totalHours % 24);

    switch (format) {
        case 's':
            return seconds < 10 ? "0" + seconds : seconds;
        case 'm':
            return minutes < 10 ? "0" + minutes : minutes;
        case 'h':
            return hours < 10 ? "0" + hours : hours;
    }
};

export default convertSeconds;
