"use strict";

let rollback = 10;
const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else if (price < 0) {
      return "Что-то пошло не так";
    }
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;

      if (i === 0) {
        appData.service1 = prompt("Какой дополнтиельный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнтиельный тип услуги нужен?");
      }

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(sum));

      sum += +price;
    }

    return sum;
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().slice(1).toLowerCase()
    );
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  start: function () {
    appData.asking();
  },

  logger: function (info) {
    console.log(info);
  },
};

appData.start();

for (let key in appData) {
  appData.logger(key);
}

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
