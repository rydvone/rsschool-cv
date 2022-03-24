'use strict'

const burger = document.querySelector('.burger');
const burgerLine = [...document.querySelectorAll('.burger__line')];
const menuNav = document.querySelector('.menu__nav');
const menuLink = [...document.querySelectorAll('.menu__link')];



const menuSwitch = () => {
  burgerLine.forEach((el) => el.classList.toggle('open'));
  menuNav.classList.toggle('open');
  console.log('burgerSub is click');
}
// func, that subscribe on eventListener 
// when you delete element, you dont delete eventlistener
const burgerSubscribe = () => {
  // how burger button respond on 'click' or other action --> 
  // it will call func menuSwitch
  burger.addEventListener('click', menuSwitch);
  menuLink.forEach((el) => el.addEventListener('click', menuSwitch))
}

export default burgerSubscribe;