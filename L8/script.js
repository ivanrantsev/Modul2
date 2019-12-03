let example = document.querySelector(".example");
console.log(example.offsetParent); // dom .container

console.log(example.offsetTop); //20px padding .container

console.log(example.offsetWidth); 
console.log(example.offsetHeight);

console.log(example.clientLeft);  //border
console.log(example.clientTop);

console.log(example.clientHeight);
console.log(example.clientWidth); //visible content + padding

console.log(example.scrollHeight);
console.log(example.scrollWidth); //all content + padding


console.log(example.scrollTop); //размер насколько прокрутили
console.log(example.scrollLeft);

console.log(window.innerWidth); //vw
console.log(window.innerHeight); //vh

console.log(document.documentElement.clientWidth); //
console.log(document.documentElement.clientHeight); //


console.log(window.pageXOffset);
console.log(window.pageYOffset);

//Прокрутки
//Абсолютное
example.scrollTo(0, 86);
//относительное
example.scrollBy(0, -70);

//прокрутка до области видимости
document.querySelector(".lighter").scrollIntoView(true);

//координаты тносительно документа
let rect = example.getBoundingClientRect();
console.log(rect.top);
console.log(rect.bottom);
console.log(rect.left);
console.log(rect.right);
console.log(rect);

let style = window.getComputedStyle(example);
console.log(style.border);

function myFunction(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.pageX);
    console.log(e.pageY);

}

function myFunction1(e) {
    console.log("Обработчик клика");
}

example.onclick = myFunction1;