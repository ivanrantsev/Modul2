//ЗАДАНИЕ 1
console.log("Задание 1");
let a = {
    name: "static",
    count: 0,
};

function foo(obj, count, countValue) {
    let arr = [];
    for (let i = 0; i < countValue; i++) {
        let newObj = {...obj};
        newObj[count] = i;
        arr.push(newObj);
    }
    return arr;
}
console.log(foo(a, "count", 10));


//ЗАДАНИЕ 2// недопонял замыкание, сделаю позже




//ЗАДАНИЕ 3 //
console.log("Задание 3");
let student = {
    name: "Ivan",
    lastname: "Ivanov",
    age: 25,
    hobby: ["sport", "IT", "literature"],
    university: "ITMO",
    data() {
        return this.name + " " + this.lastname + ". Age: " + this.age + ". Interests: " + this.hobby + ". Studying in " + this.university;
    }
};
console.log(student.data());


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
console.log(arr);