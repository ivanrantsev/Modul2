let arr = new Array(),
    arr1 = [];

let lessons = ['история', 'химия', 'математика'];
console.log(lessons);
console.log(lessons[0]);
console.log(lessons[1]);
console.log(lessons[2]);
console.log(lessons[89]);//undefined

lessons[2] = 'русский язык';
console.log(lessons);;

let lessonLength = lessons.length;
console.log(lessonLength);

for (let i = 0; i < lessons.length; i++) {
    console.log("Lesson: " +  lessons[i]);
}


//стек
let temp = lessons.pop(); //забирает и возвращает последнее значение
console.log(temp);
console.log(lessons);
lessons.push("информатика"); //добавляет в конец элемент
console.log(lessons);

//очередь
lessons.shift(); //забирает первый элемент
lessons.unshift("геометрия"); //вставляет первый элемент
console.log(lessons);

/*
console.time("1000000 push/pop");
let test = [];
for (let i = 0; i<10000; i++) {
    test.push(i);
}
for (let i = 0; i<10000; i++) {
    test.pop(i);
}
console.timeEnd("1000000 push/pop");



console.time("1000000 unshift/shift");
let test2 = [];
for (let i = 0; i<10000; i++) {
    test2.unshift(i);
}
for (let i = 0; i<10000; i++) {
    test2.shift(i);
}
console.timeEnd("1000000 unshift/shift");
*/
/*
lessons.length = 2;
console.log(lessons);
lessons.length = 3;
console.log(lessons);*/

let str = "+7-921-567-81-46";
let arr2 = str.split("-");
console.log(arr2);

let str2 = arr2.join(" ");
console.log(str2);

temp = lessons.splice(1, 1); // с какого начинать вырезать и сколько
console.log(lessons);
console.log(temp);

temp = lessons.slice(0,2); // c какого начинать копировать и каким заканчивать
console.log(lessons);
console.log(temp);

lessons.reverse();
console.log(lessons);

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let arrC = arrA.concat(arrB);
console.log(arrC);


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]);

let wtfArr = [1, true, 'asd', undefined, [23, 45]];
for (let i=0; i < wtfArr.length; i++) {
    console.log(typeof wtfArr[i]);
    if (Array.isArray(wtfArr[i])) {
        console.log(wtfArr[i] + ' Это массив');
    }
}

console.log(arrA.indexOf(2));
console.log(arrA.lastIndexOf(1));

console.log(lessons.includes("химия"));

let pics = ['fb.png', 'inst.png'];

for (let i = 0; i < pics.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', 'img/' + pics[i]);
    document.getElementById('slider').appendChild(img);
}


let arrNum = [2, 3, 7, 13, 5, 0, 20]; //сортировка пузырьком
for (let i = 0; i < arrNum.length-1; i++) {
    for (let j = 0; j < arrNum.length - 1 - i; j++) {
        if(arrNum[j] > arrNum[j + 1]) {
            let temp = arrNum[j];
            arrNum[j] = arrNum[j + 1];
            arrNum[j + 1] = temp;
        }
    }
}
console.log(arrNum);

