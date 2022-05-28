//3 Спросите имя пользователя с помощью метода prompt. Выведите сообщение на страницу
//с помощью document.write : “Рад знакомству {имя пользователя}!”.
"use stcict";
let message = prompt("What is your name?");
let username = message;
document.write(`Nice to meet you, ${username}!`);
