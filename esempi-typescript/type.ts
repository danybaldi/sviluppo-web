// any, void, null, undefined, never

let age:any = 41;

age = '41';
age = [];
age = {};

let rowExcel:any[] = [41,'Baldi','Daniele',{city:'Montignoso',address:'Via croce 53'}]; 
rowExcel = [null,undefined];

let testVoid: void = undefined;
//testVoid = null; dipende configurazione Typescript nel file tsconfig

function printName():void{
    return testVoid;
}
