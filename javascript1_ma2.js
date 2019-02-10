//MODULE ASSIGNMENT 2 - LEVEL 1

// link to elements
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var cut5thBtn = document.getElementById("cut5thBtn");
var result3 = document.getElementById("result3");
var cutLastBtn = document.getElementById("cutLastBtn");
var result4 = document.getElementById("result4");
var changeFruitBtn = document.getElementById("changeFruitBtn");
var result5 = document.getElementById("result5");
var footCarBtn = document.getElementById("footCarBtn");
var result6 = document.getElementById("result6");
var pplFilterBtn = document.getElementById("pplFilterBtn");
var result7 = document.getElementById("result7");

// global variables
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var fruitString = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
var footCarArray = ["Rosenborg", "Molde", "Brann", "Haugesund", "Kristiansund BK"];


// function to show initial results
function taskOrigin() {
    result2.innerHTML = myArray.join(", ");
    result3.innerHTML = myArray.join(", ");
    result4.innerHTML = fruitString;
    result5.innerHTML = footCarArray.join(", ");
}

//1. Create a function that displays prototypal inheritance

// I did not quite understand this ... but at the same time, I do. Nearly there :)

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
cut5thBtn.onclick = function () {
    result2.innerHTML = myArray.slice(4, 5);
};
//3. Delete the last number in the array that you created above.
cutLastBtn.onclick = function () {
    myArray.splice(-1);
    // myArray.pop();
    result3.innerHTML = myArray.join(", ");
};
//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
changeFruitBtn.onclick = function () {
    fruitString = fruitString.replace(/Strawberries/, "<b>Bananas</b>");
    fruitString = fruitString.replace(/strawberries/, "<b>bananas</b>");
    fruitString = fruitString.replace(/Strawberry/, "<b>Banana</b>");
    fruitString = fruitString.replace(/strawberry/, "<b>banana</b>");
    result4.innerHTML = fruitString;
};
/* alternative code:
changeFruitBtn.onclick = function () {
    var fruitChange = {Strawberries: "<b>Bananas</b>",
                       strawberries: "<b>bananas</b>",
                       Strawberry: "<b>Banana</b>",
                       strawberry: "<b>banana</b>"};
    fruitString = fruitString.replace(/Strawberries|strawberries|Strawberry|strawberry/g, function (bananaReplace) {
        return fruitChange[bananaReplace]; }
        );
    result4.innerHTML = fruitString;
}; */
//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
footCarBtn.onclick = function () {
    if (footCarBtn.innerHTML === "Cars") {
        footCarArray.splice(0, 4, "Volvo", "BMW", "Saab", "Volkswagen");
        console.log(footCarArray);
        result5.innerHTML = footCarArray.join(", ");
        footCarBtn.innerHTML = "Football Teams";
        } else {
            footCarArray.splice(0, 4, "Rosenborg", "Molde", "Brann", "Haugesund");
            console.log(footCarArray);
            result5.innerHTML = footCarArray.join(", ");
            footCarBtn.innerHTML = "Cars";
        }
};
//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
pplFilterBtn.onclick = function () {
    var peopleArray = [
        {firstName: "Knut", lastName: "Haraldsen", age: "23", gender: "fluid"},
        {firstName: "Ola", lastName: "Nikolaisen", age: "35", gender: "male"},
        {firstName: "Kari", lastName: "Sputnik", age: "32", gender: "female"}
    ];
        result6.innerHTML = "Sorry, not done with this one";
};
//7. Create a simple function that logs the date.
function whatsTheDate() {
    console.log(new Date());
    result7.innerHTML = new Date();
}

// calling/invoking functions
taskOrigin();
whatsTheDate();
