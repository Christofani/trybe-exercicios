const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = () => {
    const danoMin = 15;
    const danoMax = Math.floor(Math.random() * dragon.strength);
    const danoDragon = danoMax > danoMin ? danoMax : danoMin;
    return danoDragon;    
};

const danoWarrior = () => {
    const danoMinumum = warrior.strength;
    const danoMaximum = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));
    const danoW = danoMaximum > danoMinumum ? danoMaximum: danoMinumum;
    return danoW;
};

const danoMago = (mage) => {
    const manaMago = mage.mana;
    const danoMinimo = mage.intelligence;
    const danoMaximo = danoMinimo * 2;
    const status = {
        manaGasta: 0,
        danoCausado: 'Sem mana'
    };
    if (manaMago > 15) {
        const danoMagico = danoMinimo < danoMaximo ? danoMaximo: danoMinimo;
        status.manaGasta = 15;
        status.danoCausado = danoMagico;
        return status
    }
    return status;
}; 

const gameActions = {
  // Crie as HOFs neste objeto.
    guerreiro: (ataqueGuerreiro) => {
        const danoGuerreiro = ataqueGuerreiro(warrior);
        dragon.healthPoints -= danoGuerreiro;
        warrior.damage = danoGuerreiro;
    }
};
gameActions.guerreiro(ataqueGuerreiro);