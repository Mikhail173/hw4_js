// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i += 1) {
//   if (i == 0) {
//     console.log(`${i} - это ноль`);
//   }
//   if (i % 2 !== 0) {
//     console.log(`${i} - нечетное число`);
//   }
//   if (i % 2 == 0 && i !== 0) {
//     console.log(`${i} - четное число`);
//   }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// let flag = 0;
// let sum = 0;
// let min = 9;
// arr = [];
// for (let i = 0; i <= 4; i += 1) {
//   let value = Math.random(0, 1) * 9;
//   arr[i] = Math.round(value);
//   sum = sum + arr[i];
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] === 3) {
//     flag = 1;
//   }
// }
// console.log(arr);
// console.log(`Сумма элементов ${sum}`);
// console.log(`Минимальное значение ${min}`);
// if (flag === 1) {
//   console.log("3 присутствует");
// } else {
//   console.log("3 отсутствует");
// }
