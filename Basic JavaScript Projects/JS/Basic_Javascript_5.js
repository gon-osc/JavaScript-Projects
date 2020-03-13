function infinity_operation() {
    document.getElementById("infinity").innerHTML =
        1.9896931348623157E308 + "<br>" + -1.9896931348623157E308;
}

function my_function() {
    document.getElementById("test").innerHTML = 0 / 0;
    document.getElementById("test1").innerHTML = isNaN("This is a string");
    document.getElementById("test2").innerHTML = isNaN("007");
}

document.writeln(10 > 2);

document.writeln(15 < 7);

console.log(5 + 15);

document.writeln("10" + 5);

console.log(5 > 25)

document.writeln(30 == 30)

document.writeln(5 == 30);

x = 10;
y = 10;
document.writeln(x === y);

f = 55;
d = 75;
document.writeln(f === d);

one = "55";
X = 55;
document.writeln(one === X);

seven = 55;
d = 75;
document.writeln(seven === d);

document.writeln(5 > 2 && 10 > 4);

document.writeln(6 > 20 && 10 > 15);

document.writeln(5 > 14 || 10 > 6)

document.writeln(5 > 10 || 30 > 40);

function not_function() {
    document.getElementById("not").innerHTML = !(15 > 30);
}

function not_function_2() {
    document.getElementById("not_2").innerHTML = !(50 > 30);
}