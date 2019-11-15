//Задание 1
function z1 () {
    let month = document.getElementById('month').value;
    if (month === "Январь" || month === "Февраль" || month === "Декабрь") {
        alert("Зима");
    }
    else if (month === "Март" || month === "Апрель" || month === "Май") {
        alert("Весна");
    }
    else if (month === "Июнь" || month === "Июль" || month === "Август") {
        alert("Лето");
    }
    else {
        alert("Осень");
    }
}


//Задание 2
function z2 () {
    let length = parseFloat(document.getElementById('length').value),
        unit = document.getElementById('unit').value;
    if (unit === "дециметр") {
        alert(length * 0.1 + " м.");
    }
    else if (unit === "километр") {
        alert(length * 1000 + " м.");
    }
    else if (unit === "метр") {
        alert(length + " м.");
    }
    else if (unit === "сантиметр") {
        alert(length * 0.01 + " м.");
    }
    else if (unit === "миллиметр") {
        alert(length * 0.001 + " м.");
    }
}

//Задание 3
function z3 () {
    let number = parseInt(document.getElementById('number').value),
        otr = "Отрицательное ",
        pol = "Положительное ",
        tre = "трехзначное ",
        dvu = "двузначное ",
        odno = "однозначное ",
        num = "число",
        nul = "ноль";
    if (number <= -100) {
        alert(otr + tre + num);
    }
    else if (number <= -10 && number >= -99) {
        alert(otr + dvu + num);
    }
    else if (number < 0 && number > -10) {
        alert(otr + odno + num);
    }
    else if (number === 0) {
        alert(nul);
    }
    else if (number >= 100) {
        alert(pol + tre + num);
    }
    else if (number >= 10 && number <= 99) {
        alert(pol + dvu + num);
    }
    else if (number > 0 && number < 10) {
        alert(pol + odno + num);
    }
}

//Задание 4

console.log("Задание 4");
let s = 0;
for (let i = 1; i <=100; i++) {
    s = i;
    if (s % 3 === 0 && s % 5 !== 0) {
        s = "Three";
    }
    else if (s % 3 !== 0 && s % 5 === 0) {
        s = "Five";
    }
    if (s % 3 === 0 && s % 5 === 0) {
        s = "ThreeFive";
    }
    console.log(s);
}


//Задание 5
function z5 () {
    let year = parseInt(document.getElementById('year').value);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        alert("Год високосный")
    }
    else { 
        alert("Год не високосный");
    }
}

//Задание 6
function z6 () {
    console.log("Задание 6");
    let plates = parseInt(document.getElementById('plates').value),
        cleanser = parseInt(document.getElementById('cleanser').value);
    if (plates === 0) {
        alert("Мыть нечего. Моющего средства осталось: "  + cleanser + " мл.");
    }
    else if (cleanser === 0) {
        alert("Моющего средства нет. Тарелок осталось: " + plates);
    }
    else {
        for (let i = 1; i <= plates; i++) {
            cleanser -= 0.5;
            console.log(cleanser);
            if (cleanser === 0 && plates === i) {
                alert("Все помыли и средство закончилось!")
            }
            else if (cleanser === 0) {
                alert("Тарелок осталось: " + (plates - i));
                break;
            }
            else if (plates === i) {
                alert("Моющего средства осталось: "  + cleanser + " мл.");
            } 
        }
    }
}