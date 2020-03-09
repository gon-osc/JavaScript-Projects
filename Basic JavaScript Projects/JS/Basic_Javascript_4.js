function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sounds: "Bark!"
    };
    delete Animal.Sounds;
    document.getElementById("Dictionary").innerHTML = Animal.Sounds;
}