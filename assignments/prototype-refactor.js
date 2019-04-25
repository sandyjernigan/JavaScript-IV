/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// === GameObject ===
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
      return `${this.name} was removed from the game.`;
    }
  }

// === CharacterStats ===
class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
      return `${this.name} took damage.`;
    }
  }

// === Humanoid (Having an appearance or character resembling that of a human.) ===
class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }

// Objects

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
    class Hero extends Humanoid {
        constructor(attributes) {
            super(attributes);
        }
        lightsRevenge() {
            var damageDone = Math.floor((Math.random() * 6) + 1);
            console.log(`${this.name} attacks with The Light's Revenge for ${damageDone}.`);
            return damageDone;
        }
        maceHit() {
            var damageDone = Math.floor((Math.random() * 3) + 1);
            console.log(`${this.name} hits with a Mace for ${damageDone}.`);
            return damageDone;
        }
    }
    class Villain extends Humanoid {
        constructor(attributes) {
            super(attributes);
        }
        howlingShards() {
            var damageDone = Math.floor((Math.random() * 5) + 1);
            console.log(`${this.name} attacks with Howling Shards for ${damageDone}.`);
            return damageDone;
        }
        claws() {
            var damageDone = Math.floor((Math.random() * 2) + 1);
            console.log(`${this.name} claws does ${damageDone} damage.`);
            return damageDone;
        }
    }

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  
    function attack(person, damageDone) {
      person.healthPoints = person.healthPoints - damageDone;
      if (person.healthPoints < 1) {
        console.log(`${person.name} has been defeated.`);
        person.destroy();
        return false // false if not defeated
      } else {
        //console.log(`${person.name} now has ${person.healthPoints} health.`);
        return true // true. Stop attacking it's dead.
      }
    }

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
      var doThisAction = Math.floor((Math.random() * 4) + 1);
      switch(doThisAction) {
          case 1: attack(knight, wraith.howlingShards());
          case 2: attack(wraith, knight.lightsRevenge());
          case 3: attack(knight, wraith.claws());
          case 4: attack(wraith, knight.maceHit());
      }
    }
  