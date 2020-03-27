function Add_numbers_1() {
    var X = 15;
    document.write(30 + X + "<br>");
}

function Add_numbers_2() {
    console.log(X + 100);
}

Add_numbers_1();
Add_numbers_2();

var X = 10;

function Add_numbers_3() {
    document.write(20 + X + "<br>");
}

function Add_numbers_4() {
    document.write(X + 100);
}

Add_numbers_3();
Add_numbers_4();

function myFunction() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Good Day";
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("Greeting").innerHTML = greeting;
}


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}