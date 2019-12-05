let mass = [1,2,3,4,5,6];
console.log(mass.toString());
myUtils.remove(mass,5);
console.log(mass.toString());

let str = "temp";
console.log(str);
let newStr = myUtils.repeat(str, 3);
console.log(newStr);

let array = [
    {name: "Sasha", age: 18},
    {name: "Ivan", age: 21},
    {name: "John", age: 20},
];

console.log(myUtils.pluck(array, "name"));


let obj = [{a:1}, {b:2}];

let deep = _.cloneDeep(obj);
let deep2 = Object.assign([], obj);
console.log(obj[0] === deep[0]);
console.log(obj[0] === deep2[0]);




let line1 = {
    x:[],
    y:[],
    type: "scatter"    
};


function calcY(x) {
    let y;
    if (x<=2) {
        y = 50*x;
    } else {
        y = 100 * (2 ** (-8 * (x-2)/107) + 2** (8*((x-2)/107-1)));
    }
    return y;
}

for (let i=0; i<=100; i++) {
    line1.x.push(i);
    line1.y.push(calcY(i));
}

let layout = {
    title: "Кривая Д-К",
    xaxis: {
        title: "знание+опыт",
        showgrid: false,
        zeroline: false,
    },
    yaxis: {
        title: "знание+опыт",
        zeroline: false,
    }
};

Plotly.newPlot("placeholder", [line1], layout);
