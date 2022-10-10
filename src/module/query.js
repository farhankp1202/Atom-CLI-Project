'use strict';

const response = {
   history: [],
   error: [
      '> error: please use key ctrl + h or type "help" for help.'
   ],
   help: [
      '[] basic commands',
      'use [key[ctrl+h]/help] > help',
      'use [key[ctrl+shift+c]/clear] > clear response',
      '[] date and time',
      'today: ctrl -today > (day, dd:mm:yyyy hh:mm:ss:ms timezone_offset)',
      'date: ctrl [-d/--date] > (day, dd:mm:yyyy)',
      'time: ctrl [-t/--time] > (hh:mm:ss:ms, timezone_offset)',
      'day: ctrl [-d/--date] -day > (day)',
      'date: ctrl [-d/--date] -date > (dd)',
      'month: ctrl [-d/--date] -month > (mm)',
      'year: ctrl [-d/--date] -year > (yyyy)',
      'hour: ctrl [-t/--time] -hour > (hh)',
      'minute: ctrl [-t/--time] -minute > (mm)',
      'second: ctrl [-t/--time] -second > (ss)',
      'milisecond: ctrl [-t/--time] -milisecond > (ms)',
      'timezone: ctrl [-t/--time] -timezone > (timezone_offset)'
   ]
}
export default response;
