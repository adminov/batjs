'use strict';
const isNum = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
    let num = 50;
    const game = () => {
        let n = prompt('Угадай число от 1 до 100','50');
        if (n === null){
            alert('Пока');
            return;
        }
        if (isNum(n)){
            const realNum = +n;
            if (realNum > num){
                alert('Загаданное число больше');
                game();
            } else if (realNum < num){
                alert('Загаданное число меньше');
                game();
            } else {
                if (confirm('Вы угадали! Сыграем ещё?')){
                    start();
                } else {
                    alert('До свидания');
                    return;
                }
            }
        } else {
            alert('Введите число');
            game();
        }
    };
    game();
};

start();