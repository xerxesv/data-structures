var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};

};

Queue.prototype = {
  constructor: Queue,
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    if (this.counter > 0) {
      var temp = this.storage[0];

      for (var i = 1; i < this.counter; i++) {
        this.storage[i - 1] = this.storage[i];
      }
      delete this.storage[this.counter - 1];
      this.counter--;
      return temp;
    }
  }, 
  size: function() {
    return this.counter;
  }
};

var myQueue = new Queue;

