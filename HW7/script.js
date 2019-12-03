//ЗАДАНИЕ 1
function startTime() {
    let time = new Date(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    m = addNull(m);
    s = addNull(s);
    document.getElementById('time').innerHTML = "<span style = 'color: red;'>" + h + "</span>" + ":" + "<span style = 'color: blue;'>" + m + "</span>" + ":" + "<span style = 'color: green;'>" + s + "</span>";
    setTimeout('startTime()', 1000);
}

function addNull(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


//ЗАДАНИЕ 2
let product = {
    img: "img.png",
    name: "Product",
    description: "Text ".repeat(15),
    price: 1234 + " $"
}

let arrItems = [];
for (let i = 0; i < 12; i++) {
    arrItems.push(product);
}

function getCatalog(arrItem) {
    let catalog = document.getElementsByClassName("catalog");
    arrItem.forEach(element => {
        let goods = document.createElement("div");
        goods.style.cssText = "width:200px; margin: 12px";
        goods.innerHTML = `<img style="width:200px" src="${element['img']}">
        <h2><strong>${element['name']}</h2>
        <p>${element['description']}</p>
        <h2>Цена: <strong>${element['price']}</h2>`;
        catalog[0].append(goods);
    });
}
getCatalog(arrItems);


//ЗАДАНИЕ 3 //
var scaleElem = document.getElementById('par_mak');
var addClass = true;

setInterval(addClassToScaleElem, 1000);

function addClassToScaleElem( ) {
  var classList = scaleElem.classList;
  if (addClass) {
    classList.add('infi_anim');
  } else {
    classList.remove('infi_anim');
  }
  addClass = !addClass;

}
setInterval(addClass,2000);
function addClass() {
    let redClassList = getElementsByClassName("red").classList,
        yellowClassList = getElementsByClassName("yellow").classList,
        greenClassList = getElementsByClassName("yellow").classList,
        activeRed = true,
        activeYellow = false,
        activeGreen = false,
        up = true;
    if (activeRed) {
        up = true;
        activeYellow = false;
        activeGreen = false;

    }
} 
/*
//ЗАДАНИЕ 4
console.log("Задание 4");
let f = 1;
function getFaktorial(n) {
    if (n > 0) {
        f *= n;
        getFaktorial(n-1);
    }
    return f;
}
console.log(getFaktorial(3));

//ЗАДАНИЕ 5
console.log("Задание 5");
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
arr.sort(function(n1,n2) {
    return n1.price - n2.price;
});
console.log(arr);*/