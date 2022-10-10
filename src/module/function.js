'use strict';

var a = '<ul><li>', b = '</li></ul>';

function time(option) {
   let i = new Date(),
   h = i.getHours(),
   m = i.getMinutes(),
   s = i.getSeconds(),
   ms = i.getMilliseconds(),
   to = i.getTimezoneOffset();
   
   function hourModifier(x) {
      x /= 10;
      let y = x.toString();
      return y.replace('.', '');
   }
   function timeZoneOffsetModifier(x) {
      x /= -60;
      let y = x.toString();
      if(y.charAt(0) != '-') {
         return y.replace(y, '+'+y);
      } else {
         return x;
      }
   }
   
   if(option == 'full_time') {
      return '-- <br> time: '+hourModifier(h)+':'+m+':'+s+':'+ms+' GMT'+timeZoneOffsetModifier(to);
   }
}

function query(x) {
   'use strict';
   let a = x.split(' '),
   b = a.join(''),
   c = b.toLowerCase();
   return c.replace('ctrl', '');
}
function reload(x) {
   return x.location.reload();
}
function help(t, x, y) {
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
function error(t, x, y, z) {
   'use strict';
   y.unshift('input: '+"'"+z+"':");
   y.push(t);
   for(let i = 0; i < y.length; i++) {
      x.innerHTML += a + y[i] + b;
   }
   y.shift();
   return y.pop();
}

export {
   time,
   query,
   reload,
   help,
   clear,
   error
};
