"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPersent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    this.addTitle();
    inputRange.addEventListener("input", this.addRange);
    startBtn.addEventListener("click", this.start);
    buttonPlus.addEventListener("click", this.addScreenBlock);
    console.log("это init", this);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    const isValid = appData.checkInputResult();
    if (isValid) {
      appData.addServices();
      appData.addPrices();
      // appData.getServicePercentPrices();
      // appData.logger();
      appData.showResult();
    } else {
      alert("Ошибка.Заполните все значения");
    }
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
  },
  addScreens: function () {
    let screens = document.querySelectorAll(".screen");
    this.screens = [];

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    // console.log(appData.screens);
  },
  addServices: function () {
    otherItemsPersent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    // appData.screenPrice = appData.screens.reduce(
    //   (total, screens) => (total += +screens.price),
    //   0
    // );

    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice =
      +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);
    totalCountRollback.value = this.servicePercentPrice;

    let sum = 0;
    for (let screen of this.screens) {
      sum += screen.count;
    }
    totalCount.value = sum;
  },
  // getServicePercentPrices: function () {
  //   appData.servicePercentPrice =
  //     appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  // },
  addRange: function () {
    inputRangeValue.textContent = inputRange.value;
    this.rollback = +inputRangeValue.textContent;
  },
  checkInputResult: function () {
    // const result = appData.screens.filter(function (screen) {
    //   return screen.name !== "Тип экранов" && screen.count > 0;
    // });

    // return result.length === appData.screens.length;

    let flag = true;
    this.screens.forEach((item) => {
      if (item.name == "Тип экранов" || item.count <= 0) {
        flag = false;
      }
    });

    return flag;

    // let flag = true;
    // for (let item in appData.screens) {
    //   if (!(item.name == "Тип экранов" && item.count > 0)) {
    //     flag = false;
    //   }
    // }
    // return flag;
  },

  logger: function () {
    console.log(appData);
    console.log(appData.fullPrice);
    console.log(appData.services);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.init();
