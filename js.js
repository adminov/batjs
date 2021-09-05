'use strict';
//Проверка на число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

//проверка на строку, если это не цифра, значит это строка
let isString = function(string){
    return !isNumber(string)
};
//--------------------------------------------
let starts = document.getElementById('start'),
    // Добавить категорию (плюсы)
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    //Чекбокс
    checkbox = document.querySelector('#deposit-check'),
    //Поля для ввода возможных доходов
    additionalIncomeItems = document.querySelectorAll('additional_income-item');
    //Поля в правой части программы
let budgetDayValue = document.getElementsByClassName("budget_day-value");
let expensesMonthValue = document.getElementsByClassName("expenses_month-value");
let additionalIncomeValue = document.getElementsByClassName("additional_income-value");
let additionalExpensesValue = document.getElementsByClassName("additional_expenses-value");
let incomePeriodValue = document.getElementsByClassName("income_period-value");
let targetMonthValue = document.getElementsByClassName("target_month-value");
//оставшиеся поля
let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle = document.querySelector(".income-title");
let incomeAmount = document.querySelector(".income-amount");
let expensesTitle = document.querySelector(".expenses-title");
let expensesAmount = document.querySelector(".expenses-amount");
let budgetMonthValue = document.querySelector(".budget_month-value");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");
let targetAmount = document.querySelector(".target-amount");
let periodSelect = document.querySelector(".period-select");

//--------------------------------------------
let money, //Доход за месяц
    start = function(){
        do {
            money = prompt('Ваш месячный доход', '50000');
        } while (!isNumber(money));
    };
start();
//--------------------------------------------

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
    percentDeposit: 0, // процент депозита
    moneyDeposit: 0, // Сколько денег заложил чел
    mission: 700000, //Какую сумму хотите накопить
    period: 6,
    asking: function () {
        if (confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок', 'Taxing');
            } while (!isString(itemIncome));
            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом заработываете?', '10000');
            } while (!isString());
            appData.income[itemIncome] = cashIncome;
        }

        //--------------------------------------------
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Свет, Газ, Мусор, бензин'); //расходы
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        let upperMass = []; //Сюда вносятся элементы которые с большой буквы
        let upper;
        for (let i = 0; i < appData.addExpenses.length; i++){
            //прохожу по всем элементам массива
            // upper принимает в себя каждый элемент и делает его с заглавной буквы
            upper = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1);
            upperMass.push(upper); // отправляю этот элемент в новый массив с заглавными буквамии
        }
        let upperStr = upperMass.join(', '); //бью элементы нового массива через запятую.
        console.log('возможные расходы', upperStr);

        //--------------------------------------------
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        //--------------------------------------------

        for (let i = 0; i < 2; i++) {
            let question;
            do {
                question = prompt('Введите обязательную статью расходов?', 'school');
            } while (!isString(question));
            let answer;
            do {
                answer = prompt("Во сколько это обойдется?", '5000');
            } while (!isNumber(answer));
            appData.expenses[question] = +answer;
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
        return appData.mission / appData.budgetMonth;
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
    },

    getInfoDeposit: function() {
        let tmpPercentDeposit = 0,
            tmpMoneyDeposit = 0;
        if (appData.deposit){
            do {
                tmpPercentDeposit = prompt('Какой годовой прцент?', '10');
            } while (!isNumber(tmpPercentDeposit));
            do {
                tmpMoneyDeposit = prompt('Какая сумма заложена?', '10000');
            } while (!isNumber(tmpMoneyDeposit));
            appData.percentDeposit = +tmpPercentDeposit;
            appData.moneyDeposit = +tmpMoneyDeposit;
        }
    },

    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();
appData.getExpensesMonth();
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getBudget();

if (appData.getTargetMouth() > 0){
    console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMouth()) + ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}

// budgetDay учитывая бюджет на месяц,
console.log('Бюджет на день:', + Math.floor(appData.budgetDay));

console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let elem in appData) {
    console.log(elem, appData[elem]);
};


