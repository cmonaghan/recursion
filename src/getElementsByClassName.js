// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result = [];
  var findElements = function(currentNode) {
  	var children = currentNode.childNodes;
  	if (children) { // if any children exist, returns true
			for (var i in children) { // iterate through all children of the current node
				if (_.contains(children[i].classList, className)) { // if className is found in the list of classes for that element
					result.push(children[i]); // add the element to results
				};
				findElements(children[i]); // recursively call function for each child of that node, regardless of whether or not the targetClassName was found for that element
			};
  	};
  };
  findElements(document.body); // call the function, starting with the highest level DOM element of document.body
  return result;
};