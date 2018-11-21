'use strict';

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let costs = +prompt('Введите обязательную статью расходов в этом месяце');
let dolg = +prompt('Во сколько обойдётся?');
let costsTwo = +prompt('Введите обязательную статью расходов в этом месяце');
let dolgTwo = +prompt('Во сколько обойдётся?');

appData.expenses.costs = dolg;
appData.expenses.costsTwo = dolgTwo;

alert(appData.budget/30);













