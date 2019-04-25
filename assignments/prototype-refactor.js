/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes){
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }

  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`
  }

/*
  === CharacterStats ===
  * healthPoints++
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

  function CharacterStats(attributes){
    GameObject.call(this, attributes);
    this.healthPoints = attributes.healthPoints;
  }

  CharacterStats.prototype = Object.create(GameObject.prototype); // inherit
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`
  };

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes){
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype); // inherit
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(`Mage was created: ` + mage.createdAt); // Today's date
  console.log(`Archer Dimensions: ` + archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(`Length: ` + archer.dimensions.length + ` Width: ` + archer.dimensions.width + ` and Height: ` + archer.dimensions.height);
  console.log(`Swordsman's Healthpoints: ` + swordsman.healthPoints); // 15
  console.log(`Mage's name: ` + mage.name); // Bruce
  console.log(`Swordsman's Team: ` + swordsman.team); // The Round Table
  console.log(`Mage's weapon: ` + mage.weapons); // Staff of Shamalama
  console.log(`Archer's Language: ` + archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  

    function Hero(attributes){
      Humanoid.call(this, attributes);
    }
    Hero.prototype = Object.create(Humanoid.prototype); // inherit

    function Villain(attributes){
      Humanoid.call(this, attributes);
    }
    Villain.prototype = Object.create(Humanoid.prototype); // inherit

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  
    function attack(person, damageDone) {
      person.healthPoints = person.healthPoints - damageDone;
      if (person.healthPoints < 1) {
        console.log(`${person.name} has been defeated.`);
        person.destroy();
        return false // false if not defeated
      } else {
        console.log(`${person.name} now has ${person.healthPoints} health.`);
        return true // true. Stop attacking it's dead.
      }
    }

    Hero.prototype.lightsRevenge = function(person) {
      damageDone = Math.floor((Math.random() * 6) + 1);
      console.log(`${this.name} attacks with The Light's Revenge for ${damageDone}.`);
      return damageDone;
    };

    Villain.prototype.howlingShards = function(person) {
      damageDone = Math.floor((Math.random() * 5) + 1);
      console.log(`${this.name} attacks with Howling Shards for ${damageDone}.`);
      return damageDone;
    };

  // * Create two new objects, one a villain and one a hero and fight it out with methods!

    // Hero
    const knight = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 5,
      },
      healthPoints: 16,
      name: 'Mark',
      team: 'Of the Light',
      weapons: [
        'Mace',
        'Shield',
      ],
      language: 'Common Tongue',
    });
    
    // Villain
    const wraith = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 3,
        width: 1,
        height: 7,
      },
      healthPoints: 12,
      name: 'Manifestation',
      team: 'spirits',
      weapons: [
        'dagger',
        'howl',
      ],
      language: 'Ghost Speech',
    });

    console.log(`One day our hero, ${knight.name}, is attacked by ${wraith.name}.`);

    while (knight.healthPoints > 0 && wraith.healthPoints > 0) {
      if (attack(knight, wraith.howlingShards())) {
        attack(wraith, knight.lightsRevenge());
      }
    }
  