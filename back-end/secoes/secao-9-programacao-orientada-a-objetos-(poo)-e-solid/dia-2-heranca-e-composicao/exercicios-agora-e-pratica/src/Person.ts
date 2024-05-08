export default class Person {

  protected MINIMUM_NAME_LENGTH = 3;

  protected MAXIMUM_AGE = 120;
  
  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this.validatePerson();
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    //                 data de hoje  -     data de nascimento 
    const diff = Math.abs(new Date().getTime() - date.getTime());
       // o resultado vem em milissegundos 
    const yearMs = 31_536_000_000;
      // vamos pegar o valor em milissegundos e dividir por um ano em milissegundos
    return Math.floor(diff / yearMs);
    // dai é só chamar o método math.floor (arredondando o valor) e divídindo 
  }

  private validateName(name: string): void {
    if(name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
    }
  }

  private validateBirthDate(date:Date): void {
    if(date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.')
    }
    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`)
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}