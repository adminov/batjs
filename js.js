document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    //timer
    function countTimer(deadLine) {
        const timerHour = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                second = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            //let day = Math.floor(timeRemaining / 60 / 60 /24);
            return { timeRemaining, hours, minutes, second };
        }

        let interval;
        function updateClock() {
            const timer = getTimeRemaining();
            if (timer.timeRemaining > 0){
                timerHour.textContent = ('0' + timer.hours).slice(-2);
                timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
                timerSeconds.textContent = ('0' + timer.second).slice(-2);
            } else {
                clearInterval(interval);
                timerHour.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        updateClock();
        interval = setInterval(updateClock, 1000);
    }
    countTimer('03 october 2021');

    //menu
    function toggleMenu(){
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu);
        });
    }
    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content'),
            popupData = {
                count: 150,
                speed: 3,
                start: 150,
                end: 0
            };

        const showPopup = () => {
            popupData.start > popupData.end ?
                popupData.count -= popupData.speed :
                popupData.count += popupData.speed;
            popupContent.style.transform = `translateX(${popupData.count}px)`;

            if (popupData.start > popupData.end ?
                popupData.count > popupData.end :
                popupData.count < popupData.end){
                requestAnimationFrame(showPopup);
            }
        };

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 768) {
                    popupData.count = popupData.start;
                    requestAnimationFrame(showPopup);
                }
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopup();

    // анимация для скролла
    const animateScroll = () => {
        const liClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            window.scrollTo({
                top: document.querySelector(targetId).offsetTop,
                behavior: 'smooth'
            });
        };

        const mainA = document.querySelectorAll('a');
        mainA.forEach((elem) => {
            elem.addEventListener('click', liClick);
        });
    };

    animateScroll();
});