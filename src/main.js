'use strict';

import {rs} from './module/query.js';
import * as fn from './module/function.js';

window.addEventListener('load', () => {
  'use strict';
  let inp = document.querySelector('#input'),
  res = document.querySelector('#response'),
  el = ['label', 'input'];
  el.forEach((val) => {
    inp.appendChild(
      document.createElement(val)
    )
  });
  inp.children[0].appendChild(
    document.createTextNode('@')
  );
  let atr = ['type', 'spellcheck', 'autocomplete', 'autocapitalize'],
  val = ['text', 'false', 'off', 'off'];

  for(let i = 0; i < atr.length; i++) {
    inp.children[1].setAttribute(
      atr[i],
      val[i]
    )
  }
  inp.children[1].addEventListener(
    'keydown', (key) => {
      'use strict';
      key = event.key;
      if(key == 'Enter') {
        response();
        console.log('@ '+inp.children[1].value)
        return inp.children[1].value = '';
      } else {return}
    }
  );
  function response() {
    'use strict';
    let a = inp.children[1].value,
    b = document.querySelector('#response'),
    c = fn.query(a);

    switch(c) {
      case 'reload':
        return fn.reload(window);
        break;
      case 'help':
        return fn.help(b, rs.help, fn.time('full_time'));
        break;
      case 'clear':
        return fn.clear(b);
        break;
      default:
        return fn.error('error_input', b, a, rs.error.inputError, fn.time('full_time'));
      }
   }
})
