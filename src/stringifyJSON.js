// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var result = '';
  if (typeof obj === 'number') {
  	result += obj.toString();
  } else if (typeof obj === 'string') {
  	result += '"' + obj.toString() + '"';
  } else if (typeof obj === 'boolean') {
  	result += obj.toString();
  } else if (typeof obj === 'undefined') {
  	result += undefined;
  } else if (Object.prototype.toString.call(obj) === '[object Null]') {
  	result += 'null';
  } else if (Object.prototype.toString.call(obj) === '[object Array]') {
    result += '[';
    for (var i = 0; i < obj.length - 1; i++) {
      result += stringifyJSON(obj[i]);
      result += ',';
    }
    if (obj.length > 0) {      // This prevents comma insertion after last array item
      result += stringifyJSON(obj[obj.length - 1]);
    }
    result += ']';
  } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    result += '{';
    function isEmpty(obj) { // This function allows ability to determine if object is empty
      for(var key in obj) {
        if(obj.hasOwnProperty(key))
          return false;
      }
      return true;
    }
    if (isEmpty(obj)) { // if the object is empty, we just want to close the curly bracket and move on
      result += '}';
    } else { // otherwise, we recursively call the function
      for (var key in obj) {
        result += stringifyJSON(key);
        result += ':';
        result += stringifyJSON(obj[key]);
        result += ',';
      }
      result = result.substring(0,result.length - 1) // removes last comma
      result += '}';
    }
  }
  return result;
};


// ------------------------------------

// An optional function input for JSON.stringify
/*function censor(key, value) {
  if (typeof(value) == "string") {
    return undefined;
  }
  return value;
}*/

// Run my function vs theirs
var foo = {"a":[],"c": {}, "b": true};
var jsonStringTheirs = JSON.stringify(foo);
var jsonStringMine = stringifyJSON(foo);

// Print responses
document.write('This is what it should print:<br />' + jsonStringTheirs + '<p></p>');
document.write('This is what mine prints:<br />' + jsonStringMine);