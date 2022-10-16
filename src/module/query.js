'use strict';

const rs = {
  history: [],
  error: {
    inputError: 'please use key [ctrl + h] or type "sys help" for help.',
    ifOffline: 'your device has lost internet connection, please check your internet connection and reload this page.'
  },
  help: [
    '[] basic commands',
    'use [key[ctrl+h]/"sys help"] > help',
    'use [key[ctrl+shift+c]/"sys clear"] > clear response',
    '[] date and time',
    'today: sys -today > (day, dd:mm:yyyy hh:mm:ss:ms timezone_offset)',
    'date: sys [-d/--date] > (day, dd:mm:yyyy)',
    'time: sys [-t/--time] > (hh:mm:ss:ms, timezone_offset)',
    'day: sys [-d/--date] -day > (day)',
    'date: sys [-d/--date] -date > (dd)',
    'month: sys [-d/--date] -month > (mm)',
    'year: sys [-d/--date] -year > (yyyy)',
    'hour: sys [-t/--time] -hour > (hh)',
    'minute: sys [-t/--time] -minute > (mm)',
    'second: sys [-t/--time] -second > (ss)',
    'milisecond: sys [-t/--time] -milisecond > (ms)',
    'timezone: sys [-t/--time] -timezone > (timezone_offset)'
  ]
}

export {rs};
