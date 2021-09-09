'use strict';
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
let start = document.getElementById('start');
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

const AppData = function () {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.precentDeposit = 0;
    this.moneyDeposit = 0;
};

AppData.prototype.start = function () {
    if (start.textContent === 'Рассчитать') {
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
        this.blockage();
        start.textContent = 'Сбросить';
    } else {
        start.textContent = 'Рассчитать';
        this.reset();
    }
};

//получение данные из блоков Обязательные расходы наименование и значение
AppData.prototype.getExpenses = function () {
    expensesItems.forEach(item => {
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = +cashExpenses;
        }
    });
};

// Дополнительный доход
AppData.prototype.getIncome = function () {
    incomeItems.forEach(item => {
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            this.income[itemIncome] = +cashIncome;
            this.incomeMonth += +cashIncome;
        }
    });
};
// Функция возвращает сумму всех обязательных расходов за месяц
AppData.prototype.getExpensesMonth = function () {
    for (let elem in this.expenses) {
        this.expensesMonth += this.expenses[elem];
    }
};

// Получение данных от Возможные расходы
AppData.prototype.getAddExpenses = function () {
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item => {
        item = item.trim();
        if (item !== '') {
            this.addExpenses.push(item);
        }
    });
};

// Получение данных от Возможный доход
AppData.prototype.getAddIncome = function () {
    additionalIncomeItem.forEach(item => {
        const itemValue = item.value.trim();
        if (itemValue !== '') {
            this.addIncome.push(itemValue);
        }
    });
};

// Функция возвращает Накопления за месяц (Доходы минус расходы)
AppData.prototype.getBudget = function () {
    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
};

// Подсчитывает за какой период будет достигнута цель
AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.showResult = function () {
    budgetMonth.value = this.budgetMonth;
    budgetDay.value = Math.floor(this.budgetDay * 100) / 100;
    expensesMonth.value = this.expensesMonth;
    additionalExpenses.value = this.addExpenses.join(', ');
    additionalIncome.value = this.addIncome.join(', ');
    targetMonths.value = Math.ceil(this.getTargetMonth());
    incomePeriod.value = this.calcPeriod();
};

AppData.prototype.blockage = function (disabled = true) {
    document.querySelectorAll('.data input[type=text]').forEach(item => {
        item.disabled = disabled;
    });
    document.querySelector('.data input[type=checkbox]').disabled = disabled;
    incomePlus.disabled = disabled;
    expensesPlus.disabled = disabled;
};

AppData.prototype.reset = function () {

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
        start.style.display = 'inline';
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

    this.blockStart();
};

//Добавление блоков для Обязательные расходы
AppData.prototype.addExpensesBlock = function () {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};

//Добавление блоков для Дополнительный доход
AppData.prototype.addIncomeBlock = function () {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};

AppData.prototype.calcPeriod = function () {
    return this.budgetMonth * periodSelect.value;
};

AppData.prototype.changePeriodSelect = function () {
    document.querySelector('.period-amount').textContent = event.target.value;
    incomePeriod.value = this.calcPeriod();
};

AppData.prototype.blockStart = function () {
    start.disabled = !salaryAmount.value.trim();
};

AppData.prototype.eventsListeners = function () {
    this.blockStart();
    start.addEventListener('click', this.start.bind(this));
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', this.changePeriodSelect.bind(this));
    salaryAmount.addEventListener('input', this.blockStart);
};

const appData = new AppData();

appData.eventsListeners();

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