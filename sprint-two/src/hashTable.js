var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};
var bucket;
var tupal;
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);


  if (!this._storage.get(i)) {
    bucket = [];
    tupal = [k, v];

    bucket.push(tupal);
    this._storage.set(i, bucket)
  } else {
    bucket.pupsh([k, v]);
  }




  //   //loop over tupal(s)
  //   for (var j = 0; j < this._storage.get(i).length; j++) {
  //     //check if existing tupal's key is equal to new key being inserted
  //     if (this._storage.get(i)[j][0] === k) {
  //       //if so store existing key's value into variable
  //       oldValue = this._storage.get(i)[1];
  //       this._storage.get(i)[j][1] = v; 
  //     } else {
  //       this._storage.get(i).push([k, v]);
  //     }
  //   }
  // } else {
  // this._storage.get(i).push([k,v]);
  // }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === null) {
   return null;
  }
  return this._storage.get(i)[1];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);

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
