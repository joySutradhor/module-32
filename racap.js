
// var , let ,const 

// const ar man sate satei value assign kora lagbe , reasign kora jabe na 
const num = [3,54,5,]
// num = [3,54,5] 
// wrong approch 

 let x = [3,54,65];
//  let x= [4,6,6]
//  wrong approch
x = [3,5,5]

// 2. default parameter , default parameter hisabe amra value add kore rakte pari 

function defaultParameter (x , y=0){
    let result = x + y ;
    return result
}
// defaultParameter (5);

// 3. template string . template string diye amra multiline lhikte pari abong dynamic value dite pari .

const elementHtml = `
hello line one .
hello line two
hello line three .
${defaultParameter(5,6)}
`
// console.log(elementHtml);

// 4. arrow function , amra arrow funtion diye shojei calculation korte pari . 

const doubleIt = x => x * 3 ;
// console.log(doubleIt(5));

const calculateSalary = (salary , tax , bounus) => salary- salary * tax + bounus ;
// console.log(calculateSalary(20 , .5 , 2));


//5 spread operator ;
const ages = [2,4,56,6,7]
const newAges = [...ages] ;
ages.push(60, 20);
newAges.push(50);
// console.log(ages);
// console.log(newAges);

// 6 destructuring ;
const {roll , year , ...z} = {
    name : "joy" ,
    year : 200 , 
    class : 7 ,
    roll : 20 ,
    section : "c",
    teacher : "raju sir"
}
// console.log(year , roll, z);

const arr = [20,4,4,65,88,66,867,3]
const [xx , y , ...k] = arr ;
// console.log(xx , y , k);