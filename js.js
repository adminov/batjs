'use strict';




let money = +prompt('Ваш месячный доход', '50000'), //Доход за месяц
    income = 'Freelance', //Доп. доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Свет, Газ, Мусор, бензин'), //расходы
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 700000, //Какую сумму хотите накопить
    period = 6; // мясяцев

let expensesOne = prompt('Введите обязательную статью расходов?', 'expensesOne'),
    expensesSecond = prompt('Введите обязательную статью расходов?', 'expensesSecond'),
    amountOne = +prompt('Во сколько это обойдется?', '10000'),
    amountSecond = +prompt('Во сколько это обойдется?', '5000');

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

//6) Вычислить бюджет на месяц, учитывая обязательные расходы,
// сохранить в новую переменную budgetMonth и вывести результат в консоль
const budgetMonth = money - (amountOne + amountSecond);
console.log('Бюджет на месяц: ', + Math.ceil(budgetMonth));

//7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission,
// вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
console.log('Цель будет достигнута:', + Math.ceil(mission / budgetMonth) + ' месяцев');

// 8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход.
//     Вывести в консоль  округлив в меньшую сторону
const budgetDay = budgetMonth / 30;
console.log('Бюджет на день:', budgetDay);

if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600){
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}