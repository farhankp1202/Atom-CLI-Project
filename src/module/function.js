'use strict';

var a = '<ul><li>', b = '</li></ul>';

function time(option) {
  'use strict';
  let i = new Date(),
  h = i.getHours(),
  m = i.getMinutes(),
  s = i.getSeconds(),
  ms = i.getMilliseconds(),
  to = i.getTimezoneOffset();
   
  function hourModifier(x) {
    'use strict';
    x /= 10;
    let y = x.toString();
    return y.replace('.', '');
  }
  function timeZoneOffsetModifier(x) {
    'use strict';
    x /= -60;
    let y = x.toString();
    if(y.charAt(0) != '-') {
      return y.replace(y, '+'+y);
    } else {
      return x;
    }
  }
  switch(option) {
    case 'full_time':
      return '-- <br> > '+hourModifier(h)+':'+m+':'+s+':'+ms+' GMT'+timeZoneOffsetModifier(to);
      break;
    default:
      return console.log('no_switch_case_selected');
  }
}
function query(x, y) {
  'use strict';
  let a = x.split(' '),
  b = a.join(''),
  c = b.toLowerCase();
  if(c.includes('sys') == true) {
    return c.replace('sys', '')
  } else {
    return;
  }
}
function reload(x) {
  'use strict';
  return x.location.reload();
}
function help(x, y, t) {
  'use strict';
  y.push(t);
  for(let i = 0; i < y.length; i++) {
    x.innerHTML += a + y[i] + b;
  }
  return y.pop();
}
function clear(x) {
  'use strict';
  while(x.firstChild) {
    x.removeChild(x.firstChild);
  }
}
function error(type, x, i, y, t) {
  'use strict';
  let m = [];
  switch(type) {
    case 'error_input':
      m.unshift('error: input '+'"'+i+'" is undefined, '+y);
      m.push(t);
      return m.forEach((val) => {
        x.innerHTML += a + val + b;
      });
      break;
  }
}

export {
  time,
  query,
  reload,
  help,
  clear,
  error
};
