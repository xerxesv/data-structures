var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    

    if (list.head === null) {
      list.head = node;
      list.tail = list.head;
     
    } else {
      list.tail.next = node;
      list.tail = node;
    } 


  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var targetFound = false;
    list.tail = list.head;
    while(list.tail.next !== null) {
      if (list.tail.value === target) {
        targetFound = true;
      }
      list.tail = list.tail.next;
    }
    return targetFound || list.tail.value === target;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
