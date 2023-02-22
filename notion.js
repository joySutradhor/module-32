
const student = {
    name : "joy" ,
    age : 20 ,
    class : 9 ,
    marks : {
        math : 70 ,
        bangla : 50 ,
        english : {
            first : 20 ,
            second : 35
        }
    }
}

console.log(student.marks.bangla);
const result = student["marks"]["math"]
console.log(result);
const store = "english" ;
const english = student.marks[store].first;
console.log(english);

