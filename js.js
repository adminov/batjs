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

    //меню
    const toggleMenu = () =>{
        const menu = document.querySelector('menu');

        document.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.menu')){
                menu.classList.toggle('active-menu');
            } else if (target.closest('.close-btn') || target.closest('a') || !target.closest('.active-menu')){
                menu.classList.remove('active-menu');
            }
        });
    };

    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content'),
            popupData = {
                count: 150,
                speed: 10,
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
                    popupContent.style.display = '';
                    requestAnimationFrame(showPopup);
                }
            });
        });


        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
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
                behavior: 'smooth',
            });
        };
        const mainA = document.querySelectorAll('a');
        mainA.forEach((elem) => {
            elem.addEventListener('click', liClick);
        });
    };
    animateScroll();

    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none')
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none')
                }
            };
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

    // слайдер
    const slider = () => {
        const slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            portfolioDots = document.querySelector('.portfolio-dots');

        //ищем длину слайдера исходя этого добавляем точки
        slide.forEach((elem) => {
            portfolioDots.innerHTML += `<li class="dot"></li>`;
        });
        //добавляем еще одну класс для точки только на индексу ноль
        const dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');

        //currentSlide-это счетчик для слайдера
        let currentSlide = 0,
            interval;

        //ф-я удаления активний класс через её параметрам получаем классы
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        //ф-я добавления активний класс через её параметрам получаем классы
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        //
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        // старт слайдер и указываем параметре время переключение между слайдерам и вызваем ф-ю autoPlaySlide
        const startSlide = (time = 1500) => {
            interval = setInterval(autoPlaySlide, time);
        };
        // остановляем метод setInterval при наведение мышки на точки и стрелки
        const stopSlide = () => {
            clearInterval(interval);
        };

        // при клике на точки и на стрелки у слайдера меняются картинки
        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            // если есть такие классы то возвращаем return
            if (!target.matches('.portfolio-btn, .dot')){
                return;
            }
            // вызываем ф-ю и передаем параметры классы
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')){
                currentSlide++;
            } else if (target.matches('#arrow-left')){
                currentSlide--;
            } else if (target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if (elem === target){
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            if (currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        // при наведение мышки вызывается ф-я stopSlide
        slider.addEventListener('mouseover', (event) => {
            const target = event.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')){
                stopSlide()
            }
        });
        // при наведение мышки вызывается ф-я startSlide
        slider.addEventListener('mouseout', (event) => {
            const target = event.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')){
                startSlide();
            }
        });

        startSlide();
    };
    slider();

    //Наша команда фото
    const ourTeam = () => {
        const commandPhoto = document.querySelectorAll('.container')[7];
        const img = commandPhoto.querySelectorAll('img');

        const changingPhotos = (event) => {
            const target = event.target;
            if (target.classList.contains('command__photo')) {
                const lastSrc = target.src;

                target.src = target.dataset.img;
                target.dataset.img = lastSrc;
            }
        };

        img.forEach((item) => {
            item.addEventListener('mouseover', changingPhotos);
            item.addEventListener('mouseout', changingPhotos);
        })
    };
    ourTeam();

    //проверка на цифр в блоке калькулятор
    const checkCalcBlock = () => {
        const calcBlock = document.querySelector('.calc-block');
        const input = calcBlock.querySelectorAll('input');

        input.forEach((item) => {
            item.addEventListener('blur', (event) => {
               if (event.target.type === 'text') {
                   event.target.value = event.target.value.replace(/\D/g, '');
               }
            });
        });
    };

    checkCalcBlock();

    //калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        let total = 0;
        let timeout;

        const countSum = () => {
            let countValue = 1,
                dayValue = 1;

            const typeValue = calcType.value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }
            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            total = Math.floor(total);
        };

        const animateTotal = () => {
            const target = total;
            const count = +totalValue.textContent;
            const speed = 200;

            const inc = target / speed;

            if (count < target) {
                totalValue.textContent = Math.floor(count + inc);
                timeout = setTimeout(animateTotal, 5);
            } else {
                totalValue.textContent = target;
                clearTimeout(timeout);
            }
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
                animateTotal();
            }
        });

        calcType.addEventListener('change', () => {
            total = 0;
        });

    };
    calc();

    //валидация
    const isValid = (event) => {
        const target = event.target;
        if (target.matches('.form-phone')) {
            target.value = target.value.replace(/[^+\d]/g, '');
        }
        if (target.name === 'user_name') {
            target.value = target.value.replace(/[^а-яё ]/gi, '');
        }
        if (target.matches('.mess')) {
            target.value = target.value.replace(/[^а-яё ,.]/gi, '');
        }
    };

    //send-ajax-form
    const sendForm = () => {
        const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скокро с вами свяжемся!',
            errorImg = './images/wait/error.png',
            loadImg = './images/wait/wait.gif',
            successImg = './images/wait/success.png';

        //чистка инпутов после отправки данных
        const clearInput = idForm => {
            const form = document.getElementById(idForm);

            [...form.elements]
                .filter(item =>
                    item.tagName.toLowerCase() !== 'button' &&
                    item.type !== 'button')
                .forEach(item =>
                    item.value = '');
        };

        const removeDivSuccessError = () => {
            const successError = document.querySelector('.successError');
            setTimeout(() => {
                successError.remove();
                document.querySelector('.popup').style.display = 'none';
            }, 2000);
        };


        const processingForm = idForm => {
            const form = document.getElementById(idForm);
            const statusMessage = document.createElement('div');
            const img = document.createElement('img');

            statusMessage.className = 'successError';
            statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
            img.height = 50;

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                let body = {};
                formData.forEach((val, key) => {
                        body[key] = val;
                });

                if (body.user_name === '' || body.user_email === '' || body.user_phone === '' && body.user_message === '') {
                    alert('Write correct data')
                } else {
                    statusMessage.textContent = loadMessage;
                    img.src = loadImg;
                    statusMessage.insertBefore(img, statusMessage.firstChild);

                    form.appendChild(statusMessage);
                    postData(body, () => {
                        statusMessage.textContent = successMessage;
                        img.src = successImg;
                        statusMessage.insertBefore(img, statusMessage.firstChild);
                        clearInput(idForm);
                        removeDivSuccessError();
                    }, (error) => {
                        statusMessage.textContent = errorMessage;
                        img.src = errorImg;
                        statusMessage.insertBefore(img, statusMessage.firstChild);
                        clearInput(idForm);
                        removeDivSuccessError();
                        console.error(error)
                    });
                }
            });
            form.addEventListener('input', isValid);
        };

        processingForm('form1');
        processingForm('form2');
        processingForm('form3');

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", () => {
                if (request.readyState !== 4) return;
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };
    };

    sendForm();
});