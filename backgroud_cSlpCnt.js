// use a constant date (e.g. 2000-01-01) and the desired time to initialize two dates

var date1 = new Date(2000, 0, 1, 9, 0); // 9:00 AM
var date2 = new Date(2000, 0, 1, 17, 0); // 5:00 PM

// the following is to handle cases where the times are on the opposite side of
// midnight e.g. when you want to get the difference between 9:00 PM and 5:00 AM

if (date2 < date1) {
    date2.setDate(date2.getDate() + 1);
}

var diff = date2 - date1;

// 28800000 milliseconds (8 hours)

var msec = diff;
var hh = Math.floor(msec / 1000 / 60 / 60);
msec -= hh * 1000 * 60 * 60;
var mm = Math.floor(msec / 1000 / 60);
msec -= mm * 1000 * 60;
var ss = Math.floor(msec / 1000);
msec -= ss * 1000;
// diff = 28800000 => hh = 8, mm = 0, ss = 0, msec = 0

function parseTime(s) {
    var part = s.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
    var hh = parseInt(part[1], 10);
    var mm = parseInt(part[2], 10);
    var ap = part[3] ? part[3].toUpperCase() : null;
    if (ap === "AM") {
        if (hh == 12) {
            hh = 0;
        }
    }
    if (ap === "PM") {
        if (hh != 12) {
            hh += 12;
        }
    }
    return {
        hh: hh,
        mm: mm
    };
}
