const moment = require('moment');

function validateTimeFormat(timeStr) {
    return moment(timeStr, ['HH:mm', 'H:mm', 'HHmm'], true).isValid();
}

function parseTime(timeStr) {
    if (!validateTimeFormat(timeStr)) {
        throw new Error('Formato inválido. Use HH:mm, H:mm ou HHmm');
    }
    return moment(timeStr, ['HH:mm', 'H:mm', 'HHmm']);
}

function calculateHoursWorked(startTime, endTime, breakTime = '00:00') {
    let start = parseTime(startTime);
    let end = parseTime(endTime);
    let breakDuration = parseTime(breakTime);

    if (end.isBefore(start)) {
        end.add(1, 'day');
    }

    let totalHours = end.diff(start, 'hours', true);
    
    let breakHours = breakDuration.hours() + breakDuration.minutes() / 60;

    return totalHours - breakHours;
}

module.exports = calculateHoursWorked;
