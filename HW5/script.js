//ЗАДАНИЕ 1
console.log("Задание 1");
function compareArray (arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return("Массивы не равны");
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return("Массивы не равны");
            }
        }
        return ("Массивы равны");
    }
}
console.log(compareArray([1,2,3,4],[1,"2",3,4]));

//ЗАДАНИЕ 2
console.log("Задание 2");
function range (start, finish, step = 1) {
    let arr = [];
    for (let i = start; i <= finish; i+=step) {
        arr.push(i);
    }
    return(arr);
}
console.log(range(1,10,2));


//ЗАДАНИЕ 3 //
console.log("Задание 3");
let student = {
    name: "Ivan",
    subname: "Ivanov",
    age: 25,
    hobby: ["sport", "IT", "literature"],
    university: "ITMO"
};

function getStudentData (obj) {
    for (let i in obj) {
        console.log(i + ": " + obj[i]);
    }
}
getStudentData(student);


//ЗАДАНИЕ 4
console.log("Задание 4");
let glas = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"],
    soglas = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"],
    wordLength = Math.floor(Math.random() * 3) + 3;
function arrayRandElement(symbols) {
    var rand = Math.floor(Math.random() * symbols.length);
    return symbols[rand];
}
let word = arrayRandElement(glas.concat(soglas));
for (let i = 1; i < wordLength; i++) {
    if (glas.indexOf(word[i-1]) === -1) {
        word += arrayRandElement(glas);
    }
    else {
        word += arrayRandElement(soglas);
    }
}
console.log(word);