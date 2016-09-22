var assert = require('assert')
var Hero = require("../hero")
var Food = require("../food")
var Rat = require("../rat")
var Weapon = require("../weapon")


describe("Food", function(){

  beforeEach(function(){
    food = new Food("Sandwich", 20)
  })

  it("Should have name", function(){
    assert.equal(food.name, "Sandwich");
  })

  it("Should have nutrition", function(){
    assert.equal(food.nutrition, 20)
  })

  it ("Shouldn't be poisoned on creation", function(){
    assert.equal(food.poisoned, false)
  })

})


describe("Rat", function(){

  beforeEach(function(){
    food = new Food("Wall Chicken", 20)
    rat = new Rat("Petey");
  })

  it("Should be able to poison food", function(){
    rat.touchFood(food)
    assert.equal(food.poisoned, true)
  })

  it("Shouldn't be able to poison food when dead", function(){
    rat.health = -3;
    food.poisoned = false;
    rat.touchFood(food);
    assert.equal(food.poisoned, false)
  })

})


describe("Hero", function(){

  beforeEach(function(){
    food = new Food("Bland Pastry", 5)
    favFood = new Food("Wall Chicken", 20)
    hero = new Hero("Hero McHeroface", favFood, "weapon");    
  })

  it("Must have name", function(){
    assert.equal(hero.name, "Hero McHeroface");
  })

  it("Must have health", function(){
    assert.equal(hero.health, 100);
  })

  it("Should have favourite food", function(){
    assert.deepEqual(hero.favouriteFood, favFood);
  })

  it("Should talk", function(){
    assert.equal(hero.talk(), "I will protect the magical crystals, or orbs.. whatever..");
  })

  it("Should be able to eat food to get health", function(){
    hero.eat(food);
    assert.equal(105, hero.health)
  })

  it("Should gain more health from favourite food",function(){
    hero.eat(favFood);
    assert.equal(130,hero.health)
  })

  it("Should lose health from poisoned food", function(){
    food.poisoned = true;
    hero.eat(food);
    assert.equal(80, hero.health);
  })

  it("Hero can purify food", function(){
    food.poisoned = true;
    hero.purifyFood(food);
    assert.ok(!food.poisoned)
  })

})


describe("Armed Hero", function(){

  beforeEach(function(){
    favFood = new Food("Wall Chicken", 20);
    weapon = new Weapon("Swordy McSwordface", 50);
    hero = new Hero("Hero McHeroface", favFood, weapon);
    dummy = new Hero("...", "food", "nothing");
    rat = new Rat("Petey");
  })


  it("should damage dummy", function(){
    var beforeHealth = dummy.health;
    hero.attack(dummy)
    assert.ok(beforeHealth>dummy.health)
  })

  it("should know if it's dead", function(){
    assert.ok(dummy.isDead() == false)
    dummy.health = 1
    hero.attack(dummy);
    assert.ok(dummy.isDead() == true)
  })


})


