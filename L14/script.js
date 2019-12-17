let arr = ['ddddddd', 'ddffggggggg', 'gg', '', 'grgrgrgrgrgrgrgrgr'];
let arr2 = arr.filter(element => {
    return element.length >= 5;
});
console.log(arr2);

let arrNum = [-2, 16, 25, -4, 0];
let arrNum2 = arrNum.filter(element => {
    return element > 0;
});
let arrNum3 = arrNum2.map(element => {
    return element ** 0.5;
});
console.log(arrNum3);


let arrNum4 = arrNum.reduce(function(prev, cur) {
    return prev + cur;
});
console.log(arrNum4);