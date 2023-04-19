"use strict";

const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
const rollback = 44;

const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнтиельный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнтиельный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что-то пошло не так";
  }
};

const getAllServicePrices = function (servicepr1, servicepr2) {
  return servicepr1 + servicepr2;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrc, allServicePr) {
  return screenPrc + allServicePr;
}

const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function (heading) {
  let headingNew = heading.trim();
  return headingNew[0].toUpperCase() + headingNew.slice(1).toLowerCase();
};

const getServicePercentPrices = function (fullPr, rollBk) {
  return fullPr - fullPr * (rollBk / 100);
};

const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(getTitle(title));
console.log(servicePercentPrice);
