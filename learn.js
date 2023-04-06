// var number = [1, 2, 3, 4, 5, 2, 66, 77, 9, 10]

// array 
//  length , index

// exp output 
//  the last element is 4 and 5

var template = "The last element is "
for (let i = 1; i < number.length; i++) {
   if (i == number.length - 1) {
      template = template + i + " and "

   }
}
for (let j = 0; j <= number.length; j++) {
   if (j == number.length) {
      template = template + number[j - 1]
   }
}
console.log(template);
//--------------------------------------------------------
// AUB & AU^B
// a is an array with 10 numbers
// b is an array with 7 numbers

variables
const firstNo =[1,2,3,4,5,6,7,8,9,10];
const secondNo = [1,2,3,4,5,6,7]

AUB
const res =firstNo.concat(secondNo);
console.log(res);

// AnB

const x = [40, 60, 70, 100]
const y = [30, 40, 80, 90, 10]
var z =[]
for (let i = 0; i < x.length; i++) {
   for (let j = 0; j < y.length; j++) {
      if (x[i] == y[j]) {
        z.push(x[i])
       
      }
   }
}
console.log(z)

// ----------------------------------------------
