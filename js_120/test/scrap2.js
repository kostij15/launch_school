//Player
// has health, strength, intellegence

//receive health of 100
// random strength value
// random intellignece

//heal and hurt methods accept amount of change to apply to health postive and negative respectfully
//player can choose between warrior, paladin, magician and bard

//warriors receive to 2 extra strength
//magician receive +2 intelligence
//Warriors and Palidans have wear armor -> mxin (attachArmor and removeArmor)
//Paladins, magicians,and bards -> mixin castSpell that accpets a spell argument
//Bard is a Magician and have createPotion method


function rollDice() {
  let dieRoll = Math.floor(Math.random() * 12) + 1; // Since Math.random ranges from 0 <= x < 1, we can use math.floor + 1 since the number will always round down to 11
  return dieRoll;
}

let wearableArmorMixin = {
  attachArmor() {
    this.armor = true;
  },

  removeArmor() {
    this.armor = false;
  }
}

let castSpellsMixin = {
  castSpell(spell) {
    return spell;
  }
}

let createPotionMixin = {
  createPotion() {
    return true;
  }
}


class Player {
  constructor() {
    this.health = 100;
    this.strength = Player.rollDice();
    this.intelligence = Player.rollDice();
  }

  heal(healAmount) {
    this.health += healAmount;
  }

  hurt(hurtAmount) {
    this.health -= hurtAmount;
  }

  static rollDice() {
    let dieRoll = Math.floor(Math.random() * 12) + 1; // Since Math.random ranges from 0 <= x < 1, we can use math.floor + 1 since the number will always round down to 11
    return dieRoll;
  }
}

class Warrior extends Player {
  constructor() {
    super();
    this.strength += 2;
    this.armor = true;
  }
}
Object.assign(Warrior.prototype, wearableArmorMixin);

class Paladin extends Player {
  constructor() {
    super();
    this.armor = true;
  }
}
Object.assign(Paladin.prototype, wearableArmorMixin, castSpellsMixin);

class Magician extends Player {
  constructor() {
    super();
    this.intelligence += 2;
  }
}
Object.assign(Magician.prototype, castSpellsMixin);

class Bard extends Magician { }
Object.assign(Bard.prototype, createPotionMixin);

let warrior = new Warrior();
let paladin = new Paladin();
let bard = new Bard();
let magician = new Magician();

warrior.strength;
console.log(warrior.strength);