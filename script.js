const title = "MyLesson";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 99;
const rollback = 44;
const fullPrice = 100000;
const adaptive = true;

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
