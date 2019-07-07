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