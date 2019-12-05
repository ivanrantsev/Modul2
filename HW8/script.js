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
let sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", sendComment);

 
function sendComment() {
    let user = {
        photo: "img.png",
        name: "Name",
        lastName: "Lastname",
        },
    commentList = document.getElementById("commentList");
    if (commentArea.value !== "") {
        commentList.insertAdjacentHTML("afterbegin", `
                            <div style='width: 298px; display: flex; border: 1px solid black; margin: 10px 0'>
                            <img style='width: 50px; height: 50px; margin: 0 10px' src='${user.photo}'>
                            <p style='margin: 10px 13px 10px 2px'>${user.name}<br>${user.lastName}</p>
                            <p style='flex: 1; word-wrap: break-word; width: 50%'>${commentArea.value}</p>
                            </div>`);
        commentArea.value = "";
    }
}




//ЗАДАНИЕ 4
let books = [ {
    title: "Евгений Онегин",
    author: "Пушкин",
    pages: 123
},
{
    title: "Война и мир",
    author: "Толстой",
    pages: 1014
},
{
    title: "Мастер и Маргарита",
    author: "Булгаков",
    pages: 333
},];

function getTable(e) {
    books.forEach(element => {
        let booksTable = document.getElementById("books");
        booksTable.insertAdjacentHTML("beforeend", `
        <tr><td>${element.title}</td><td>${element.author}</td><td>${element.pages}</td></tr>
        `);
    });
}

getTable(books);