//k-nearest neighbors algorithm
//for hard-coded dataset

//class for a single data
var Node = function(object){
    for(var key in object) {
        this[key] = object[key];
    }
};

//class for all dataset
var NodeList = function(k){
    this.nodes = [];
    this.k = k;
};

//create prototype to find max and min value in dataset
NodeList.prototype.calculateRanges = function(){
    this.area = {
        min: 1000000,
        max: 0
    };

    this.room = {
        min: 1000000,
        max: 0
    };

    for(var i in this.nodes){
        if(this.nodes[i].room < this.room.min){
            this.room.min = this.nodes[i].room;
        }
        if(this.nodes[i].room > this.room.max){
            this.room.max = this.nodes[i].room;
        }
        if(this.nodes[i].area < this.area.min){
            this.area.min = this.nodes[i].area;
        }
        if(this.nodes[i].area > this.area.max){
            this.area.max = this.nodes[i].area;
        }
    }
};

//looking for unknown data
NodeList.prototype.determineUnknown = function(){
    this.calculateRanges();

    //loop - looking for unknown types in our dataset
    for(var i in this.nodes){
    //if the node have unknown type, clone the nodes list and measure distance
        if(!this.nodes[i].type){

            this.nodes[i].neighbors = [];

            for(var j in this.nodes){
                if(!this.nodes[j].type){
                    continue;
                }
                this.nodes[i].neighbors.push(new Node(this.nodes[j]));
            }

            //Measure distance
            this.nodes[i].measureDistance(this.area, this.room);

            //Sort by distance
            this.nodes[i].sortByDistance();

            //Guess type
            console.log(this.nodes[i].guessType(this.k));
        }
    }
}