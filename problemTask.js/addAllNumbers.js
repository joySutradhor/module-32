
// You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.


// using reduce function
const numbers = [ 1, 9, 17, 23 ] ;
const add = numbers.reduce( (num1 , num2) =>  num1 + num2 )
console.log(add);

// using for loop 
const arr = [1, 9, 17, 23];

let sum = 0 ;
for (const a of arr){
    sum = sum + a ;

}
console.log(sum);