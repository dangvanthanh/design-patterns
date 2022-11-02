interface Builder<T> {
  value: T;
  then(next: (val: T) => T): Builder<T>;
  finally(): T;
}

class StringBuilder implements Builder<string> {
  value: string;

  then(next: (val: string) => string): StringBuilder {
    return new StringBuilder(next(this.value));
  }

  finally(): string {
    return this.value;
  }

  constructor(value: string) {
    this.value = value;
  }
}

function capitalize(str: string) {
  return `${str.charAt(0).toUpperCase()} ${str.slice(1)}`
}

const myName = 'charles specer chaplin    '

const myString = new StringBuilder(myName)
.then(str => str.trim())
.then(capitalize)
.finally()

console.log(myString)

type CharType = 'healer' | 'attacker' | 'tank'

type Weapon = {
  bestClass: CharType;
  attack: number;
}

class Character {
  type: CharType;
  weapon: Weapon;
  health = 100;
  defense = 10;
  attack = 10;
}

class CharacterBuilder {
  private char: Character;

  setType(newType: CharType) {
    this.char.type = newType
  }

  setWeapon(weapon: Weapon) {
    this.char.weapon = weapon;
  }

  setHealth(health: number) {
    this.char.health = health;
  }

  setDefense(defense:number) {
    this.char.defense = defense
  }

  setAttack(attack: number) {
    this.char.attack = attack;

    if (this.char.type === 'healer' && attack > 20) {
      attack = 20
    }
  }

  constructor() {
    this.char = new Character();
  }

  getCharacter() {
    return this.char;
  }
}

const builder = new CharacterBuilder()

builder.setType('healer')
builder.setAttack(50)
builder.setDefense(10)
builder.setWeapon({ bestClass: 'healer', attack: 5 })

const myChar = builder.getCharacter()
console.log(myChar)
