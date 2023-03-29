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
console.log(screenPrice + " " + "₽/$/₴/¥");
console.log(fullPrice + " " + "₽/$/₴/¥");
console.log(screens.toLowerCase().split(","));
console.log(fullPrice * (rollback / 100));
