let series = [1, 2, 3];
 function cb(a:number) {
    return a * 2
}
const callBack = () => 3 ;
let doubleIt = series.map(e => e*2);
console.log(doubleIt);

//tuple vs array
let color: [number, number, number] = [255, 0,0];//tuple
let list: number[] | string[]| boolean[]; //array
list = [4,4];
list =["reine"];
console.log(list);

//inference
let list2:(string | number)[];
list2=["yess",0];

//union type
function add(a: number | string, b: number | string) : string | number {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}