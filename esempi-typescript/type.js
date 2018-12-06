"use strict";
// any, void, null, undefined, never
var age = 41;
age = '41';
age = [];
age = {};
var rowExcel = [41, 'Baldi', 'Daniele', { city: 'Montignoso', address: 'Via croce 53' }];
rowExcel = [null, undefined];
var testVoid = undefined;
//testVoid = null; dipende configurazione Typescript nel file tsconfig
function printName() {
    return testVoid;
}
