var checked = false;
/*if (условие) {
    выражения, выполняющиеся при выполнении условия
}*/
if (checked) {
    console.log(checked);
}
console.log("checked: " + checked);

let age = 23;

if (age < 18) {
    console.log("Вы не можете попасть на сайт");
}
else {
    console.log("Welcome!");
}

let season = "summer";
if (season === "summer") {
    document.body.style.backgroundColor = "green";
}
else if (season = "winter") {
    document.body.style.backgroundColor = "white";
}
else if (season = "autumn") {
    document.body.style.backgroundColor = "yellow";
}
else if (season = "spring") {
    document.body.style.backgroundColor = "pink";
}
else {
    console.log("Некорректный сезон");
}

let num = 2;
switch (num) {
    case 1: //num === 1
        console.log(1);
        break;
    case 2: //num === 2
        console.log(2);
        break;
    default:
        console.log("что-то")
}


let day = "sunday";
if (day === "sunday" || day === "saturday") {
    console.log("Weekend");
}

let a = 12,
    b = 56,
    c = 45;
if (c > a && c < b) {
    console.log("a C b")
}

if (!checked) {
    console.log("checked = false")
}

/*let pwd = null;
while (pwd != "admin") {
    pwd = prompt("Введите пароль");
}

/*while (true) {
    alert("text");
}*/
a = 5;
do {
    console.log(a);
    a--;
} while (a);

/*let attemptCount = 5;
let answer = 456;
for (let i=1; i < attemptCount; i++) {
    let data = prompt("Введите код");
    if(parseInt(data) === answer) {
        alert("Вы угадали");
        break;
    }
    else {
        alert("Осталось попыток: " + (attemptCount - i));
    }
}*/

for (let i = 0; i < 10; i++) {
    if (i%2) {
        continue;
    }
    console.log(i);
}

/*let salary = parseInt(prompt("Ваш оклад")),
    workingDays = parseInt(prompt("количество рабочих дней в месяце")),
    colOtrDays = parseInt(prompt("количество отработанных рабочих дней в месяце")),
    result;
result = Math.round(salary / workingDays * colOtrDays * 0.87);
alert("Ваша чистая зп " + result);*/

/*let lang = +prompt("Выберите язык:\n 1 - Русский \n 2 - Английский \n 3 - Немецкий", "1");
switch(lang) {
    case 1:
        alert("Добро пожаловать");
        break;
    case 2:
        alert("Welcome");
        break;
    case 3:
        alert("Willcommen");
        break;
    default:
        alert("Очень жаль")*/



let sum = 0;
    for (let i = 0; i<=100; i++) {
        sum+=i;
    }
console.log(sum);



let content = '';
for (let i = 0; i < 20; i++) {
    let color = "white";
    if (i%2 === 0) {
        color = "gray";
    }
    content += `<tr><td style = "background-color: ${color}">100</td></tr>`;
}
document.write(`<table>${content}</table>`);

