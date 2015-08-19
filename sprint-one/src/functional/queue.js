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
    if (counter > 0) {  
      var temp = storage[0];
    	for (var i = 1; i <= counter; i++){ //storage.length is unknown at this point
    		storage[i-1] = storage[i];
    	}

    	delete storage[counter];
    	counter--;
      return temp;
      
    }
  };


      someInstance.size = function(){
    	// return Object.keys(storage).length;
      return counter;
    };

    return someInstance;
};

/*
var myQueue = Queue();

myQueue.enqueue("firstthing");

*/
//myQueue.storage === {0: "firstthing"}

//still need to pass use of 'this' test
//assuming(referencesThis).expect(/((?!\/\/).)*(this)/m.test(constructor)).to.be.true;
