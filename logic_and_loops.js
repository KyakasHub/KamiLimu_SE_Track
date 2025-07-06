//Name: Ryan Kyaka
//Date: 6th July 2025

const prompt = require('prompt-sync')();
const students = ["Alice Ate", "Bob", "Charlie"];
console.log("Student Roll Call:");

// TODO: Check if either condition qualifies (starts with A OR ends with e)
for (const student of students) {
  if (student.startsWith("A") || student.endsWith("e")) {
    console.log(`- Welcome, ${student.toLowerCase()}!`);
  }
}

// TODO:1.Extract the conditional logic into a function.
function studentsWelcome(studentNames){
  for(const studentName of studentNames ){
    // Using .toLowerCase() to make it case-insensitive
    if(studentName.startsWith("A".toLowerCase()) || studentName.endsWith("e".toLowerCase())){
console.log(`- Welcome, ${studentName.toLowerCase()}!`);  
  }
  }
}
studentsWelcome(students);

// TODO: 2. Adding Logic for first and last names.
const studentNames = ["Alice Ate", "Bob", "Charlie Mason", "Anna Marie", "Brian Ate"];
console.log("Student Roll Call:");

for (const studentName of studentNames) {
  const names = studentName.split(" ");
  const firstName = names[0].toLowerCase();
  const lastName = names[names.length - 1].toLowerCase();

  if (firstName.startsWith("a") || lastName.endsWith("e")) {
    console.log(`Welcome, ${studentName}!`);
  }
}


//TODO: 3.Create a dynamic array that accepts user input until they type "done".
let nameInputs= [];
let studentName= prompt("Enter a student name or type 'done' when finished: ");
while(studentName != null && studentName.toLowerCase() !="done"){
  nameInputs.push(studentName);
  studentName=prompt("Continue until finished: ");
}
console.log(nameInputs);
