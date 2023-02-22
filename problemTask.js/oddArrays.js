
// You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.


const numbers =   [ 1, 3, 5, 7, 9 ] ;

const toEven = numbers.map( number => number + 1);
console.log(toEven);