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

const showTypeOf = function(data){
  console.log(data, typeof(data))
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//1) Объявить функцию getExpensesMonth.
// Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMouth = function(){
    return amountOne + amountSecond;
};

//2) Объявить функцию getAccumulatedMonth.
// Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function(){
    return money - getExpensesMouth();
};

//3) Объявить переменную accumulatedMonth и
// присвоить ей результат вызова функции getAccumulatedMonth
const accumulatedMouth = getAccumulatedMonth();

//4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления (accumulatedMonth) и возвращает результат
const getTargetMouth = function(){
    return mission / accumulatedMouth;
};
getExpensesMouth();
getAccumulatedMonth();
getTargetMouth();

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

//Вычислить бюджет на месяц, учитывая обязательные расходы,
console.log('Бюджет на месяц: ', + Math.ceil(accumulatedMouth));

//Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission,
console.log('Цель будет достигнута:', + Math.ceil(getTargetMouth()) + ' месяцев');

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