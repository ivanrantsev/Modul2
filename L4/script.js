let str1 = "",
    str2 = '',
    str3 = ``;
    str4 = "ab";
console.log(str4.toUpperCase());
console.log("ADC".toLowerCase());
console.log(str4.startsWith("a"));
console.log(str4.endsWith("a"));
console.log(str4.repeat(4));
console.log(str4.includes("ab"));

let str5 = "9999";
console.log(str5.padStart(6, "0"));
console.log(str5.padEnd(6, "0"));
console.log(str5.padStart(27, "0"));
console.log(str4.indexOf("c"));
console.log(str4.indexOf("b"));

let str6 = str5.padEnd(27, "hello");
console.log(str6);
console.log(str6.substr(3, 6));
console.log(str6.substring(2, 5));

console.log(str6.charCodeAt(0));
console.log(String.fromCharCode(57));

//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
let str7 = "Я люблю JS!!!";
let regExp = new RegExp("лю","");
let result = str7.search(regExp);
console.log(result);

regExp = /Лю/i; // i делает регулярку устойчивой к регистру
result = str7.search(regExp);
console.log(result);

str7 = "Ой-ой-ой";
regExp = /Ой/ig; // g - интересуют все вхождения
result = str7.match(regExp);
console.log(result);

str7 = "Привет мир!!!";
regExp = /мир/i;
console.log(regExp.test(str7));

str7 = "Ой-ой-ой";
regExp = /Ой/ig; // g - интересуют все вхождения
console.log(regExp.exec(str7));
console.log(regExp.exec(str7));
console.log(regExp.exec(str7));
console.log(regExp.exec(str7));

// . - любой символ, кроме \n
regExp = /cs.4/;
console.log("css4".match(regExp));
console.log("cs-4".match(regExp));
console.log("cs 4".match(regExp));
console.log("cs\n4".match(regExp));

regExp = /c.s4/s; // s - . может быть и \n
console.log("css4".match(regExp));
console.log("cs-4".match(regExp));
console.log("cs 4".match(regExp));
console.log("cs\n4".match(regExp));

str7 = "Жили были";
regExp = /[жб][иы]ли/ig;
console.log(str7.match(regExp));

str7 = "Саша + Маша также как Даша + Паша";
regExp = /[А-Я]аша/ig;
console.log(str7.match(regExp));

str7 = "Этот компьютер нам обошелся в 10000 руб.";
regExp = /[^А-я .]/ig; // ^ - все кроме
console.log(str7.match(regExp));

str7 = "My name is Alex";
regExp = /\w\w\s\w\w\w\w/ig; // \w - A-Z, a-z, 0-9, _, $ // \s - . ,-+ итд//


regExp = /\b\w\w\b/ig; // \b - граница слова
console.log(str7.match(regExp));

regExp = /\w\w/ig;
console.log(str7.match(regExp));

str7 = "MEVN стек включает: HTML, CSS, JS";
regExp = /(HTML|CSS|JS)/ig; // | - OR
console.log(str7.match(regExp));

str7 = "Этот компьютер нам обошелся в 10000 руб.";
regExp = /([^А-я .]|о)/ig;
console.log(str7.match(regExp));


//КВАНТИФИКАТОРЫ
str7 = "100500 попугаев съели 500100 бананов";
regExp = /\d/ig; // \d = [0-9] // у wsd есть обратные WSD
console.log(str7.match(regExp));

str7 = "100500 попугаев съели 500100 бананов";
regExp = /\d{1,4}/ig; // 
console.log(str7.match(regExp));

str7 = "100500 попугаев съели 500100 бананов";
regExp = /\d{4}/ig; // 
console.log(str7.match(regExp));

str7 = "100500 попугаев съели 500100 бананов";
regExp = /\d+/ig; // + = {1, +inf}
console.log(str7.match(regExp));

str7 = "100500 попугаев съели 500100 бананов";
regExp = /^\d+/ig; // + = {1, +inf}
console.log(str7.match(regExp));

str7 = "100500 попугаев съели 500100 бананов";
regExp = /[а-я]+$/ig; // + = {1, +inf}
console.log(str7.match(regExp));

str7 = "100 10 1";
regExp = /10*/ig; // * = {0, +inf}
console.log(str7.match(regExp));

str7 = "Привет. Приветик.";
regExp = /[а-я]{6}(ик)?/ig; // ? = {0, 1}
console.log(str7.match(regExp));

str7 = "Я взрослый (18+)!";
regExp = /\(\d+\+\)/ig;
console.log(str7.match(regExp));

str7 = "7 (921) 911-51-97";
regExp = /7 \(\d{3}\) \d{3}-\d{2}-\d{2}/ig;
console.log(regExp.test(str7));

str7 = "ifmo@ifmo.ru";
regExp = /(\w+\.?)+@(\w+\.)+\w+/ig;
console.log(regExp.test(str7));
console.log(str7.match(regExp));
