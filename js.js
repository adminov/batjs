'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, //Доход за месяц
    income = 'Freelance', //Доп. доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Свет, Газ, Мусор, бензин'), //расходы
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 700000, //Какую сумму хотите накопить
    period = 6; // мясяцев

do {
    money = prompt('Ваш месячный доход', '50000');
} while (!isNumber(money));

const showTypeOf = function(data){
  console.log(data, typeof(data))
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];
console.log(addExpenses.toLowerCase().split(', '));

// Объявить функцию getExpensesMonth.
// Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = () => {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?', 'school');
        //sum += +prompt("Во сколько это обойдется?", '5000');
        do {
            sum += +prompt("Во сколько это обойдется?", '5000');
        }while (!isNumber(sum));
    }
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmount);
//2) Объявить функцию getAccumulatedMonth.
// Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function(){
    return money - expensesAmount;
};

//3) Объявить переменную accumulatedMonth и
// присвоить ей результат вызова функции getAccumulatedMonth
const accumulatedMouth = getAccumulatedMonth();

//4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления (accumulatedMonth) и возвращает результат
const getTargetMouth = function(){
    let str;
    if ((mission / accumulatedMouth) > 0){
        str = 'Цель будет достигнута за: ' + Math.ceil(mission / accumulatedMouth);
    } else {
        str = 'Цель не будет достигнута';
    }
    return str;
};
getAccumulatedMonth();
getTargetMouth();

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');


//Вычислить бюджет на месяц, учитывая обязательные расходы,
console.log('Бюджет на месяц: ', + Math.ceil(accumulatedMouth));

//Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission,
console.log(getTargetMouth() + ' месяцев');

// budgetDay учитывая бюджет на месяц,
const budgetDay = accumulatedMouth / 30;
console.log('Бюджет на день:', + Math.floor(budgetDay));

const getStatusIncome = function () {
    if (budgetDay >= 1200){
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600){
        return ('У вас средний уровень дохода');
    } else if (budgetDay >= 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());