
const numbers = [12,56,87,44];
const result = numbers.map(x => x > 20) ;
// console.log(result);
const friends = ["Tom Hanks" , "Tom Cruise" , "Tom Brady" , "Tom Sukon solaiman"] ;
const element = friends.map(x => x[0]);
const nameLength = friends.map(x => x.length);
// console.log(nameLength);
// console.log(element);

const products = [
    { id: 1 , name : "laptop", price : 20000  },
    { id: 2 , name : "phone", price : 15000  },
    { id: 1 , name : "Desktop", price : 40000  },
    { id: 1 , name : "tablet", price : 70000  }
]

// const nameList = products.map(x => x.price > 50000 );
const nameList = products.map(x => {
    let namelist = x.name;
    let priceList = x.price;
    console.log(namelist , priceList);
});
// console.log(nameList);