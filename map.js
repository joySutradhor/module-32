
// MAP = Morph array piece by piece.
//  map amder value niye kaj korte help kore , and object ar value pete help kore


const numbers = [2,45,6,7,86,3];

function doubleIt (){

    const output = []

    for (const num of numbers){
        const double = doubleIts(num);
        output.push(double);
    
    }
    return output ;
}
const doubleIts = (num) => num * 3 ;
// console.log(doubleIt(numbers));

// function getDouble (nums){
//     return nums * 2 ;

// };

//  get a array , 
//  return result as a array 


const makedouble =  numbers.map(doubleIts) ;

const divide = numbers.map(nums => nums / 2 )

console.log(divide)
console.log(makedouble);

const friend = [1,2,4,5,6,7].map(x => x *5);
console.log(friend);

const maxfriend = Math.max(...friend);
console.log(maxfriend);


const numberss = [2,45,6,7,86,35];
const max = numberss.filter( x => x>30);
console.log(max);
 