'use strict';

class Menu{
  constructor(el, data = []){
        this.el = el;
        this.data = data;
  }      
          /**
         * Form HTML
         */
        render(){
          this.el.innerHTML = `
            <div class = "menu">
              <span class = "menu__name">menuTitle (click on me)!</span>
              <ul>
              </ul>
            </div>
            `;
            
            /**
           * Add items in menu 
           */
          for(let listItem of this.data){
            
            let liTag = document.createElement('li');
          
            liTag.innerHTML = listItem;
            this.el.querySelector('ul').append(liTag);
          }
        }    
}