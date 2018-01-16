//k-nearest neighbors algorithm
//for hard-coded dataset

//class for a single data
var Node = function(object){
    for(var key in object) {
        this[key] = object[key];
    }
}

//class for all dataset
var NodeList = function(k){
    this.nodes = [];
    this.k = k;
}