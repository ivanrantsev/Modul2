let user1 = {
    name: "Ivan",
    age: 25,
}
let user2 = user1;
user2.name = "Masha";
console.log(user1.name);

let user3 = {};
for (let key in user1) {
    user3[key] = user1[key];
}
user3.name = "Petr";
console.log(user1.name);
console.log(user3.name);

let user4 = {};
Object.assign(user4,user1);
user4.name = "Sasha";
console.log(user1.name);
console.log(user4.name);

let user5 = {...user1};
user5.name = "Dasha";
console.log(user1.name);
console.log(user5.name);

var x = 5;
let y = 8;
function displaySquere(z) { // z, result - локальная переменная;
    let result = x * y * z;
    console.dir(displaySquere);
    console.log(result);
}
displaySquere(3);

function display() {
    zzz = 123;
    console.log(zzz);
}

let num1 = 3, num2 = 4;

function display2() {
    var num1 = 10;
    console.log(num1);
    let num2 = 8;
    console.log(num2);
}
display2();

function outName(name, lastname) {
    function getName() {
        return name + " " + lastname;
    }
    return getName;
} 
let getName = outName("Ivan", "Ivanov");
console.log(getName());

function createCounter() {
    let i = 0;
    return function() {
        return ++i;
    };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());

function diff(a) {
    return function(b) {
        return a-b;
    };
}

console.log(diff(3)(2));

/*let arr=[];
for (var i = 0; i < 5; i++) {
    arr.push(function() {
        return i;
    });
}

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
console.log(arr[3]());
console.log(arr[4]());
*/
let arr=[];
for (let i = 0; i < 5; i++) {
    arr.push(function() {
        return i;
    });
}

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
console.log(arr[3]());
console.log(arr[4]());





function myFunc() {
    return this;
}
console.log(myFunc());


//Метод объекта
let myObj = {
    propA: 27,
    getA: function() {
        return this;
    }
};

console.log(myObj.getA());

let name = "Sasha";
let user = {
    name,
    getUserName() {
        return this.name;
    }
};

console.log(user.getUserName());
let func = user.getUserName;
console.log(func.call({name:"Petr"}));
console.log(func.apply(user));

arr = [1,2,3,4];
console.log(Math.min.call(null,1,2,3,4));

//Рекурсия
function writeN(n) {
    if (n >= 0) {
        console.log(n);
        writeN(n-1);
    }
}

writeN(3);


arr = [1,2,3,11,22,33];
arr.sort((n1, n2) => {return n1-n2;});
console.log(arr);