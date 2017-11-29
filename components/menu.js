'use strict';

function Menu(el, data = []){
        this.el = el;
        this.data = data;
        
          /**
         * Form HTML
         */
        this.render = function(){
          el.innerHTML = `
            <div class = "menu">
              <span class = "menu__name">Сладости (нажми меня)!</span>
              <ul>
              </ul>
            </div>
            `;
            
            /**
           * Add items in menu 
           */
          for(let listItem of data){
            
            let liTag = document.createElement('li');
          
            liTag.innerHTML = listItem;
            el.querySelector('ul').append(liTag);
          }
        };
         
        this.render();
       
        let elem = document.querySelector('.menu__name');
      
        let showFunc = function(){
          document.querySelector('ul').classList.toggle('open');
          document.querySelector('.menu__name').classList.toggle('open');
        };
      
        elem.addEventListener('click', showFunc);
}