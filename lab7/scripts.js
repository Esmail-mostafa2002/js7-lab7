// 1- Create a Shape class with a method calculateArea. Create Rectangle and Circle classes 
// that inherit from Shape, add specific properties, and include a static method to compare areas.
class Shape {
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }

}
class Rectangle extends Shape {
    constructor(width , height){
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }

}
class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    
}
// Static Method to compare areas
class ShapeUtils {
  static compareAreas(shape1, shape2) {
    const area1 = shape1.calculateArea();
    const area2 = shape2.calculateArea();

    if (area1 > area2) return "Shape 1 is larger";
    if (area1 < area2) return "Shape 2 is larger";
    return "Both shapes have equal area";
  }
}
// Example usage:
const rect = new Rectangle(10, 20);
const circ = new Circle(15);
console.log("Rectangle Area:", rect.calculateArea());
console.log("Circle Area:", circ.calculateArea());
console.log(ShapeUtils.compareAreas(rect, circ));

// 2- Create a Person constructor function with properties name and age, and a method introduce.
//  Create Teacher and Student constructor functions that inherit from Person, add specific properties,
//   and include a static method to compare test scores.
// Parent Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
  }
}

// Teacher Class (inherits from Person)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // استدعاء constructor الأب
    this.subject = subject;
  }
}

// Student Class (inherits from Person)
class Student extends Person {
  constructor(name, age, grade, score) {
    super(name, age);
    this.grade = grade;
    this.score = score;
  }

  // Static method to compare scores
  static compareScores(student1, student2) {
    if (student1.score > student2.score) return `${student1.name} has a higher score.`;
    if (student1.score < student2.score) return `${student2.name} has a higher score.`;
    return "Both students have equal scores.";
  }
}

// ✅ تجربة
const teacher1 = new Teacher("Mr. Ali", 40, "Math");
console.log(teacher1.introduce()); 
// Hi, I'm Mr. Ali, and I'm 40 years old.

const student1 = new Student("Sara", 18, "12th", 95);
const student2 = new Student("Omar", 18, "12th", 88);

console.log(student1.introduce()); 
// Hi, I'm Sara, and I'm 18 years old.

console.log(Student.compareScores(student1, student2)); 
// Sara has a higher score.
