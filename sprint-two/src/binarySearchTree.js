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
      this.left.insert(value); //this.insert(value) creates an infinite loop because this.left is never null
    }

    if (this.right === null) {
      if (value > this.value) {
        this.right = BinarySearchTree(value);
      }
    } else {
      this.right.insert(value);
    }
  },

  contains: function(value) {
    if (value === this.value){
      return true;
    }
    else {
      if(value < this.value){
        if(this.left !== null){
          return this.left.contains(value);
        } else{
          return false;
        }
      }

      if(value > this.value){
        if(this.right !== null){
          return this.right.contains(value);
        } else{
          return false;
        }
      }
    }
  },

  depthFirstLog: function(cb) {
    cb(this.value);
    if(this.left){
      this.left.depthFirstLog(cb);
    }
    if(this.right){
      this.right.depthFirstLog(cb);
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 insert - logarithmic
 contains - logarithmic
 depthFirstLog - linear
 */
