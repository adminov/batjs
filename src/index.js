'use strict';
import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import animateScroll from "./modules/animateScroll";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import ourTeam from "./modules/ourTeam";
import checkCalcBlock from "./modules/checkCalcBlock";
import calc from "./modules/calc";
import validateInputs from "./modules/validateInputs";
import sendForm from "./modules/sendForm";
//timer
countTimer('15 october 2021');
//меню
toggleMenu();
//popup
togglePopup();
// анимация для скролла
animateScroll();
//табы
tabs();
// слайдер
slider();
//Наша команда фото
ourTeam();
//проверка на цифр в блоке калькулятор
checkCalcBlock();
//калькулятор
calc();
// Валидация контактных данных
validateInputs();
//send-ajax-form
sendForm();