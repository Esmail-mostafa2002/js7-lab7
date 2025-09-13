
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  showDetails() {
    return `Employee: ${this.name}, Position: ${this.position}`;
  }
}

export default Employee;
