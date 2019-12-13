class Sample {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value++;
        return this;
    }
    add(num) {
        this.value+=num;
        return this;
    }
    outAlert() {
        alert(this.value);
        return this;
    }
    getValue() {
        return this.value;
    }
}

let obj = new Sample();

let temp = obj.increment()
            .add(10)
            .increment()
            .getValue();
console.log(temp);


$(document).on("contextmenu", function() {
    return false;
});

$('tr').filter(":odd")
    .find('td')
    .filter(":odd")
    .css({
        "backgroundColor": "#eee", 
        "border":"1px solid black"
    })
    .end().end().end()
    .filter(":even")
    .find('td')
    .filter(":even")
    .css({
        "backgroundColor": "#eee", 
        "border":"1px solid black"
    })
    .end().end().end();

    $('a').click(function() {
        window.print();
        return false;
    });

    $('button').one('click', function() {
        $(this).text("thanks");
    });

    $('#inputText').on('input', function(e) {
        let len = $(this).val().length;
        $('#label').text(`Осталось ${15 - len} симв.`);
    });
/*
    $('#inputText').on('change', function(e) {
        let len = $(this).val().length;
        $('#label').text(`Осталось ${15 - len} симв.`);
    });*/

    $('p').each(function(){
        let arr = $(this).text().split(' ');
        arr[0] = "<b>" + arr[0] + "</b>";
        $(this).html(arr.join(" "));
    });

let $divElem = $('<div/>', {
        id: "test",
        css: {
            "background-color": "#eee"
        }
    }).text("TEXTDDDDDD");

    $("body").append($divElem);