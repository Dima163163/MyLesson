let title = "MyLesson";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 99;
let rollback = 44;
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof true);
console.log(screens.length);
console.log(
  screenPrice + "₽",
  (screenPrice / 77).toFixed(2) + "$",
  (screenPrice / 2.09).toFixed(2) + "₴",
  (screenPrice / 11.18).toFixed(2) + "¥"
);
console.log(
  fullPrice + " " + "₽",
  (fullPrice / 77).toFixed(2) + "$",
  (fullPrice / 2.09).toFixed(2) + "₴",
  (fullPrice / 11.18).toFixed(2) + "¥"
);
console.log(screens.toLowerCase().split(","));
console.log(fullPrice * (rollback / 100));
