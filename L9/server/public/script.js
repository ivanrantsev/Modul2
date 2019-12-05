import {myUtils} from "./myUtils.js";

let mass = [1,2,3,4,5,6];
console.log(mass.toString());
myUtils.remove(mass,5);
console.log(mass.toString());

let str = "temp";
console.log(str);
let newStr = myUtils.repeat(str, 3);
console.log(newStr);

let array = [
    {name: "Sasha", age: 18},
    {name: "Ivan", age: 21},
    {name: "John", age: 20},
];

console.log(myUtils.pluck(array, "name"));


let num1 = 10, 
    num2 = 20;
myUtils.sum(num1, num2, function(res) {
    console.log(res);
});