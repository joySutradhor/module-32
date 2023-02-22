
// find object value 

const users = [
    {
        id : 0, name : "joy" , job : "bekar"
    }
]
// console.log(users[0].name);
const data = {
    data : [
        {id:1 , name : "joy" , job : "bekar"},
        {id:2 , name : "jon" , job : "bekartwo"}
    ]   
}

// console.log(data.data[0].job);

const user = {
    id : 200 ,
    address : {
        street : {
            first : "hossain pur",
            second : "natpara",
            third : "mondir ar smne"
        }

    },
    postOffce : 2400,
    city : "netrakona"
}
// Cannot read properties of undefined (reading 'third')
// atar mane hocche majkhane kuno ata value missing , object ar belai kuno akta value undefind pacche se jnnnw ei error ta dicche

// console.log(user.address?.street?.third);



const sister = {
    id : 200 ,
    address : {
        street : {
            first : "hossain pur",
            second : "natpara",
            third : "mondir ar smne"
        }

    },
    postOffce : 2400,
    city : "netrakona" ,
    

}

console.log(sister.city)