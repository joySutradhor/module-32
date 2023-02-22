
const numbers = [2,5,6,7,8] ;

// const total = numbers.reduce((pre , current) => pre + current , 0 );
const total = numbers.reduce((pre , current) => {
    // console.log(pre, current);
    const add = pre + current ;
    
    return add ;
}, 2 );
console.log(total );
