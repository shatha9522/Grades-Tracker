'use strict'
var table =document.getElementById('studenttable');
function StudentInfo(studentName,course){
this.studentName=studentName;
this.course=[Arabic, English, Math, Science, Art];
this.grade=randomGrade();
}


document.getElementById("submit").addEventListener('submit', addStudent);

function addStudent(){

    var newStudent=new StudentInfo(studentName,course);
    randomGrade();
     
   localStorage.setItem("localArray", JSON.stringify(newStudent));
   var localStorageArray = localStorage.getItem("localArray");

}


    
function randomGrade(){
    return Math.floor(Math.random() * (100 - 0) ) + 0;
    
}

function createHeader(){
    
    var tableHeader=document.createElement('th');
    table.appendChild(tableHeader);

    var studenNameRow=document.createElement('th');
    tableHeader.appendChild(studenNameRow);
    studenNameRow.textContent='Student Name ';

    var studentGradeRow=document.createElement('th');
    tableHeader.appendChild(studentGradeRow);
    studentGradeRow.textContent='Student Grade ';


    var studentCourseRow=document.createElement('th');
    tableHeader.appendChild(studentCourseRow);
    studentCourseRow.textContent='Course';
    
}
function createTable(){
    createHeader();
    var tableRow=document.createElement('tr');
    table.appendChild(tableRow);

    var StudentNameData=document.createElement('td');
    tableRow.appendChild(StudentNameData);
    StudentNameData.textContent=this.studentName;

    var StudentGradeData=document.createElement('td');
    tableRow.appendChild( StudentGradeData);
    StudentGradeData.textContent=this.grade;
    

    var StudentCourseData=document.createElement('td');
    tableRow.appendChild(StudentCourseData);
    StudentCourseData.textContent=this.course; 

}

createTable();