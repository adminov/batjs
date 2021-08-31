
let money = 100000, //Доход за месяц
    income = 'Freelance', //Доп. доход
    addExpenses = 'Свет, Газ, Мусор, бензин', //расходы
    deposit = true,
    mission = 7000000, //Какую сумму хотите накопить
    period = 6; // мясяцев

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log("Расходы: " + addExpenses.length);

console.log("Период: " + period);
console.log("цель заработать: " + mission);

console.log(addExpenses.toLowerCase());
const arrayAddExpenses = addExpenses.split(', ');
console.log(arrayAddExpenses);

let budgetDay = money / 30;
console.log(parseInt(budgetDay));