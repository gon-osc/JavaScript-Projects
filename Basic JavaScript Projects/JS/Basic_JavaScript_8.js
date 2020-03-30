function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy."
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function myFunction() {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("Uppercase").innerHTML = res;
}

function myFunction_1() {
    var str = "Mr. Blue has a blue house"
    var n = str.search("blue");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {
    var X = 182;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function myFunction_2() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("num_to_fix").innerHTML = n;
}

function myFunction_3() {
    var str = "Hello Everyone!";
    var res = str.valueOf();
    document.getElementById("Value_of").innerHTML = res;
}