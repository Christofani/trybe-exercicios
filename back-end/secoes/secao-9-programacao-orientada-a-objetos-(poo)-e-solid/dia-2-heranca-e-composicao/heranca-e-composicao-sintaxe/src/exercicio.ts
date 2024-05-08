class Superclass {

  isSuper: boolean;
  // definindo  isSuper como boolean

  // setando como (true)
  constructor() {
    this.isSuper = true;
  }


 // criando um método chamado say hello que imprimi 'Olá mundo'
  public sayHello(): void {
    console.log(('Olá mundo!'));
  }
}

//criando uma subclass , crio a função myFunc que recebe um objeto do tipo Superclass
class Subclass extends Superclass { 
  constructor() {
    super();
    this.isSuper = false
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello();

  console.log(obj.isSuper ? 'Super!' : 'Sub!');
  
};

// crio os objetos do tipo super e sub class
const sup = new Superclass();
const sub = new Subclass();

// e passo os objs  como parâmetro da função (myFunc)
myFunc(sup);
myFunc(sub)