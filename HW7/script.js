//ЗАДАНИЕ 1
function startTime() {
    let time = new Date(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    h = addNull(h);
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
        goods.innerHTML = `
        <img style="width:200px" src="${element['img']}">
        <h2><strong>${element['name']}</h2>
        <p>${element['description']}</p>
        <h2>Цена: <strong>${element['price']}</h2>`;
        catalog[0].append(goods);
    });
}
getCatalog(arrItems);


//ЗАДАНИЕ 3 //
function getTrafficLight () {
   
    let green = document.getElementById("green"),
        red = document.getElementById("red"),
        yellow = document.getElementById("yellow");

    red.style.opacity = 1;
    green.style.opacity = 0.2;
    yellow.style.opacity = 0.2;

    setTimeout(function () {
        green.style.opacity = 0.2;
        red.style.opacity = 0.2;
        yellow.style.opacity = 1;
    },2000);

    setTimeout(function () {
        
        green.style.opacity = 1;
        red.style.opacity = 0.2;
        yellow.style.opacity = 0.2;
    },4000);

    setTimeout(function () {
        
        green.style.opacity = 0.2;
        red.style.opacity = 0.2;
        yellow.style.opacity = 1;
    },6000);


}

setInterval("getTrafficLight()", 8000);

getTrafficLight();



//ЗАДАНИЕ 4
function getTimeToNextYear() {
    let now = new Date(),
        newYear = new Date(now.getFullYear()+1, 0, 1),
        diff = newYear - now;
    diff = Math.floor(diff / 1000); 
    let d = Math.floor(diff/86400),
        h = Math.floor(diff % 86400 / 3600),
        m = Math.floor(diff % 86400 % 3600 / 60);
        s = diff % 86400 % 3600 % 60;
    let day = " дней ",
        hours = " часов ",
        minutes = " минут ",
        seconds = " секунд";
    if (d%10 === 1 && (d%100 < 11 || d%100 > 20)) {
        day = " день ";
    } else if (d%10 >= 2 && d%10 <= 4 && (d%100 < 11 || d%100 > 20)) {
        day = " дня ";
    }
    if (h%10 === 1 && (h%100 < 11 || h%100 > 20)) {
        hours = " час ";
    } else if (h%10 >= 2 && h%10 <= 4 && (h%100 < 11 || h%100 > 20)) {
        hours = " часа ";
    }
    if (m%10 === 1 && (m%100 < 11 || m%100 > 20)) {
        minutes = " минута ";
    } else if (m%10 >= 2 && m%10 <= 4 && (m%100 < 11 || m%100 > 20)) {
        minutes = " минуты ";
    }
    if (s%10 === 1 && (s%100 < 11 || s%100 > 20)) {
        seconds = " секунда";
    } else if (s%10 >= 2 && s%10 <= 4 && (s%100 < 11 || s%100 > 20)) {
        seconds = " секунды";
    }
    h = addNull(h);
    m = addNull(m);
    d = addNull(d);
    s = addNull(s);
    document.getElementById('newYear').innerHTML = "<p> Врем до Нового года: " + d + day + h + hours + m + minutes + s + seconds + "</p>";
    setTimeout('getTimeToNextYear()', 1000);
  }
  