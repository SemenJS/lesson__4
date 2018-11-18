'use strict';





let money = +prompt('Ваш бюджет на месяц?');
let time = +prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    money,
    time,
    optionalExpenses: '',
    income: '',
    savings: false
};
let expenses = +prompt('Введите обязательную статью расходов в этом месяце');
console.log(appData);










