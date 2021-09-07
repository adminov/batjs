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
let budgetMonth = document.getElementsByClassName('budget_month-value')[0];
let	budgetDay = document.getElementsByClassName('budget_day-value')[0];
let	expensesMonth = document.getElementsByClassName('expenses_month-value')[0];
let	additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0];
let	additionalIncome = document.getElementsByClassName('additional_income-value')[0];
let	incomePeriod = document.getElementsByClassName('income_period-value')[0];
let	targetMonths = document.getElementsByClassName('target_month-value')[0];

//---------------------------------------------------------------------------------------
let incomeItems = document.querySelectorAll('.income-items');
let salaryAmount = document.querySelector('.salary-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');

//---------------------------------------------------------------------------------------
let starts = document.getElementById('start');
let depositCheck = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1];
//----------------------------------------------------------------------------
let appData = {
    budget: 0, //Доход за месяц
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    incomeMonth: 0, // доп. заработка
    income: {}, //Доп. доходы
    addIncome: [], //будем перечислять доп. доходы
    expenses: {}, //список обязательную статью расходов
    addExpenses: [], // массив с возможнами расходами
    deposit: false,
    percentDeposit: 0, // процент депозита
    moneyDeposit: 0, // Сколько денег заложил чел
    start: function(){ //Доход за месяц
        if (salaryAmount.value !== ''){
            appData.budget = +salaryAmount.value;
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getBudget();

            appData.showResult();
        } else {alert('Ошибка, поле "Месяцный доход"');}
    },

    showResult: function() {
        budgetMonth.value = appData.budgetMonth;
        budgetDay.value = appData.budgetDay;
        expensesMonth.value = appData.expensesMonth;
        additionalExpenses.value = appData.addExpenses.join(', ');
        additionalIncome.value = appData.addIncome.join(', ');
        targetMonths.value = Math.ceil(appData.getTargetMouth());
        incomePeriod.value = appData.calcPeriod();
    },

    //функция добавляет элементы до 3х и после 3х кнопка плюс скрывается это в Обязательные расходы
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },

    //функция проверяет на пустату и записывает значение из Обязательные расходы на appData.expenses
    getExpenses: function() {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },

    //функция проверяет на пустату и записывает значение из доп.доход на appData.income
    // потом проведем через цикл и значение свойств записываем на appData.incomeMonth
    getIncome: function() {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
        });

        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key]
        }
    },

    // Получение данных от Возможные расходы
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },

    // функция проверяет на пустату и записывает значение из возможный доход на addIncome виде массива
    getAddIncome: function() {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },

    // Функция возвращает сумму всех обязательных расходов за месяц
    getExpensesMonth: function () {
        appData.expensesMonth = 0;
        for (let item in appData.expenses){
            appData.expensesMonth += +appData.expenses[item];
        }
        return appData.expensesMonth;
    },


    // Функция возвращает Накопления за месяц (Доходы минус расходы)
    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },


    //4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
    // зная результат месячного накопления (accumulatedMonth) и возвращает результат
    getTargetMouth: function () {
        return targetAmount.value / appData.budgetMonth;
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

    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },

    rangeChangeValue: function () {
        let tmp = periodSelect.value;
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = tmp;
        incomePeriod.value = appData.calcPeriod();
    },

};

starts.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.rangeChangeValue);
// if (appData.getTargetMouth() > 0){
//     console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMouth()) + ' месяцев');
// } else {
//     console.log('Цель не будет достигнута');
// }
