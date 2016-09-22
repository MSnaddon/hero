var Hero = function(name, favFood, weapon){
  this.name = name;
  this.weapon = weapon
  this.favouriteFood = favFood;
  this.health = 100;
  this.strength = 30
  }


Hero.prototype = {
  attack: function(enemy){
    var damage = enemy.health
    enemy.health -= Math.floor((Math.random() * this.weapon.attackPower) + this.strength);
    console.log("Attack has hit for " + (damage-enemy.health))
  },
  talk: function(){
    return "I will protect the magical crystals, or orbs.. whatever.."
  },
  eat: function(food){
    if (food.poisoned) {
      this.health -= 20
    } else {  
      multiplier = food.name == this.favouriteFood.name ? 1.5 : 1;
      this.health += food.nutrition*multiplier;
    }  
  },
  isDead: function(){
    return this.health <= 0 ? true:false;
  },
  purifyFood: function(food){
    if (this.strength>25){
      food.poisoned = false;
    }
  }
}

module.exports = Hero;