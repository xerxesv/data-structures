

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){

  this.nodes = [];

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var theNode = {id: node,
  edges: []
  };

  this.nodes.push(theNode);

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if (this.nodes.length > 0) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].id === node) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
 

  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].id === node) {
      this.nodes.splice(this.nodes[i], 1);

      break;
    }
  }

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return (this.findNode(fromNode).edges.indexOf(toNode) >= 0) && (this.findNode(toNode).edges.indexOf(fromNode) >= 0);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.findNode(fromNode).edges.push(toNode);
  this.findNode(toNode).edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  this.findNode(fromNode).edges.splice(this.findNode(fromNode).edges.indexOf(toNode),1);
  this.findNode(toNode).edges.splice(this.findNode(toNode).edges.indexOf(fromNode),1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++){
    cb(this.nodes[i]);
  }
};

Graph.prototype.findNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].id === node) {
      return this.nodes[i];
    } 
  }
  return null;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



