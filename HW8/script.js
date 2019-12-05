//ЗАДАНИЕ 1
let colorBlock = document.getElementsByClassName("colorBlock");
for (let i = 0; i < colorBlock.length; i++) {
    colorBlock[i].addEventListener("click", changeColor);
}

function changeColor(e) {
    let clickElem = e.target;
    if (!clickElem.classList.contains("green")) {
        clickElem.classList.add("green");
    } else {
        clickElem.classList.remove("green");
    }
}





//ЗАДАНИЕ 2
let buttonCount = document.getElementById("buttonCount");
buttonCount.addEventListener("click", increaseCount);

function increaseCount (e) {
    let count = +this.innerText,
        button = e.target;
    count++;
    button.innerHTML = count;
}


//ЗАДАНИЕ 3 
 let user = {
     photo: "img.png",
     name: "Name",
     lastName: "Lastname",
     comment: ""
 };

 let sendButton = document.getElementById("sendButton");
 sendButton.addEventListener("click", sendButton);

 
 function sendComment(arrItem) {
    let commentList = document.getElementById("commentList");
    
    arrItem.forEach(element => {
        let str = document.createElement("div");
        str.style.cssText = "width:200px; margin: 10px";
        str.innerHTML = `
        <img style="width:200px" src="${element['img']}">
        <p><strong>${element['name']}</p>
        <p>${element['subname']}</p>
        <p>${element['comment']}</p>`;
        commentList[0].prepend(str);
    });
}



/*
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
    } else if (h%10 >= 2 && h%10 <= 4 && (h < 11 || h > 20)) {
        hours = " часа ";
    }
    if (m%10 === 1 && (m < 11 || m > 20)) {
        minutes = " минута ";
    } else if (m%10 >= 2 && m%10 <= 4 && (m < 11 || m > 20)) {
        minutes = " минуты ";
    }
    if (s%10 === 1 && (s < 11 || s > 20)) {
        seconds = " секунда";
    } else if (s%10 >= 2 && s%10 <= 4 && (s < 11 || s > 20)) {
        seconds = " секунды";
    }
    h = addNull(h);
    m = addNull(m);
    d = addNull(d);
    s = addNull(s);
    document.getElementById('newYear').innerHTML = "<p> Врем до Нового года: " + d + day + h + hours + m + minutes + s + seconds + "</p>";
    setTimeout('getTimeToNextYear()', 1000);
  }
  */