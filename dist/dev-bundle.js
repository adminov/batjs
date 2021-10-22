/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_animateScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animateScroll */ \"./src/modules/animateScroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_ourTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ourTeam */ \"./src/modules/ourTeam.js\");\n/* harmony import */ var _modules_checkCalcBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/checkCalcBlock */ \"./src/modules/checkCalcBlock.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_validateInputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validateInputs */ \"./src/modules/validateInputs.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n //timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 october 2021'); //меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // анимация для скролла\n\n(0,_modules_animateScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //Наша команда фото\n\n(0,_modules_ourTeam__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); //проверка на цифр в блоке калькулятор\n\n(0,_modules_checkCalcBlock__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); //калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(); // Валидация контактных данных\n\n(0,_modules_validateInputs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://3dm/./src/index.js?");

/***/ }),

/***/ "./src/modules/animateScroll.js":
/*!**************************************!*\
  !*** ./src/modules/animateScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar animateScroll = function animateScroll() {\n  var liClick = function liClick(event) {\n    event.preventDefault();\n    var targetId = event.currentTarget.getAttribute('href');\n    if (targetId === '#close') return;\n    window.scrollTo({\n      top: document.querySelector(targetId).offsetTop,\n      behavior: 'smooth'\n    });\n  };\n\n  var menuA = document.querySelectorAll('menu a'),\n      mainA = document.querySelector('main a');\n  mainA.addEventListener('click', liClick);\n  menuA.forEach(function (elem) {\n    elem.addEventListener('click', liClick);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animateScroll);\n\n//# sourceURL=webpack://3dm/./src/modules/animateScroll.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n  var total = 0;\n  var timeout;\n\n  var countSum = function countSum() {\n    var countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    total = Math.floor(total);\n  };\n\n  var animateTotal = function animateTotal() {\n    var target = total;\n    var count = +totalValue.textContent;\n    var speed = 200;\n    var inc = target / speed;\n\n    if (count < target) {\n      totalValue.textContent = Math.floor(count + inc);\n      timeout = setTimeout(animateTotal, 5);\n    } else {\n      totalValue.textContent = target;\n      clearTimeout(timeout);\n    }\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n      animateTotal();\n    }\n  });\n  calcType.addEventListener('change', function () {\n    total = 0;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dm/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/checkCalcBlock.js":
/*!***************************************!*\
  !*** ./src/modules/checkCalcBlock.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar checkCalcBlock = function checkCalcBlock() {\n  var calcBlock = document.querySelector('.calc-block');\n  var input = calcBlock.querySelectorAll('input');\n  input.forEach(function (item) {\n    item.addEventListener('blur', function (event) {\n      if (event.target.type === 'text') {\n        event.target.value = event.target.value.replace(/\\D/g, '');\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkCalcBlock);\n\n//# sourceURL=webpack://3dm/./src/modules/checkCalcBlock.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadLine) {\n  var timerHour = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadLine).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        second = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60); //let day = Math.floor(timeRemaining / 60 / 60 /24);\n\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      second: second\n    };\n  }\n\n  var interval;\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timerHour.textContent = ('0' + timer.hours).slice(-2);\n      timerMinutes.textContent = ('0' + timer.minutes).slice(-2);\n      timerSeconds.textContent = ('0' + timer.second).slice(-2);\n    } else {\n      clearInterval(interval);\n      timerHour.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  updateClock();\n  interval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dm/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/ourTeam.js":
/*!********************************!*\
  !*** ./src/modules/ourTeam.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ourTeam = function ourTeam() {\n  var commandPhoto = document.querySelectorAll('.container')[7];\n  var img = commandPhoto.querySelectorAll('img');\n\n  var changingPhotos = function changingPhotos(event) {\n    var target = event.target;\n\n    if (target.classList.contains('command__photo')) {\n      var lastSrc = target.src;\n      target.src = target.dataset.img;\n      target.dataset.img = lastSrc;\n    }\n  };\n\n  img.forEach(function (item) {\n    item.addEventListener('mouseover', changingPhotos);\n    item.addEventListener('mouseout', changingPhotos);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourTeam);\n\n//# sourceURL=webpack://3dm/./src/modules/ourTeam.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скокро с вами свяжемся!',\n      errorImg = './images/wait/error.png',\n      loadImg = './images/wait/wait.gif',\n      successImg = './images/wait/success.png'; //чистка инпутов после отправки данных\n\n  var clearInput = function clearInput(idForm) {\n    var form = document.getElementById(idForm);\n\n    _toConsumableArray(form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    }).forEach(function (item) {\n      return item.value = '';\n    });\n  };\n\n  var removeDivSuccessError = function removeDivSuccessError() {\n    var successError = document.querySelector('.successError');\n    setTimeout(function () {\n      successError.remove();\n      document.querySelector('.popup').style.display = 'none';\n    }, 2000);\n  };\n\n  var processingForm = function processingForm(idForm) {\n    var form = document.getElementById(idForm);\n    var statusMessage = document.createElement('div');\n    var img = document.createElement('img');\n    statusMessage.className = 'successError';\n    statusMessage.style.cssText = 'font-size: 2rem; color: #fff';\n    img.height = 50;\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n\n      if (body.user_name === '' || body.user_email === '' || body.user_phone === '' || body.user_message === '') {\n        alert('Write correct data');\n      } else {\n        statusMessage.textContent = loadMessage;\n        img.src = loadImg;\n        statusMessage.insertBefore(img, statusMessage.firstChild);\n        form.appendChild(statusMessage);\n        postData(body).then(function () {\n          statusMessage.textContent = successMessage;\n          img.src = successImg;\n          statusMessage.insertBefore(img, statusMessage.firstChild);\n          clearInput(idForm);\n          removeDivSuccessError();\n        })[\"catch\"](function (error) {\n          statusMessage.textContent = errorMessage;\n          img.src = errorImg;\n          statusMessage.insertBefore(img, statusMessage.firstChild);\n          clearInput(idForm);\n          removeDivSuccessError();\n          console.error(error);\n        });\n      }\n    });\n  };\n\n  processingForm('form1');\n  processingForm('form2');\n  processingForm('form3');\n\n  var postData = function postData(body) {\n    return new Promise(function (resolve, reject) {\n      var request = new XMLHttpRequest();\n      request.addEventListener(\"readystatechange\", function () {\n        if (request.readyState !== 4) return;\n\n        if (request.status === 200) {\n          resolve();\n        } else {\n          reject(request.status);\n        }\n      });\n      request.open('POST', './server.php');\n      request.setRequestHeader('Content-Type', 'application/json');\n      request.send(JSON.stringify(body));\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dm/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.portfolio-content'),\n      slide = document.querySelectorAll('.portfolio-item'),\n      portfolioDots = document.querySelector('.portfolio-dots'); //ищем длину слайдера исходя этого добавляем точки\n\n  slide.forEach(function (elem) {\n    portfolioDots.innerHTML += \"<li class=\\\"dot\\\"></li>\";\n  }); //добавляем еще одну класс для точки только на индексу ноль\n\n  var dot = document.querySelectorAll('.dot');\n  dot[0].classList.add('dot-active'); //currentSlide-это счетчик для слайдера\n\n  var currentSlide = 0,\n      interval; //ф-я удаления активний класс через её параметрам получаем классы\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  }; //ф-я добавления активний класс через её параметрам получаем классы\n\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  }; //\n\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  }; // старт слайдер и указываем параметре время переключение между слайдерам и вызваем ф-ю autoPlaySlide\n\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time);\n  }; // остановляем метод setInterval при наведение мышки на точки и стрелки\n\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  }; // при клике на точки и на стрелки у слайдера меняются картинки\n\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target; // если есть такие классы то возвращаем return\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    } // вызываем ф-ю и передаем параметры классы\n\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  }); // при наведение мышки вызывается ф-я stopSlide\n\n  slider.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      stopSlide();\n    }\n  }); // при наведение мышки вызывается ф-я startSlide\n\n  slider.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dm/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n\n    ;\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dm/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      menu.classList.toggle('active-menu');\n    } else if (target.closest('.close-btn') || target.closest('a') || !target.closest('.active-menu')) {\n      menu.classList.remove('active-menu');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dm/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content'),\n      popupData = {\n    count: 150,\n    speed: 10,\n    start: 150,\n    end: 0\n  };\n\n  var showPopup = function showPopup() {\n    popupData.start > popupData.end ? popupData.count -= popupData.speed : popupData.count += popupData.speed;\n    popupContent.style.transform = \"translateX(\".concat(popupData.count, \"px)\");\n\n    if (popupData.start > popupData.end ? popupData.count > popupData.end : popupData.count < popupData.end) {\n      requestAnimationFrame(showPopup);\n    }\n  };\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      if (screen.width > 768) {\n        popupData.count = popupData.start;\n        popupContent.style.display = '';\n        requestAnimationFrame(showPopup);\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3dm/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validateInputs.js":
/*!***************************************!*\
  !*** ./src/modules/validateInputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateInputs = function validateInputs() {\n  var formName = document.querySelectorAll('[name=user_name]'),\n      formMessage = document.querySelectorAll('[name=user_message]'),\n      formEmail = document.querySelectorAll('[name=user_email]'),\n      formPhone = document.querySelectorAll('[name=user_phone]');\n\n  var trim = function trim(input) {\n    input.value = input.value.replace(/\\s+/g, ' ');\n    input.value = input.value.replace(/\\-+/g, '-');\n    var inputToExp = new RegExp(\"ReGeX\" + input.value + \"ReGeX\");\n\n    if (/^[/ /-]/.test(inputToExp)) {\n      input.value = input.value.replace(/^[/ /-]/, '');\n    }\n\n    if (/[/ /-]$/.test(inputToExp)) {\n      input.value = input.value.replace(/[/ /-]$/, '');\n    }\n  };\n\n  var capitalize = function capitalize(input) {\n    var inputValue = input.value;\n    return inputValue.split(' ').map(function (item) {\n      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();\n    }).join(' ');\n  };\n\n  var controlInputs = function controlInputs(input, exp) {\n    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Введите корректные данные';\n    if (input.value === '') return;\n\n    if (!input.value.match(exp)) {\n      alert(message);\n      input.value = '';\n    }\n  }; //--------------------------------------------------------------------------\n\n\n  formName.forEach(function (el) {\n    el.addEventListener('blur', function () {\n      trim(el);\n      el.value = capitalize(el);\n      controlInputs(el, /[а-яё]{2,}/gi);\n    });\n  });\n  formMessage.forEach(function (el) {\n    el.addEventListener('blur', function () {\n      controlInputs(el, /[а-яё^0-9\\.\\,\\:\\-\\!\\?]/gi); //controlInputs(el, /[^а-яё0-9\\.\\,\\:\\-\\!\\?]/gi);\n\n      trim(el);\n    });\n  });\n  formEmail.forEach(function (el) {\n    el.addEventListener('blur', function () {\n      controlInputs(el, /\\w+@\\w+\\.\\w{2,3}/g);\n      trim(el);\n    });\n  });\n  formPhone.forEach(function (el) {\n    el.addEventListener('blur', function () {\n      trim(el);\n      controlInputs(el, /^\\+?[78]([-()]*\\d){6,10}$/g);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInputs);\n\n//# sourceURL=webpack://3dm/./src/modules/validateInputs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;