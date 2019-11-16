//Задание 1
console.log("Задание 1");
let A = [12, 4, 3, 10, 1, 20],
    B = [-3, -7, -100, -33],
    C = A.concat(B);

console.log(C);


//Задание 2
let area = [null, null, 0, null, 1, 0, 1, null, 1],
    rowContent1 = ``,
    rowContent2 = ``,
    rowContent3 = ``,
    box = '';
for (let i = 0; i < 3; i++) {
    box = '';
    if (area[i] === 0) {
        box = '0';
    }
    else if (area[i] === 1) {
        box = 'X';
    }
    rowContent1 += `<td>${box}</td>`;
}
for (let i = 3; i < 6; i++) {
    box = '';
    if (area[i] === 0) {
        box = '0';
    }
    else if (area[i] === 1) {
        box = 'X';
    }
    rowContent2 += `<td>${box}</td>`;
}
for (let i = 6; i < 9; i++) {
    box = '';
    if (area[i] === 0) {
        box = '0';
    }
    else if (area[i] === 1) {
        box = 'X';
    }
    rowContent3 += `<td>${box}</td>`;
}
document.write(`<table><tr>${rowContent1}</tr><tr>${rowContent2}</tr><tr>${rowContent3}</tr></table>`);


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