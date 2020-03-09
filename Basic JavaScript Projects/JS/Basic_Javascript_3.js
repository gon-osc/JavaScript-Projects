function addition_Function() {
    var addition = 10 + 10;
    document.getElementById("addition").innerHTML = "10 + 10 = " + addition;
}

function subtraction_Operation() {
    var subtraction = 30 - 10;
    document.getElementById("sub").innerHTML = "30 - 20 = " + subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("multi").innerHTML = "6 x 8 = " + simple_Math
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + simple_Math
}

function more_math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}

function increment_operator() {
    var X = 5;
    X++;
    document.getElementById("increment").innerHTML = X;
}

function decrement_operator() {
    var Y = 5.25;
    Y--;
    document.getElementById("decrement").innerHTML = Y;
}

window.alert(Math.random());

window.alert(Math.random() * 100)

function return_highest() {
    document.getElementById("return").innerHTML = Math.max(5, 25, 90, 10);
}