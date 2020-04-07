var X = 82;
document.write(X); {
    let X = 33;
    document.write("<br>" + X);
};
document.write("<br>" + X);

function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function my_Function() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("Strng_length").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function array_Function() {
    var Dog_Picture = []
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this pictures, the dog is " +
        Dog_Picture[1] + ".";
}

function constant_function() {
    const car = { type: "Tesla", Model: "Model 3", color: "black" };
    car.color = "white"
    car.owner = "Brian"
    document.getElementById("Constant").innerHTML = " The owner of the " + car.color + " car is " + car.owner;
}

let car = {
    make: "Dodge ",
    model: "Challenger Hellcat. ",
    year: "2020 ",
    color: "Black ",
    description: function() {
        return "I bought a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>"
}
document.getElementById("continue_statement").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break_statement").innerHTML = text;