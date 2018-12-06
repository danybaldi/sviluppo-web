"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showUser(user) {
    console.log(user.name + ' ' + user.surname);
}
exports.showUser = showUser;
showUser({ name: 'Daniele', surname: 'Baldi' });
;
function showUser2(user) {
    console.log(user.name + ' ' + user.surname);
}
showUser2({ name: 'Daniele', surname: 'Baldi' }); //address opzionale
function showUser3(user) {
    console.log(user.name + ' ' + user.surname + ' ' + user.age);
}
showUser3({ name: 'Daniele', surname: 'Baldi', title: 'Engineer', age: 41 });
