var Queue = function(){
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
	storage[counter] = value;
	counter++;
  };

  someInstance.dequeue = function(){

	for (var i = 1; i <= counter; i++){ //storage.length is unknown at this point
		storage[i-1] = storage[i];
	}
	delete storage[counter];
	counter--;
  };

  someInstance.size = function(){
	return counter + 1;
  };

  return someInstance;
};

/*
var myQueue = Queue();

myQueue.enqueue("firstthing");

*/
//myQueue.storage === {0: "firstthing"}
