function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

let n = 15,
    m = 52,
    a = 11,
    b = 12,
    res2 = sum(n, m);
console.log(res2);

let res = sum(a,b);
console.log(res);

function greeting (userName) {
    userName = userName || "user";
    console.log("Hello, " + userName);
    return;
    console.log('as');
}
greeting();


function greeting2 (userName) {
    if(!userName) {
        console.log("Не задано имя пользователя");
        return;
    }
    console.log("Hello, " + userName);
}

greeting2();
greeting2("Alex");



function getMin(num1, num2) {
    if (!num1 || !num2) {
        console.log("Числа не введены");
        return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        console.log("Введены не числа");
        return;
    }
    return (num1 < num2) ? num1 : num2; 
}

console.log(getMin(123,3));


function arrSum(someArr) {
    if(!Array.isArray(someArr)) {
        console.log("Передали не массив");
        return
    }
    let sum = 0;
    for (let i = 0; i < someArr.length; i++) {
        sum += someArr[i];
    }
    return(sum);
}

function printUserInfo() {
    console.log(arguments);
}

printUserInfo("Sasha", "SPB", "454785", "sff@ffd.tg");

function min() {
    let min = arguments[0];
    for(let i = 1; i<arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
        return(min);
    }
}

function printUserInfo2 (name, age, ...arrOther) {
    console.log(name);
    console.log(age);
    console.log(arrOther);
}
printUserInfo2("Sasha", "SPB", "454785", "sff@ffd.tg");

//anonimus function - функц. выражения
let subNums = function(a,b) {
    return(a-b);
};

console.log(subNums(25,10));

+function(a,b) {
    console.log(a - b);
} (2,5);

//стрелочные функции
subNums = (a, b) => a - b;
console.log(subNums(24,10));

/*function delay(cb) {
    setTimeout(() => {
        cb();
    }, 2000);
}

delay (() => {
    console.log("Какой-то текст через 2 сек.");
});*/



let obj1 = new Object();
let obj2 = {};
let num = 123;

let article = {
    id: 1,
    title: "Photo",
    " ":"asdf",
    null: null,
    true: true,
    "null": 1,
    num,
};

console.log(article);
console.log(article.id);
console.log(article.title);
console.log(article.null);
console.log(article[" "]);
console.log(article.true);
console.log(article.num);

article.img = "/dimg.png";
console.log(article);
delete article.img;
console.log(article);

console.log("img" in article);
console.log("title" in article);


console.log(article.hasOwnProperty("title"));

for (let key in article) {
    console.log(key + " " + article[key]);
}

arr4 = [1,2,3,4];
console.log(Object.keys(article).includes("2"));
console.log(Object.entries(article));
console.log(Object.values(article));


let articles = [{
    id: 1,
    title: "JS",
    description: "...",
    author: "John",
}, {
    id: 2,
    title: "PHP",
    description: "...",
    author: "Sasha",
}, {
    id: 3,
    title: "HTML",
    description: "...",
    author: "Mike",
}];

console.log(getData(articles, "author", "Mike"));
console.log(getData(articles, "id" ,"1"));

function getData (arr, propName, propValue) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][propName] === propValue) {
            arrRes.push(arr[i]);
        }
    }
    return arrRes;
}


//Деструктуризация
let userData = ["root", "123", 56, "Peter"];
let [login, pass, age, ...other] = userData;
console.log(login);
console.log(other);

let {id, title:xxx, description, author} = articles[0];
console.log(id);
console.log(xxx);
console.log(description);
console.log(author);

let menu = {
    items: [{
        label: "О нас",
        href: "about.html",
        items: [{
            label: "Контакты",
            href: "contacts.html",
        }, {
            label: "Продукты",
            href: "products.html",
        }]
    }, {
        label: "О вас",
        href: "aboutself.html",
    }]
};

let obj = {
    a1: 1,
    b1: 2,
    c1: {
        d1: 8,
        e1: 3,
    }
};

let {a1, b1, c1:{d1, e1}} = obj;
console.log(a1);
console.log(b1);
console.log(d1);



