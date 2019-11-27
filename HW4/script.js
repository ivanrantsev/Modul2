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

//ЗАДАНИЕ 4
console.log("Задание 4");
let stroka = "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье",
    errorWord = "Срида",
    arr = stroka.split(" ");
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === errorWord[j]) {
            count++;
        }
        if (j - count > 0) 
            break;
        if (count === errorWord.length - 1) 
            console.log(arr[i]);
    }
    
}
