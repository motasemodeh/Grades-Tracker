'use strict'

var table = document.getElementById('studentsTable');


function Student(student, course)
{
    this.studentName = student;
    this.grade = this.getRandomGrade();
    this.courseName = course;    
}

Student.prototype.getRandomGrade = function()
{
    return this.grade = Math.floor(Math.random() * 101);

};

var studentOne = new Student(studentName, Student.grade, courseName);
console.log(studentOne);

// render The Header
function renderHeader() {
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    var nameCell = document.createElement('th');
    nameCell.textContent = 'Student Name';
    headerRow.appendChild(nameCell);

    var gradeCell = document.createElement('th');
    gradeCell.textContent = 'Student Grade';
    headerRow.appendChild(gradeCell);

    var courseCell = document.createElement('th');
    courseCell.textContent = 'Course';
    headerRow.appendChild(courseCell);
}
renderHeader();

Student.prototype.tableBody = function () {
    var studentRow = document.createElement('tr');
    table.appendChild(studentRow);

    var studentName = document.createElement('td');
    studentName.textContent = this.studentName;
    studentRow.appendChild(studentName);
    // console.log(studentName)

    var studentGrade = document.createElement('td');
    studentGrade.textContent = this.grade;
    studentRow.appendChild(studentGrade);

    var courseName = document.createElement('td');
    courseName.textContent = this.courseName;
    studentRow.appendChild(courseName);
}


var form = document.getElementById('addStudentForm');
form.addEventListener('submit', submitUserData);

function submitUserData(event) {
    event.preventDefault();

    var newStudent = event.target.studentName.value;
    var newCourse = event.target.courseName.value;

    var newStudent = new Student(newStudent, newCourse);

    newStudent.tableBody();
console.log(newStudent);
// console.log(Student.grade)
console.log(newCourse);
}

