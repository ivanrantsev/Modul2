let domContainer = document.getElementById("slider");
let arr = [
   'img/fb.png',
    'img/inst.png',
    'img/vk.png',
];
let slider = new Slider(domContainer, arr);
slider.run();

let domContainer2 = document.getElementById("slider2");

let arr2 = [
    'img/fb.png',
    'img/inst.png',
];

let slider2 = new Slider(domContainer2, arr2);
slider2.run();