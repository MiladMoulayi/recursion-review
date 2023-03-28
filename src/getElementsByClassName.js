// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// I - a class name
// O - an array of all elements matching class name
// C -None
// E - if element with target class name does not exist, return an empty array

// Pseudocode
//
/* html {
<div class = "test"> aasdasdsa </div>
<p class = "test"> This is a test! </p>
} */
// return :[ <div class = "test"> aasdasdsa </div>, <p class = "test"> This is a test! </p>]

// check if any element matches class name
// if none match, return an empty array
// set result variable as second parameter
//crea a result variable initialized to an empty array
// use jquery selector $('.className') to select all elements with target class name
// iterate over jquery object
//
// return array

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, index, result) {
  // your code here

  var $className = $('.' + className);
  var len = $className.length;

  if (result === undefined) {
    result = [];
  }

  if (index === undefined) {
    index = 0;
  }

  result.push($className[index]);
  index++;

  if (index < len) {
    getElementsByClassName(className, index, result);
  }

  return result;


};
