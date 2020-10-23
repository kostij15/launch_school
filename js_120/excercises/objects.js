//2. Testing Object Equality
// function objectsEqual(obj1, obj2) {
//   let keysOne = Object.keys(obj1);
//   let keysTwo = Object.keys(obj2);

//   if (keysOne.length !== keysTwo.length) return false;

//   return keysOne.every((key) => {
//     return keysTwo.includes(key) && keysOne[key] === keysTwo[key];
//   });
// }

// console.log(objectsEqual({ a: 'foo' }, { a: 'foo' }));                      // true
// console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' }));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 })); 

//3. Student

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    listCourses() {
      return this.courses;
    },

    findCourseByCode(courseCode) {
      return this.courses.find(listedCourse => listedCourse.code === courseCode);
    },

    findCourseByName(courseName) {
      return this.courses.find(listedCourse => listedCourse.name === courseName)
    },

    addNote(course, note) {
      let searchCourse = this.findCourseByCode(course);

      if (searchCourse.hasOwnProperty("notes")) {
        searchCourse["notes"].concat(';', note);
      } else {
        searchCourse["notes"] = note;
      }
    },

    updateNote(course, note) {
      let searchCourse = this.findCourseByCode(course);

      course['notes'] = note;

    },

    viewNotes() {
      for (let i = 0; i < this.courses.length; i++) {
        let course = this.courses[i];

        if (course.hasOwnProperty('notes')) {

          console.log(`${course['name']}: ${course['notes']}`);
        }
      }
    },
  }
}

// let foo = createStudent('Foo', '1st');
// foo.info();

// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });

// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// // foo.viewNotes();

// foo.addNote(102, 'Difficult subject');
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();

//4. School
function createSchool() {
  return {
    students: [],

    addStudent(studentName, studentYear) {
      const YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
      if (YEARS.includes(studentYear)) {
        let newStudent = createStudent(studentName, studentYear);
        this.students.push(newStudent);
        return newStudent;
      } else {
        console.log("Invalid Year.");
      }
    },

    enrollStudent(student, courseObj) {
      student.addCourse(courseObj);
    },

    addGrade(student, courseName, grade) {
      let studentCourse = student.findCourseByName(courseName);
      studentCourse['grade'] = grade;
    },

    getReportCard(student) {
      for (let i = 0; i < student.courses.length; i++) {
        let course = student.courses[i];

        if (course.hasOwnProperty('grade')) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      }
    },

    courseReport(courseName) {
      let numStudents = this.students.filter(student => {
        let studentCourse = student.findCourseByName(courseName);
        return studentCourse && studentCourse.hasOwnProperty('grade');
      }).length;

      if (numStudents > 0) {
        let courseAverage = this.students.reduce((gradeTotal, student) => {
          let studentCourseGrade = student.findCourseByName(courseName)['grade'];
          if (studentCourseGrade) {
            return gradeTotal + studentCourseGrade;
          }
          return gradeTotal;
        }, 0) / numStudents

        console.log(`=${courseName} Grades=`);

        for (let i = 0; i < this.students.length; i++) {
          let student = this.students[i];
          let studentCourse = student.findCourseByName(courseName);

          if (studentCourse) {

            console.log(`${student.name}: ${studentCourse['grade']}`);
          }
        }
        console.log(`Course Average: ${courseAverage.toFixed(0)}`);
      }
    }
  }
}

let school = createSchool();

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102, });
school.enrollStudent(foo, { name: 'Physics', code: 202, });

school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101, });
school.addGrade(bar, 'Math', 91);

// school.getReportCard(foo);
school.courseReport('Physics');
