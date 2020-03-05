var A = "This is a String";

window.alert(A);

document.write("Lisa told Bart, \"Knock it off, Bart! or I'll tell dad!\"<br>\
    \"Eat my shorts!\" Bart responded.");

var color = ("\"<br>Be who you are and say what you feel," +
    " because those who mind don\'t matter and those who matter don\'t mind.\"" +
    "Dr. Seuss<br>");
var color = color.fontcolor("red")
document.write(color);

function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

document.write(9 + 9);

var Family = "The Arezzinis",
    Dad = "Jeremiah",
    Mom = "Hermoine",
    Daughter = "Penny",
    Son = "Zorro";
document.write("<br>Dad")