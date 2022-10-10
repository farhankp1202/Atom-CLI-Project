'use strict';

import * as func from './module/configs.js';

window.addEventListener('load', (inp, res) => {
   'use strict';
   inp = document.querySelector('#input');
   res = document.querySelector('#response');
   let el = ['label', 'input'];
   el.forEach((val) => {
      inp.appendChild(
         document.createElement(val)
      )
   });
   inp.children[0].appendChild(
      document.createTextNode('@')
   );
   let atr = ['type', 'spellcheck', 'autocomplete', 'autocapitalize'];
   let val = ['text', 'false', 'off', 'off'];
   
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
      let que = inp.children[1].value,
      res = document.querySelector('#response'),
      rst = func.que.query(que);
      
      switch (que) {
         case 'reload':
            return func.que.reload(document);
            break;
         case 'help':
            return func.que.help(
               func.que.time('full_time'),
               res, 
               func.response.help);
            break;
         case 'clear':
            return func.que.clear(res);
            break;
         default:
            return func.que.error(
               func.que.time('full_time'),
               res, func.response.error,
               inp.children[1].value
            );
            break;
      }
   }
})
