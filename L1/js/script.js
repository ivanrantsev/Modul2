"use strict"

console.log("Выводимая информация");

//Объявление переменной

var login;
let password;


//Определение переменной

login = "admin";
password = "123456";

console.log(login);

//Переопределение значения

login = 123;
console.log(login);

//Инициализация переменной

const CONST_VALUE = 10;
let temp = 5;

let x = 4, y = 5, a = 2;


/*alert(3 + 2 + 1);
[1, 2].forEach(alert);*/

/*стили задания переменной
snake_case;
camelCase;*/

//Числа number
let height = 19;
let width = 14.4569;


//Строки string
let str1 = "Строка";
let str2 = "Стр\\ока2"; // символ / - экранирует символы за ним
console.log(str1, str2);


//Логический boolean
let active = true;
let stopped = false;


//Значение не определено null
let unknowValue = null;
console.log(unknowValue);


//Значение не присвоено undefined;
let undefinedValue;
console.log(undefinedValue);

console.log(typeof active);
let q = parseInt("123.81fddffdfdd") //достает из строки целое число
let f = parseFloat("123.81fddffdfdd") //достает из строки дробное число
console.log(f);


//Операторы


//Арифметические
// + - * / % **

let num = 143 % 100;
console.log(num); // 1


let num2 = 40;
console.log(num * num2);

console.log(2 + 5); //7
console.log(2 + "5"); // "25"
console.log(+"2" + 5); // "25"
console.log("sad" + "5"); // "sad5"
console.log(5 / "d"); // "NaN"

console.log(isNaN("ast")); //true
console.log(isNaN("25")); //false
console.log(isNaN("25rfr")); //true
console.log(isNaN(true)); //false
console.log(isNaN(false)); //false
console.log(5 / 0); //Infinity
console.log(-5 / 0); //-Infinity
console.log(isFinite(5 / 0));   //false
console.log(isFinite(5 / 1)); //true

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


/*Операторы присваивания
= += -= *= /= %= */
let b = 10;
a += 20; // 30

/*Операторы сравнения
> < <= >= == === != !==    */ 


//Операторы инкремент ++ и декремент --

let num1 = 2;
num2 = 2
console.log(++num1); //3
console.log(num2++); //2
console.log(num2); //3

/* ?:
(условие) ?выражение_1:выражение_2ж
*/
 let t = -5
 let res = (t < 0) ? -t : t;
 console.log(t); //5


 let data = prompt("Enter login, login");
 console.log(data);

 let answer = confirm("Questions?");
 console.log(answer);

