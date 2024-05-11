class Employee2 {
  private static employeeCount = 0

  private employeeName: string;

  constructor(name: string) {
    Employee2.addEmployee();

    this.employeeName = name
  }

  private static addEmployee() {
    Employee2.employeeCount += 1;
    console.log(`Total de pessoas funcionárias: ${Employee2.employeeCount}`);
  }

  public getName(): string {
    return this.employeeName
  }
}

const Em1 = new Employee2('Rodrigo')
const Em2 = new Employee2('Jéssica')
const Em3 = new Employee2('Paula')