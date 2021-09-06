'use strict';
//Удалить рекламу со страницы
document.querySelector('.adv').remove();

const books = document.querySelectorAll('.book');

books[1].insertAdjacentElement('afterend', books[0]);
books[3].insertAdjacentElement('beforebegin', books[4]);
books[2].insertAdjacentElement('beforebegin', books[4]);
books[2].insertAdjacentElement('beforebegin', books[3]);
books[2].insertAdjacentElement('beforebegin', books[5]);

console.log(books);

//заменить картинку заднего фона на другую из папки image
document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
books[4].querySelector('h2').querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const bookLi = books[0].querySelectorAll('ul, li');

bookLi[4].after(bookLi[7]);
bookLi[5].before(bookLi[9]);

const bookFive = books[5].querySelector('ul').querySelectorAll('li');

bookFive[2].before(bookFive[9]);
bookFive[4].after(bookFive[2]);
bookFive[7].after(bookFive[5]);
//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const  bookSix = books[2].querySelector('ul').querySelectorAll('li');
const  bookSixElement = document.createElement('li');
bookSixElement.textContent = 'Глава 8: За пределами ES6';
bookSix[8].append(bookSixElement);