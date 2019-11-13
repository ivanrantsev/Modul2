//Задание 1
let gardenArea = 10 * 100; //m2
let groundArea = 15 * 25; //m2
let emptyM2 = gardenArea % groundArea;
alert("Задание 1. Осталось незанятыми " + emptyM2 + " m2");

//Задание 2
let bigEllipseArea = 15 * 100; //cm2
let smallEllipseArea = 600; //cm2
let ringArea = bigEllipseArea - smallEllipseArea;
alert("Задание 2. Площадь кольца: " + ringArea + " cm2");


//Задание 3
alert("ЗАДАНИЕ 3");
let firstNumber = prompt("Введите 1е число");
let secondNumber = prompt("Введите 2е число");
let thirdNumber = prompt("Введите 3е число");
let minNumber = firstNumber;
if (secondNumber < minNumber) {
    minNumber = secondNumber;
}
if (thirdNumber < minNumber) {
    minNumber = thirdNumber;
}
alert("Наименьшее число: " + minNumber);

//Задание 4
alert("ЗАДАНИЕ 4");
let m = prompt("Введите число в переменную m");
let n = prompt("Введите число в переменную n");
if (Math.abs(m - 10) < Math.abs(n - 10)) {
    alert("Ближе к 10 число " + m);
}
else if (Math.abs(m - 10) > Math.abs(n - 10)) {
    alert("Ближе к 10 число " + n);
}
else if (Math.abs(m - 10) === Math.abs(n - 10)) {
    alert("Числа равноудалены от 10");
} 

//Задание 5
alert("ЗАДАНИЕ 5");
let xA = prompt("Введите координату x вершины A");
let yA = prompt("Введите координату y вершины A");
let zA = prompt("Введите координату z вершины A");
let xB = prompt("Введите координату x вершины B");
let yB = prompt("Введите координату y вершины B");
let zB = prompt("Введите координату z вершины B");
let xC = prompt("Введите координату x вершины C");
let yC = prompt("Введите координату y вершины C");
let zC = prompt("Введите координату z вершины C");
let lengthAB = (xA-xB)**2 + (yA-yB)**2 + (zA-zB)**2;
let lengthAC = (xA-xC)**2 + (yA-yC)**2 + (zA-zC)**2;
let lengthBC = (xB-xC)**2 + (yB-yC)**2 + (zB-zC)**2;
if ((lengthAB === (lengthAC + lengthBC)) ||
    (lengthBC === (lengthAC + lengthAB)) ||
    (lengthAC === (lengthAB + lengthBC))) {
    alert("Треугольник прямоугольный");
}
else { 
    alert("Треугольник не прямоугольный");
}