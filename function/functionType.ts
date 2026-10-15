let sayHello = function (name: string, firstName: string, age:number): string{
    //interpolation lineaire
    return `Hello ${name} ${firstName} vous avez ${age} ans`
 //return  "Hello "+ name.toLocaleUpperCase() + " " + firstName + " " + "vous avez "+ age + " ans"
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

//union type
function union(a: number | string, b: number | string) : string | number {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}