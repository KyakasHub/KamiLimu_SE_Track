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

//TODO: 3.Create a dynamic array that accepts user input until they type "done".
let nameInputs= [];
let studentName= prompt("Enter a student name or type 'done' when finished: ");
while(studentName != null && studentName.toLowerCase() !="done"){
  nameInputs.push(studentName);
  studentName=prompt("Continue until finished: ");
}
console.log(nameInputs);
