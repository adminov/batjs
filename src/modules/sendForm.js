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

            if (body.user_name === '' || body.user_email === '' || body.user_phone === '' || body.user_message === '') {
                alert('Write correct data')
            } else {
                statusMessage.textContent = loadMessage;
                img.src = loadImg;
                statusMessage.insertBefore(img, statusMessage.firstChild);

                form.appendChild(statusMessage);
                postData(body)
                    .then(() => {
                        statusMessage.textContent = successMessage;
                        img.src = successImg;
                        statusMessage.insertBefore(img, statusMessage.firstChild);
                        clearInput(idForm);
                        removeDivSuccessError();
                    })
                    .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        img.src = errorImg;
                        statusMessage.insertBefore(img, statusMessage.firstChild);
                        clearInput(idForm);
                        removeDivSuccessError();
                        console.error(error)
                    });
            }
        });
    };

    processingForm('form1');
    processingForm('form2');
    processingForm('form3');

    const postData = (body) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", () => {
                if (request.readyState !== 4) return;
                if (request.status === 200) {
                    resolve();
                } else {
                    reject(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        });
    };
};

export default sendForm;