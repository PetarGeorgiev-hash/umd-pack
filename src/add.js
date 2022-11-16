// src/add.js
const date = require("date-and-time");
// const TimeNdate = {
//     isLeapYears: function (year) {
//         return date.isLeapYear(year);
//     },
// };
const dateAndTime = {
    isLeapOrNot: function (year) {
        return date.isLeapYear(year);
    },
    isTheSameDay: function (date1, date2) {
        return date.isSameDay(date1, date2);
    },

    subtractDate: function (date1, date2) {
        return date.subtract(date1, date2);
    },
};

module.exports = dateAndTime;
