'use strict'

const burger = document.querySelector('.burger');
const menuNav = document.querySelector('.menu__nav');
const menuLink = [...document.querySelectorAll('.menu__link')];

// func, that subscribe on eventListener 
// when you delete element, you dont delete eventlistener
// 
const burgerSubscribe = () => {
  burger.addEventListener('click', menuSwitch)
}

export default burgerSubscribe();