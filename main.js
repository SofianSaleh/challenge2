// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/
// we write a function that accepts som things about computers and puts them in an object.
// in the displayComputer function we use the return function to print the computer specs.

function makeComputer(type, color, weight) {

  var computer = {

  	type: type,
  	color:color,
  	weight:weight

  }

  return computer;

}

var computer1 = makeComputer('Apple','white',25);
var computer2 = makeComputer('Sony','black',22);
var computer3 = makeComputer('Toshiba','blue',30);
var Computers = [computer1, computer2, computer3];

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {

  return 'Type: '  + ' ' + computer.type +' '+ 'Color: ' + computer.color + ' ' + 'weight: ' + computer.weight;

}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/
// We use the map function to iterate and return a new array with all strings in uppercase format.

function uppercaseAll(arrayOfStrings) {

	return map(arrayOfStrings, function(str,i) {

		return str.toUpperCase();

	});
  
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/
// we create a new array that will hold the countries that has more than 500m in population and then use the each
//function to iterater aand then we push into the new array the result.

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
	var newArr = []

   	each (arrayOfObjects,function(arr, i) {

  	 if(arr.population >= 500000000) {

  	 	newArr.push(arr);

  	 }
  	 	
  });

   	return newArr
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/
// we use the map function to iterate over the array and halve them and put them into a new array.

function halveAll(numbers) {

  return map(numbers, function(number, i) {
  	 return (number / 2);
  
  });
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/
// we us the each function to iterate over an object and then we create a new array to push the values of the object
// into the new array
function values(obj) {

  var newArr = [];
  
  each(obj, function(object, key) {
  	
  	newArr.push(object);

  });

  return newArr;

}

//Good Luck :))
