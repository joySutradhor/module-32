


// Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.


//  using arry.reduce function 

const person = [
    { name : "joy" , age : 400},
    { name : "jon" , age : 20},
    { name : "mesu" , age : 10},
    { name : "mama" , age : 50},
    { name : "thamma" , age : 52},
    { name : "anonna" , age : 12},

] ;


const totalSum = person.reduce((num1 , num2) => {
    console.log(num1 , num2);
  return   num1 + num2.age;

}, 0)
console.log(totalSum);

