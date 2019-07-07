// *** Array Object ***

// *** Creating An Array *** 
var arr = new Array(element0, element1, elementN);
var arr = Array(element0, element1, elementN);
var arr = [element0, element1, elementN];

// Bracket syntax is called an 'array literal' or 'array initializer'
// it's generally preferred

// create a non-zero length without any items either two can be used
// example: arrayLength must be a Number
var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// This has exacctly the same effect
var arr = [];
arr.length = arrayLength;

// Arrays can be assigned as a property of a new or existing object
var obj = {};
// ...
obj.prop = [element0, element1, elementN];

// OR
var obj = {prop: [element0, element1, elementN]};

// initialize an array with 1 element you must use bracket syntax
// A single number pass in Array() construtor is interpreted an an arrayLennth
var arr = [42];

var arr = Array(42);
// equivalent to 
var arr = [];
arr.length = 42;

// create arrays with a single elment
let misuArray = Array.of(9.3);
console.log(misuArray);

// Populating an array

// you can populate an array by assigning values to it elements
var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';

var arr = [];
arr[3.4] = 'oranges';
console.log(arr);
// check for property
console.log(arr.hasOwnProperty(3.4));
// check value
console.log(Object.values(arr).includes('Oranges'));

// You can populate an array when you create it
var myArray = new Array('Hello', myVar, 3.14159);
var myArray = ['Mange', "Apple", 'Orange'];

// *** Referring To Array Elements ***

// You refer to an array's elements by using the elements orginal number
var myArray = ['Wind', 'Rain', 'Fire'];
myArray[0];
myArray[1];

// the array operator(square brackets) is also used to access the array's properties
// arrays are also objects
myArray['length']; // 3

// *** Understanding Length ***
// JS arrays actually store their elements as standard object properties
// using the array index as the property name
var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31

// You can also assign to the length property. Writing 0 empties it entirely
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2; // removes Twiggy
cats.length = 0 // cats array is empty
cats.length = 3 // logs [ <3 empty items> ]

// *** Iterating over arrays ***
// A common operation is to iterate over the values of an array
// processing each one in some way

var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// foreach() method provides another way of iterating
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
// you can shorten with arrow functions
colors.forEach(color => console.log(color));