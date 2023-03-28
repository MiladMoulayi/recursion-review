// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


// I - an object (could be any data type)
// O - the object stringified
// C - None
// E -If no object is passed in, return undefined

// Pseudocode
//

var stringifyJSON = function(obj) {
  // your code goes here

//create a return variable equal to empty string
var result = '';

//check if the type of object is valid
//if obj is undefined, return empty string
if (obj === undefined || typeof obj === 'function') {

  result += '';

}

else if (obj === null) {

  result += null;

}
//check the type of the object
//if it is a string, return string with double quotes
else if (typeof obj === 'string') {

  result += '"' + obj + '"';
}


//if type is boolean or number, return string of boolean
else if (typeof obj === 'boolean' || typeof obj === 'number') {

  result += obj;

}

//if it is array, do for loop
  //for each element in array, recursively call the function
else if (Array.isArray(obj)) {

  result += '[';
  // result += obj.join(', ');
  for (var i = 0; i < obj.length; i++) {

    result += stringifyJSON(obj[i]) + ',';
  }

  if (result.length > 1) {
    result = result.slice(0, -1);
  }
  result += ']';
}



//if it is object, do for loop
  //for each element in object, recursively call the function
else if (typeof obj === 'object') {
  // {a:1, b:3}
  result += '{';
    for (var index in obj) {

      if(obj[index] !== undefined && typeof obj[index] !== 'function') {
        result += stringifyJSON(index) + ':' + stringifyJSON(obj[index]) + ',';
      }
    }
  if (result.length > 1) {
    result = result.slice(0, -1);
  }
  result += '}';
}

//return the string
return result;
};


// {
//   'functions': function() {},
//   'undefined': undefined
// }

// key: 'functions'
// value: function() {}

// key: 'undefined'
// value: undefined