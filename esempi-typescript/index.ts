function test(){
    for(let i=0; i<10; i++){
        console.log(i);
    }
    //console.log(i);
}

test();

var y = 2;
function quadrato(x:number){
    return x*x;
}

console.log(quadrato(y));

interface Messaggio {
    email:string;
    messaggio: string;
}

function inviaMessaggio(msg:Messaggio){
    alert(msg.email);
    alert(msg.messaggio);
}

inviaMessaggio({email:"daniele@it",messaggio:"testo"});

class Persona {
    name: string;
    surname: string;
    constructor(n,s){
        this.name = n;
        this.surname = s;
    }
    stampaNome(){
        console.log(this.name + ' ' + this.surname);
    }
}

namespace myNamespace{
    var pippo = 'a';
    export function myfunction(){ alert('pippo')}
}