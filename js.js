'use strict';
//Проверка на число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

//проверка на строку, если это не цифра, значит это строка
// let isString = function(string){
//     return !isNumber(string)
// };
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
let btnPluses = document.querySelectorAll('.btn_plus'),
    cancel = document.getElementById('cancel');
let periodAmount = document.querySelector('.period-amount'),
    resetAddExpenses = document.querySelector('[placeholder="название"]');
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
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.showResult();

            //блокировать все input[type=text];
            let data = document.querySelectorAll('[type="text"]');
            data.forEach((i) => {
                i.disabled = true;
            });

            btnPluses.forEach((i) => {
                i.disabled = true
            });

            depositCheck.disabled = true;
            periodSelect.disabled = true;

            if (starts) {
                starts.style.display = 'none';
                cancel.style.display = 'inline';
            }
        } else {alert('Ошибка, поле "Месяцный доход"');}
    },

    showResult: function() {
        budgetMonth.value = this.budgetMonth;
        budgetDay.value = this.budgetDay;
        expensesMonth.value = this.expensesMonth;
        additionalExpenses.value = this.addExpenses.join(', ');
        additionalIncome.value = this.addIncome.join(', ');
        targetMonths.value = Math.ceil(this.getTargetMouth());
        incomePeriod.value = this.calcPeriod();
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

    //Добавление блоков для Дополнительный доход
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

        for (let key in this.income){
            this.incomeMonth += +this.income[key]
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
        this.expensesMonth = 0;
        for (let item in this.expenses){
            this.expensesMonth += +this.expenses[item];
        }
        return this.expensesMonth;
    },


    // Функция возвращает Накопления за месяц (Доходы минус расходы)
    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },


    //4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
    // зная результат месячного накопления (accumulatedMonth) и возвращает результат
    getTargetMouth: function () {
        return targetAmount.value / appData.budgetMonth;
    },

    getStatusIncome: function () {
    },

    getInfoDeposit: function() {
        appData.moneyDeposit = 0;
    },

    calcPeriod: function () {
        return this.budgetMonth * periodSelect.value;
    },

    rangeChangeValue: function () {
        let tmp = periodSelect.value;
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = tmp;
        incomePeriod.value = appData.calcPeriod();
    },

    reset: function () {

        let resetName = document.querySelectorAll('[placeholder="Наименование"]'),
            resetSalary = document.querySelectorAll('[placeholder="Сумма"]');

        budgetMonth.value = '';
        budgetDay.value = '';
        expensesMonth.value = '';
        additionalExpenses.value = '';
        additionalIncome.value = '';
        incomePeriod.value = '';
        targetMonths.value = '';

        //заблокировать все input[type=text]
        let data = document.querySelectorAll('[type="text"]');
        data.forEach((i) => {
            i.disabled = false;
        });

        resetName.forEach((i) => {
            i.value = '';
        });

        resetSalary.forEach((i) => {
            i.value = '';
        });

        btnPluses.forEach((i) => {
            i.disabled = false;
        });

        resetAddExpenses.value = '';

        periodSelect.value = '1';

        periodAmount.textContent = '1';

        for (let i = incomeItems.length - 1; i > 0; i--) {
            incomeItems[0].parentNode.removeChild(incomeItems[i]);
        }
        incomePlus.style.display = '';

        for (let i = expensesItems.length - 1; i > 0; i--) {
            expensesItems[0].parentNode.removeChild(expensesItems[i]);
        }
        expensesPlus.style.display = '';

        if (cancel) {
            cancel.style.display = 'none';
            starts.style.display = 'inline';
        }

        depositCheck.disabled = false;
        periodSelect.disabled = false;

        this.income = {}; //доп доход
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];//допол, расходов
        this.deposit = false; //депозит в банке
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.incomeMoth = 0;
        this.budget = 0; // Доход за месяц
        this.budgetDay = 0; // Доход за день
        this.budgetMonth = 0; //обязательных расходов за месяц
        this.expensesMonth = 0;

    }
};

starts.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.rangeChangeValue);
cancel.addEventListener('click', appData.reset);

const addEventChangeNumber = event => {
    let tmpValue = event.target.value;
    const changeInputNumber = event => {
        if (!/^[\d]+$/.test(event.target.value)) {
            alert('Доупускается ввод только цифр!');
            event.target.value = tmpValue;
            event.target.removeEventListener('change', changeInputNumber);
        }
        tmpValue = event.target.value;
    };
    event.target.addEventListener('change', changeInputNumber);
};
const addEventChangeText = event => {
    let tmpValue = event.target.value;
    const changeInputText = event => {
        if (!/^[,. а-яА-ЯёЁ]+$/.test(event.target.value)) {
            alert('Доупускается ввод только русских букв, пробела, точки и запятой!');
            event.target.value = tmpValue;
            event.target.removeEventListener('change', changeInputText);
        }
        tmpValue = event.target.value;
    };
    event.target.addEventListener('change', changeInputText);
};
document.querySelectorAll('[placeholder="Наименование"]').forEach(input => {
    input.addEventListener('focus', addEventChangeText);
});
document.querySelectorAll('[placeholder="Сумма"]').forEach(input => {
    input.addEventListener('focus', addEventChangeNumber);
});