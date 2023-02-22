
//  for each theke value return pawya jay na . for each kuno variable a rakle seta undefiend return kore. 
const friends = ["Tom Hanks" , "Tom Cruise" , "Tom Brady" , "Tom Sukon solaiman"] ;
friends.forEach(friend => {
    let lengthName = friend[0]
    // console.log(lengthName);
});

const products = [
    { id: 1 , name : "laptop", price : 20000  },
    { id: 2 , name : "phone", price : 15000  },
    { id: 1 , name : "Desktop", price : 40000  },
    { id: 1 , name : "tablet", price : 70000  }
]

products.forEach(x => console.log(x.price * 3))
    
