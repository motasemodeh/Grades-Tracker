var studentName = document.getElementById('studentName');
var courseName = document.getElementById('courseName');
var addStudentForm = document.getElementById('addStudentForm');
var studentsTable = document.getElementById('studentsTable');
var submitBtn = document.getElementById('submitBtn');


var studentsTableArea = document.getElementById('studentsTableArea');

function student(fullName, course, grades) {
    this.studentFullName = fullName;
    this.studentGrades = grades;
    this.courseName = course;
  }

  // students objects
  var hana = new Person("hana", 48, "Arabic");
  var farah = new Person("Farah", 48, "Scince");
  var doaa = new Person("Doaa", 48, "Math");



  function tableHeader()
  {
    
  }
function submitUserData(event) {
  event.preventDefault();

    localStorage.setItem("userName", studentName.value);
    
    localStorage.setItem("courseName", courseName.value);

    
  }
  
  addStudentForm.addEventListener('submit', submitUserData);

  for (var i = 0; i < localStorage.length; i++) {
    var x = localStorage.getItem("userName");
    document.getElementById("studentsTableArea").innerHTML = x;
    var y = localStorage.getItem("userName");
    document.getElementById("studentsTableArea").innerHTML = y;
  }