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
var result7 = document.getElementById("result7");

// global variables
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to show initial results
function taskOrigin() {
    result2.innerHTML = myArray.join(", ");
    result3.innerHTML = myArray.join(", ");
}

//1. Create a function that displays prototypal inheritance
cut5thBtn.onclick = function () {
    result2.innerHTML = myArray.slice(4, 5);
};

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array


//3. Delete the last number in the array that you created above.


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.


//7. Create a simple function that logs the date.

