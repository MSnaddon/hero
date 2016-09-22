var Rat = function(name){
  this.name = name;
  this.health = 40;
}

Rat.prototype = {
  touchFood: function(food){
    if (!this.isDead()){
      food.poisoned = true
    }
  },
  isDead: function(){
    return this.health <= 0 ? true:false;
  }
}
module.exports = Rat;