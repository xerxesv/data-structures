var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,[k,v]);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[1];


};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,null);

  // this._storage.each(function(tupal,index){
  //   if(index===i){
  //     this.set(i,undefined)
  //   }
  // })

  // this._storage.each(function(tupal, index) {
  //   if (index === i) {
  //      = undefined;
  //   }
  // })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
