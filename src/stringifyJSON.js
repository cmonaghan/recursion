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
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) += ',';
    }
    /*if (obj.length > 0) {      // This prevents comma insertion after last array item
      result += stringifyJSON(obj[obj.length - 1]);
    } */
    result += ']';
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
var foo = [1,2,3]; //{foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonStringTheirs = JSON.stringify(foo);
var jsonStringMine = stringifyJSON(foo);

// Print responses
document.write('This is what it should print:<br />' + jsonStringTheirs + '<p></p>');
document.write('This is what mine prints:<br />' + jsonStringMine);