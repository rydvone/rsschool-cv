'use strict'

// const burger = document.querySelector('.burger');wrapper-burger
const wrapperBurger = document.querySelector('.wrapper-burger');
// const burgerLine = [...document.querySelectorAll('.burger__line')];
const menuNav = document.querySelector('.menu__nav');
const menuLink = [...document.querySelectorAll('.menu__link')];


const menuSwitch = () => {
  wrapperBurger.classList.toggle('open');
  menuNav.classList.toggle('open');
  console.log('burgerSub is click');
}
// func, that subscribe on eventListener 
// when you delete element, you dont delete eventlistener
const burgerSubscribe = () => {
  // how burger button respond on 'click' or other action --> 
  // it will call func menuSwitch
  wrapperBurger.addEventListener('click', menuSwitch);
  menuLink.forEach((el) => el.addEventListener('click', menuSwitch));

  
  
  
  
  
  document.addEventListener('click', function(e) {
    // if(e.target.className != 'menu__nav' || e.target.className != 'menu__list open' || e.target.className != 'burger' ) {
      if(e.target.className != 'menu__nav open') {
      // menuSwitch();
        console.log(e.target);
     }
  });
  




}

export default burgerSubscribe;