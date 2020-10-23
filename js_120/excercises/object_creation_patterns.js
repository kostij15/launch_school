//1.
// let foo = {
//   name: 'foo',

//   ancestors() {
//     let objectNames = [];
//     let prototype = Object.getPrototypeOf(this);

//     while (prototype) {
//       if (prototype.name) {
//         objectNames.push(prototype.name);
//       } else {
//         objectNames.push('Object.prototype')
//       }
//       prototype = Object.getPrototypeOf(prototype);
//     }
//     console.log(objectNames);
//   }
// };
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  

//2. Classical Object Creation

// let Person = class {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }

//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName);
//   }

//   communicate() {
//     console.log('Communicating');
//   }

//   eat() {
//     console.log('Eating');
//   }

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender);
//     this.specialization = specialization;
//   }

//   diagnose() {
//     console.log('Diagnosing');
//   }
// }

// class Professor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender);
//     this.subject = subject;
//   }

//   teach() {
//     console.log('Teaching');
//   }
// }

// let Student = class extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender);
//     this.degree = degree;
//   }

//   study() {
//     console.log('Studying');
//   }
// }

// let GraduateStudent = class extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }

// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

//3.Circular Queue
class CircularQueue {
  constructor(queueNum) {
    this.queueNum = queueNum;
    this.queueArray = [];
  }

  enqueue(obj) {
    this.queueArray.unshift(obj);

    if (this.queueArray.length > this.queueNum) {
      this.dequeue();
    }
  }

  dequeue() {
    if (this.queueArray.length === 0) return null;

    return this.queueArray.pop();
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);