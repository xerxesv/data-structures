var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};


 
var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var flag = false;
  if (this.value === target) {
    flag = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (flag === true) {
      break;
    }
    flag = this.children[i].contains(target);
  }
  return flag;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// var myTree = Tree(5);
// myTree.addchild(6);