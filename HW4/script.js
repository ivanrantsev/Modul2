//ЗАДАНИЕ 1
console.log("Задание 1");
let str = "123456789",
    sum = 0;
for (let i = 0; i < str.length; i++) {
    sum += +str[i];
}
console.log(sum);

//ЗАДАНИЕ 2
console.log("Задание 2");
let word = "matematika",
    symbol = "a",
    newStr = '';
for (let i = 0; i < word.length; i++) {
    temp = word[i];
    if (temp === symbol) {
        temp = word[i] + word[i];
    }
    newStr += temp;
}
console.log(newStr);


//ЗАДАНИЕ 3
console.log("Задание 3");
let password = prompt("Введите новый пароль"),
    regExp = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9].*[0-9])(?=.*[a-z]).{9,}$/,
    check = (regExp.test(password));
if (check) {
    console.log("Пароль принят");
}
else {
    console.log("Пароль не удовлетворяет требованиям");
}

/*/ЗАДАНИЕ 4 /// не решил пока что
console.log("Задание 4");
let stroka = "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье",
    errorWord = "срида",
    regExp1 = /[А-Я]+/ig,
    arr = stroka.match(regExp1);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        let newWord = arr[i],
        newWord1 = arr[i].replace(newWord[j], );
        //console.log(newWord1);
    }
}
*/