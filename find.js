
//  find amder akta value or akta object return kore

const numbers = [10,45,6,75,86,3];

const fives = numbers.find(num => num % 5 == 0);
const allFives = numbers.filter( num => num % 5 == 0);
console.log(allFives);
console.log(fives);

const products = [
    { id: 1 , name : "laptop", price : 20000  },
    { id: 2 , name : "phone", price : 15000  },
    { id: 1 , name : "Desktop", price : 40000  },
    { id: 1 , name : "tablet", price : 70000  }
]

// const minPrice = products.find(product => product.price < 40000);
const minPrices = products.find(product => product.price > 22000);
console.log(minPrices);