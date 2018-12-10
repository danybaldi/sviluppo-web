interface IUser {
    name:string,
    surname:string
}

export function showUser(user:IUser){
    console.log(user.name + ' ' + user.surname);
}

showUser({name:'Daniele',surname:'Baldi'});;

interface IUser2 {
    name:string,
    surname:string,
    address?:string
}

function showUser2(user:IUser2){
    console.log(user.name + ' ' + user.surname);
}

showUser2({name:'Daniele',surname:'Baldi'}); //address opzionale

interface IUser3 {
    name:string,
    surname:string,
    address?:string,
    [props:string]:any //proprietà aggiuntive con chiave stringa di qualsiasi tipo
}

function showUser3(user:IUser3){
    console.log(user.name + ' ' + user.surname+' '+user.age);
}

showUser3({name:'Daniele',surname:'Baldi',title:'Engineer',age:41}); 

