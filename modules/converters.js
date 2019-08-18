function timeFormat(time) {
    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    if (time >= 60 && time < 3600) {
        minutes = (time / 60).toFixed(0);
        seconds = time % 60;
    } else if (time >= 3600) {
        hours = (time / 3600).toFixed(0);
        var rest = time % 3600;

        if (rest >= 60) {
            minutes = (rest / 60).toFixed(0);
            seconds = rest % 60;
        } else {
            seconds = rest;
        }
    } else {
        seconds = time;
    }

    return hours + " hours, " + minutes + " minutes, " + seconds + " seconds"
}

exports.timeFormat = timeFormat;
