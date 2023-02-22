
//  fiter amder akta array return kore ....

const numbers = [2,45,6,7,86,3];
const max = numbers.filter( x => x > 30);
const min = numbers.filter( x => x < 30);
const even = numbers.filter(x => x % 2 == 0);
// console.log(even);
// console.log(max);
console.log(min);

const products = [
    { id: 1 , name : "laptop", price : 20000  },
    { id: 2 , name : "phone", price : 15000  },
    { id: 1 , name : "Desktop", price : 40000  },
    { id: 1 , name : "tablet", price : 70000  }
]

const maxPrice = products.filter( x => x.price > 20000);
console.log(maxPrice);