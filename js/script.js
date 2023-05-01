"use strict";

//Получаем заголовок с тегом h1
const title = document.getElementsByTagName("h1");

//Получаеем кнопки расчитать и сбросc
const buttons = document.getElementsByClassName("handler_btn");
const startBtn = buttons[0];
const resetBtn = buttons[1];

console.log(buttons);
console.log(startBtn);
console.log(resetBtn);

//Получаем кнопку "+"
const screenBtn = document.querySelector(".screen-btn");

//Получаем все элементы с классом other-items
const otherPersent = document.querySelectorAll(".other-items.percent");
const otherNumber = document.querySelectorAll(".other-items.number");

//Получаем input type = range
const entryField = document.querySelector(
  ".main-controls__item.rollback input[type=range]"
);

//Получаем span с классом range-value
const rangeValue = document.querySelector(
  ".main-controls__item.rollback .range-value"
);

//Получаем все input c классом total-input
const totalInput = document.getElementsByClassName("total-input");
console.log(totalInput);

let fullPrice = totalInput[0];
let screens = totalInput[1];
let addServices = totalInput[2];
let total = totalInput[3];
let priceRollback = totalInput[4];

console.log(fullPrice);
console.log(screens);
console.log(addServices);
console.log(total);
console.log(priceRollback);

//Получаем все блоки с классом screen
let screenBlock = document.querySelectorAll(".screen");

console.log(title[0]);

console.log(screenBtn);
console.log(otherPersent);
console.log(otherNumber);
console.log(entryField);
console.log(rangeValue);

//Получаем все блоки с классом screen
console.log(screenBlock);

// const appData = {
//   title: "",
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   allServicePrices: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   services: {},
//   start: function () {
//     appData.asking();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getServicePercentPrices();
//     appData.getTitle();

//     appData.logger();
//   },
//   isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
//   },
//   asking: function () {
//     do {
//       appData.title = prompt(
//         "Как называется ваш проект?",
//         "Калькулятор верстки"
//       );
//     } while (appData.isNumber(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let name;
//       do {
//         name = prompt("Какие типы экранов нужно разработать?");
//       } while (appData.isNumber(name));

//       let price;
//       do {
//         price = prompt("Сколько будет стоить данная работа?");
//       } while (!appData.isNumber(price));

//       appData.screens.push({ id: i, name: name, price: price });
//     }

//     for (let i = 0; i < 2; i++) {
//       let name;
//       do {
//         name = prompt("Какой дополнтиельный тип услуги нужен?");
//       } while (appData.isNumber(name));

//       let price;
//       do {
//         price = prompt("Сколько это будет стоить?");
//       } while (!appData.isNumber(price));

//       appData.services[name + i] = +price;
//     }

//     appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//   },

//   addPrices: function () {
//     appData.screenPrice = appData.screens.reduce(
//       (total, screens) => (total += +screens.price),
//       0
//     );

//     // for (let screen of appData.screens) {
//     //   appData.screenPrice += +screen.price;
//     // }

//     for (let key in appData.services) {
//       appData.allServicePrices += appData.services[key];
//     }
//   },

//   getRollbackMessage: function (price) {
//     if (price > 30000) {
//       return "Даем скидку в 10%";
//     } else if (price >= 15000 && price <= 30000) {
//       return "Даем скидку в 5%";
//     } else if (price < 15000 && price >= 0) {
//       return "Скидка не предусмотрена";
//     } else if (price < 0) {
//       return "Что-то пошло не так";
//     }
//   },

//   getFullPrice: function () {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },

//   getTitle: function () {
//     appData.title =
//       appData.title.trim()[0].toUpperCase() +
//       appData.title.trim().slice(1).toLowerCase();
//   },

//   getServicePercentPrices: function () {
//     appData.servicePercentPrice =
//       appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
//   },

//   logger: function () {
//     console.log(appData.fullPrice);
//     console.log(appData.services);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//   },
// };

// appData.start();
