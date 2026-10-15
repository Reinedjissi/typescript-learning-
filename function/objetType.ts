
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
 employee= {
    firstName: "reine",
    lastName: "djissi",
    age: 22,
    jobTitle: "dev",
};
//la destructuration 

const {age}= employee
console.log(age);

let res = Object.values(employee);
let result = Object.keys(employee);
let result1 = Object.entries(employee);
console.log(res);
console.log(result);
console.log(result1);



