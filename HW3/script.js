//Задание 1
console.log("Задание 1");
let A = [12, 4, 3, 10, 1, 20],
    B = [-3, -7, -100, -33],
    C = A.concat(B);

console.log(C);


//Задание 2
let arr = [null, null, 0, null, 1, 0, 1, null, 1];
for (let i = 0; i <= 2; i++) {
    let rowContent = '';
    for (let j = i * 3; j <= i * 3 + 2; j++) {
        switch (arr[j]) {
            case 0: 
                rowContent += '<td>0</td>';
                break;
            case 1: 
                rowContent += '<td>X</td>';
                break;
            default: 
                rowContent += '<td></td>';
        }
    }
    document.write(`<tr>${rowContent}</tr>`);
}


//Задание 3
console.log("Задание 3");
let arrNum = [12, 4, 3, 10, 1, 20];
for (let i = 0; i < arrNum.length-1; i++) {
    for (let j = 0; j < arrNum.length - 1 - i; j++) {
        if(arrNum[j] > arrNum[j + 1]) {
            let temp = arrNum[j];
            arrNum[j] = arrNum[j + 1];
            arrNum[j + 1] = temp;
        }
    }
}
let max = arrNum.pop(),
    min = arrNum.shift();
console.log(arrNum);


//Задание 4
console.log("Задание 4");
let count = 0;
for (let i1 = 0; i1 < 10; i1++) {
    for (let i2 = 0; i2 < 10; i2++) {
        for (let i3 = 0; i3 < 10; i3++) {
            for (let i4 = 0; i4 < 10; i4++) {
                for (let i5 = 0; i5 < 10; i5++) {
                    for (let i6 = 0; i6 < 10; i6++) {
                        if (i1 + i2 + i3 === i4 + i5 + i6) {
                            count++;
                        }
                    }
                }
            }
        }
    }
}
console.log(count - 1);


//Задание 5
var time = performance.now();
console.log("Задание 5");
let weights = [2,7,4,1,8,1];
while (weights.length > 1) {
    console.log(weights);
    let max1 = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] > max1) {
            max1 = weights[i];
        }
    }
    let index1 = weights.indexOf(max1),
        temp1 = weights.splice(index1,1),
        max2 = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] > max2) {
            max2 = weights[i];
        }
    }
    let index2 = weights.indexOf(max2),
        temp2 = weights.splice(index2,1);
    if (temp1[0] !== temp2[0]) {
        weights.push(Math.abs(temp1[0] - temp2[0]));
    }
}
if (weights.length === 0) {
    console.log(0);
}
else {
    console.log(weights[0]);
}
time = performance.now() - time;
console.log('Время выполнения = ', time);


////////////////
/*var time = performance.now();
let weights = [2,7,4,1,8,1];
while (weights.length > 1) {
    weights.sort(function(a,b){ 
        return a - b
      });
    let temp = weights.splice(-2);
    if (temp[0] !== temp[1]) {
        weights.push(Math.abs(temp[0] - temp[1]));
    }
}
if (weights.length === 0) {
    console.log(0);
}
else {
    console.log(weights[0]);
}
time = performance.now() - time;
console.log('Время выполнения = ', time);*/