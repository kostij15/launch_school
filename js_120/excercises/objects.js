//2. Testing Object Equality
// function objectsEqual(obj1, obj2) {
//   let obj1Keys = Object.keys(obj1);
//   let obj2Keys = Object.keys(obj2);

//   if (obj1Keys.length !== obj2Keys.length) return false;

//   return obj2Keys.every(key => {
//     if (typeof obj2[key] === 'object') {
//       return objectsEqual(obj2[key], obj1[key]);
//     } else {
//       return (obj1Keys.includes(key) && obj2[key] === obj1[key]);
//     }
//   });
// }

// console.log(objectsEqual({ a: { a: 'foo' } }, { a: { b: 'foo' } }))
// // console.log(objectsEqual({ a: 'foo' }, { a: 'foo' }));                      // true
// // console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' }));            // false
// // console.log(objectsEqual({}, {}));                                      // true
// // console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 }));  // false

//3. Student

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse(courseObj) {
      if (('name' in courseObj) && ('code' in courseObj)) {
        this.courses.push(courseObj);
      }
    },

    listCourses() {
      return this.courses;
    },

    findCourse(courseProperty, courseValue) {
      return this.courses.find(courseObj => courseObj[courseProperty] === courseValue);
    },


    addNote(courseCode, note) {
      let courseObj = this.findCourse('code', courseCode);

      if (courseObj['note']) {
        courseObj['note'] += `; ${note}`;
      } else {
        courseObj['note'] = note;
      }
    },

    updateNote(courseCode, note) {
      let courseObj = this.findCourseByCode('code', courseCode);

      courseObj['note'] = note;
    },

    viewNotes() {
      this.courses.forEach(courseObj => console.log(`${courseObj['name']}: ${courseObj['note']}`));
    },

    hasCourseGrade(courseName) {
      return this.findCourse('name', courseName).hasOwnProperty('grade');
    },

    viewAllGrades() {
      this.courses.forEach(courseObj => {
        if (courseObj['grade']) {
          console.log(`${courseObj['name']}: ${courseObj['grade']}`);
        } else {
          console.log(`${courseObj['name']}: In Progress`);
        }
      })
    }
  }
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// //"Foo is a 1st year student"
// console.log(foo.listCourses());
// //[];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// console.log(foo.listCourses());
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// //"Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// //"Math: Fun course; Remember to study for algebra"
// //"Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// //"Advanced Math: Difficult subject"

//School

function createSchool() {

  return {
    students: [],

    addStudent(name, year) {
      const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

      if (!VALID_YEARS.includes(year)) {
        console.log("Invalid Year");
      } else {
        let newStudent = createStudent(name, year);

        this.students.push(newStudent);
        return newStudent;
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({ name: courseName, code: courseCode });
    },

    addGrade(student, courseName, courseGrade) {
      let courseObj = student.findCourse('name', courseName);

      courseObj['grade'] = courseGrade;
    },

    getReportCard(student) {
      student.viewAllGrades();
    },

    anyStudentHasGrade(courseName) {
      return this.students.some(studentObj => {
        let courseObj = studentObj.findCourse('name', courseName);

        return courseObj && courseObj['grade'];
      });
    },

    courseReport(courseName) {
      if (!this.anyStudentHasGrade(courseName)) return;
      let totalGrade = 0;
      let totalStudents = 0;

      console.log(`=${courseName} Grades=`)

      for (let i = 0; i < this.students.length; i++) {
        let studentObj = this.students[i];
        let courseObj = studentObj.findCourse('name', courseName);

        if (courseObj && courseObj['grade']) {
          totalGrade += courseObj['grade'];
          totalStudents += 1;

          console.log(`${studentObj['name']}: ${courseObj['grade']}`);
        }
      }


      console.log('---');
      console.log(`Course Average: ${(totalGrade / totalStudents).toFixed(0)}\n`);
    },


  }
}

let school = createSchool();
let foo = school.addStudent('Foo', '1st');
school.enrollStudent(foo, 'Math', 101);
school.addGrade(foo, 'Math', 95);

school.enrollStudent(foo, 'Advanced Math', 102);
school.addGrade(foo, 'Advanced Math', 90)

school.enrollStudent(foo, 'Physics', 202);
// school.getReportCard(foo);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.addGrade(qux, 'Math', 93);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Advanced Math', 90);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics')