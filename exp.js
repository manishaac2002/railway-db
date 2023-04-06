const numbers = [45, 4, 9, 16, 25];

let txt =""
for (let x in numbers) {
  txt += numbers[x]+" ";
}

console.log(txt);

const student = {
    name:"Manisha",
    subject:"JS",
    contact :"98984752399"
}
console.log(student);
var length = Object.keys(student).length;//3


    for (const key in student) {
    if (student.hasOwnProperty.call(student, key)) {
            const element = student[key];
            
        }
    }
    
    console.log(element);
    
    // var expOutput = "name : Manisha, subject : JS and contact :98984752399"