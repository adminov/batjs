'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, //Доход за месяц
    start = function(){
        do {
            money = prompt('Ваш месячный доход', '50000');
        } while (!isNumber(money));
    };

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {}, //Доп. доходы
    addIncome: [], //будем перечислять доп. доходы
    expenses: {}, //список обязательную статью расходов
    addExpenses: [], // массив с возможнами расходами
    deposit: false,
    mission: 700000, //Какую сумму хотите накопить
    period: 6,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Свет, Газ, Мусор, бензин'); //расходы
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введите обязательную статью расходов?', 'school')] = (() => {
                let sum = 0;
                do {
                    sum += +prompt("Во сколько это обойдется?", '5000');
                }while (!isNumber(sum));
                return sum;
            })();
        }
    },

    // Функция возвращает сумму всех обязательных расходов за месяц
    getExpensesMonth: function () {
        appData.expensesMonth = 0;
        for (let item in appData.expenses){
            appData.expensesMonth += appData.expenses[item];
        }
        return appData.expensesMonth;
    },


    // Функция возвращает Накопления за месяц (Доходы минус расходы)
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },


    //4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
    // зная результат месячного накопления (accumulatedMonth) и возвращает результат
    getTargetMouth: function () {
        let str;
        if ((appData.mission / appData.budgetMonth) > 0){
            str = 'Цель будет достигнута за: ' + Math.ceil(appData.mission / appData.budgetMonth);
        } else {
            str = 'Цель не будет достигнута';
        }
        return str;
    },

    getStatusIncome: function () {
        if (appData.budgetDay >= 1200){
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600){
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay >= 0){
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    }
};
appData.asking();

appData.getExpensesMonth();
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getBudget();
appData.getTargetMouth();
console.log(appData.getTargetMouth() + ' месяцев');
// budgetDay учитывая бюджет на месяц,
console.log('Бюджет на день:', + Math.floor(appData.budgetDay));

console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let elem in appData) {
    console.log(elem, appData[elem]);
};

