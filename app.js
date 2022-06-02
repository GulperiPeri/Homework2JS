//1 Напишите программу, которая считает количество секунд в часе.
"use strict";
const min = 60;
const sec = 60;
const secondsInOneHour = min * sec;

console.log(secondsInOneHour);

//2 Создайте переменную myNumber и присвойте ей значение 2022. Выведите значение этой
//переменной на экран с помощью метода alert.
("use strict");
let myNumber = 2022;
alert(myNumber);

//3 Спросите имя пользователя с помощью метода prompt. Выведите сообщение на страницу
//с помощью document.write : “Рад знакомству {имя пользователя}!”.
("use stcict");
let message = prompt("What is your name?");
let username = message;
document.write(`Nice to meet you, ${username}!`);

//4 Даны два числа a, b. Написать программу, которая считает среднее арифметическое
//двух чисел.

("use strict");
let a = 5;
let b = 95;
let c = (a + b) / 2;
console.log(c);

//5. Спросите пользователя ввести любое число. Ваша задача вывести
//следующий по счету число.
//*Пример: Пользователь вводит число 10. Программа выводит число 11.*

("use strict");
const myNum = prompt("Please enter any number.");
let message1 = "1";
let number = +myNum + +message1;
console.log(number);

//6. Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
//- Имя
//- Возраст
//- Список друзей
//- Почтовый адрес
//- Электронный адрес

const user = {
  name: "Gulperi",
  age: 34,
  friends: "Aigul, Gulipa",
  postIndex: 1234,
  emailAdress: "gulperi.dzhylkychieva.alt",
};
console.log(user);

// 7. Создайте объект описывающий блог-пост на сайте:
//- Название поста
//- Автор поста
//- Дата публикации поста
//- Тело поста (содержит текст поста)
//- Картинка поста (содержит url картинки)
//- Теги поста

const blogPost = {
  postName: "Article",
  postAuthor: "Gulperi Dj",
  publishedDate: "26.05.2022",
  postBody: "Where the world builds software",
  postImg: "https://github.com/",
  postTags: ["Article", "Gulperi", "world"],
};

// 8.Создайте массив с именами пользователей.

let users = ["Nikita", "Lynette", "Deraz"];
console.log(users);

//9.Создайте массив с url адресами на разные картинки.

let imgLink = [
  "https://nikastroy.ru/wp-content/uploads/6/6/9/669a4516c3c0b8f911513d5d356b1e01.jpeg",
  "https://100zaitsev.ru/wp-content/uploads/sobol-kunica-rosomaha-kartinki-foto-video5.jpg",
  "https://fotovmire.ru/wp-content/uploads/2020/01/28707/akvalangist-i-rybki-u-rifa.jpg",
];
console.log(imgLink);

//10.Создайте массив содержащий объекты описывающие блог-посты (схема объектов идентична как в пункте 7.

const post = [
  {
    postname: "Article",
    postAuthor: "Gulperi Dj",
    publishedDate: "26.05.2022",
    postBody: "Where the world builds software",
    postImg: "https://github.com/",
    postTags: ["Article", "Gulperi", "software"],
  },
];
