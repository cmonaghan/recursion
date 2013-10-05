// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var jsonResult = '';
  for(var key in obj) {
  	jsonResult += key.toString() + ', ';
  }
  return jsonResult;
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
var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonStringTheirs = JSON.stringify(foo);
var jsonStringMine = stringifyJSON(foo);

// Print responses
document.write('This is what it should print:<br />' + jsonStringTheirs + '<p></p>');
document.write('This is what mine prints:<br />' + jsonStringMine);