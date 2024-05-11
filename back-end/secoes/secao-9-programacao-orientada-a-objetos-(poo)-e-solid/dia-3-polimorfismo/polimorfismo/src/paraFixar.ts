abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void 

  static characterPresentation(character: Character): void {
    character.talk()
    character.specialMove()
  }

}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super(); 
  }
  talk() {console.log(`Hi, I'm ${this._name}. I attack at close range.`)}

  specialMove() {
    console.log(`${this._name} used ${this._specialMoveName}!`);    
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super(); 
  }
  talk() {console.log(`Hi, I'm ${this._name}. I can attack from a long range.`)}

  specialMove() {
    console.log(`${this._name} used ${this._specialMoveName}!`);    
  }
}

const p1 = new  MeleeCharacter('Yoshi', 'Super dragon')
const p2 = new  LongRangeCharacter('Samus', 'zero lazer')

Character.characterPresentation(p1);
Character.characterPresentation(p2)



 