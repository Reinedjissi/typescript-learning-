let sayHello = function (name: string, firstName: string, age:number): string{
 return "Hello "+ name.toLocaleUpperCase() + " " + firstName + " " + "vous avez "+ age + " ans"
}
let p1 = sayHello("Djissi","Reine", 22)
console.log(p1);


function add (a: number, b: number): number{
    return a+b
}
console.log(add(1, 4));

const soustract = (x: number, y: number): number => x-y



const multiplie = (x: number, y: number): number => {
    let count = add(x, y);

   return count*y

}
let m = multiplie(1,2);
console.log(m);
