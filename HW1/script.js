//Задание 1
function z1 () {
let gardenArea = 10 * 100; //m2
let groundArea = 15 * 25; //m2
let emptyM2 = gardenArea % groundArea;
alert("Задание 1. Осталось незанятыми " + emptyM2 + " m2")}

//Задание 2
function z2 () {
let bigEllipseArea = 15 * 100; //cm2
let smallEllipseArea = 600; //cm2
let ringArea = bigEllipseArea - smallEllipseArea;
alert("Задание 2. Площадь кольца: " + ringArea + " cm2");}


//Задание 3
function z3 () {
let firstNumber = document.getElementById('firstNumber').value;//("Введите 1е число");
let secondNumber = document.getElementById('secondNumber').value;//("Введите 2е число");
let thirdNumber = document.getElementById('thirdNumber').value;//("Введите 3е число");
let minNumber = firstNumber;
if (secondNumber < minNumber) {
    minNumber = secondNumber;
}
if (thirdNumber < minNumber) {
    minNumber = thirdNumber;
}
alert("Наименьшее число: " + minNumber);}

//Задание 4
function z4 () {
let m = document.getElementById('m').value;//("Введите число в переменную m");
let n = document.getElementById('n').value;//("Введите число в переменную n");
if (Math.abs(m - 10) < Math.abs(n - 10)) {
    alert("Ближе к 10 число " + m);
}
else if (Math.abs(m - 10) > Math.abs(n - 10)) {
    alert("Ближе к 10 число " + n);
}
else if (Math.abs(m - 10) === Math.abs(n - 10)) {
    alert("Числа равноудалены от 10");
} 
}

//Задание 5
function z5 () {
let xA = document.getElementById('xA').value;//("Введите координату x вершины A");
let yA = document.getElementById('yA').value;//("Введите координату y вершины A");
let zA = document.getElementById('zA').value;//("Введите координату z вершины A");
let xB = document.getElementById('xB').value;//("Введите координату x вершины B");
let yB = document.getElementById('yB').value;//("Введите координату y вершины B");
let zB = document.getElementById('zB').value;//("Введите координату z вершины B");
let xC = document.getElementById('xC').value;//("Введите координату x вершины C");
let yC = document.getElementById('yC').value;//("Введите координату y вершины C");
let zC = document.getElementById('zC').value;//("Введите координату z вершины C");
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
}