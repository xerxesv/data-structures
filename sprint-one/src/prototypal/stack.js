var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);

  stackInstance.storage = {};
  stackInstance.counter = 0;
  return stackInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    if (this.counter > 0) {
      var temp = this.storage[this.counter - 1];

      delete this.storage[this.counter - 1];
      this.counter--;
      return temp;
    }
  }, 

  size: function() {
    return this.counter;
  }
};


