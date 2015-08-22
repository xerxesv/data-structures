var BinarySearchTree = function(value){
  treeInstance = {};

  treeInstance.value = value;
  treeInstance.left = null;
  treeInstance.right = null;

  _.extend(treeInstance, binarySearchTreeMethods);

  return treeInstance;
};

var binarySearchTreeMethods = {

  insert: function(value) {
    
    if (this.left === null) {
      //if value of new node inserted is less than this.value
      if (value < this.value) {
        this.left = BinarySearchTree(value);
      }
    } else {
      this.left.insert(value);
    }

    if (this.right === null) {
      if (value > this.value) {
        this.right = BinarySearchTree(value);
      }
    } else {
      this.right.insert(value);
    }
   

  },

  contains: function() {},

  depthFirstLog: function() {}

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
