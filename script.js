// Exercises:Loops
// Iterate 0 to 10 using for loop, do the same using while and do while loop.
// program to display numbers from 1 to 5



for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("-----------------------")
// while döngüsü
let i =0
while (i < 10) {
  console.log(i)
  i++
}
console.log("----------------------")
// do while döngüsü 
i =0
do {
  console.log(i)
  i++
}
while (i < 10);

console.log("-----------------------")
//  // program to display numbers from 1 to 5
// program to display numbers from 1 to 5



for (let i = 1; i <= 5; i++) {
    console.log(i);     
}
console.log("------------------------")
// Iterate 10 to 0 using for loop, do the same using while and do while loop.

for(let i = 10; i >= 0; i-- ) {
    
   console.log(i); 
}

console.log("------------------------")
 i =10
while (i >=0) {
  console.log(i)
  i--
}
console.log("-------------------------")
// do while döngüsü ile 
i =10
do {
  console.log(i)
  i--
}
while (i >= 0);

console.log("-----------------------") 





// Write a loop that makes seven calls to console.log to output the following triangle:
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
for (let i = "#"; i.length < 8; i += "#")
  console.log(i);
console.log("-----------------------") 
// Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.

var programming = ['HTML', 'CSS', 'JavaScript']
for(i =0;i<programming.length;i++){
  console.log(programming[i])
}

console.log("-----------------------") 


// Use for loop to iterate from 0 to 100 and print only even numbers



for (let i = 0; i <= 100; i++) {
  if(i%2===0) {
    console.log(i)
  }
   
}

console.log("-----------------------") 


// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 1; i <= 100; i++) {
  if(i%2!=0) {
    console.log(i)
  }
   
}

console.log("-----------------------") 


// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);

console.log("-----------------------") 





// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// sum of all odd numbers
 sum = 0;

for (let i = 1; i <= 100; i++) {
  if(i%2!=0) {
     sum += i; 
  }
   
}
console.log('sum:', sum);

console.log("-----------------------") 
//// sum of all odd numbers
 sum = 0;

for (let i = 1; i <= 100; i++) {
  if(i%2===0) {
     sum += i; 
  }
   
}
console.log('sum:', sum);

console.log("-----------------------")


// The sum all numbers in a given number. Ex. 5465 => 5+4+6+5 => 20  
let number ="5465"
sum = 0;

while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
//5 6 4
console.log(sum);

console.log("-----------------------") 


//Develop a small script which generate a six characters random id:
//Ex.: 5j2khz

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(7));