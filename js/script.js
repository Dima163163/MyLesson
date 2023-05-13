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

const allInputs = document.querySelectorAll("input");

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
  inputBlocked: false,
  init: function () {
    this.addTitle();
    inputRange.addEventListener("input", this.addRange);
    startBtn.addEventListener("click", this.start);
    buttonPlus.addEventListener("click", this.addScreenBlock);
    resetBtn.addEventListener("click", this.resetValues);
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
      appData.leftInputsDisableSwitch();
      appData.sumButtonSwitch();
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
    cloneScreen.querySelector("input[type=text]").value = "";
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
    inputRangeValue.textContent = `${inputRange.value}%`;
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
  },
  leftInputsDisableSwitch: function () {
    const check = Array.from(document.querySelectorAll("input[type=checkbox]"));

    Array.from(document.querySelectorAll(".screen")).forEach((elem) => {
      const input = elem.querySelector("input[type=text]");
      const select = elem.querySelector("select");
      input.disabled = !this.inputBlocked;
      select.disabled = !this.inputBlocked;
    });

    check.forEach((checkbox) => (checkbox.disabled = !this.inputBlocked));

    inputRange.disabled = !this.inputBlocked;

    this.inputBlocked = !this.inputBlocked;
  },
  sumButtonSwitch: function () {
    if (this.inputBlocked) {
      startBtn.style.display = "none";
      resetBtn.style.display = "block";
    } else {
      startBtn.style.display = "block";
      resetBtn.style.display = "none";
    }
  },
  resetValues: function () {
    const selectsQuery = document.querySelectorAll("select");
    const screens = document.querySelectorAll(".screen");

    Array.from(selectsQuery).forEach((select) => {
      select.value = "";
    });

    screens.forEach((item, index) => {
      if (index != 0) {
        item.remove();
      }
    });

    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = input.defaultValue;

      if (input.type === "checkbox") {
        input.checked = false;
      }
    });

    inputRangeValue.textContent = `${inputRange.value}%`;

    this.title = "";
    this.screens = [];
    this.screenPrice = 0;
    this.adaptive = true;
    this.rollback = 10;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};

    this.leftInputsDisableSwitch();
    this.sumButtonSwitch();
  },
  logger: function () {
    console.log(this);
    console.log(this.fullPrice);
    console.log(this.services);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },
};

appData.init();
