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
  	if (children) {
			for (var i in children) {
				if (children[i].classList == className) { // this only works if element has 1 class, must use '.contains'
					result.push(children[i]);
				};
				findElements(children[i]);
			};
  	};
  };
  findElements(document.body);

  /*var element = document.body.childNodes;
  if (document.body.childNodes) {
  	element = document.body.childNodes;
  	for (var i in element) {
	  	if (element[i].classList == className) {
			 result.push(element[i]);
	  	}
  	}
  }*/
  return result;
};