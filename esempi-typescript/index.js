function test() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    //console.log(i);
}
test();
var y = 2;
function quadrato(x) {
    return x * x;
}
console.log(quadrato(y));
function inviaMessaggio(msg) {
    alert(msg.email);
    alert(msg.messaggio);
}
inviaMessaggio({ email: "daniele@it", messaggio: "testo" });
var Persona = /** @class */ (function () {
    function Persona(n, s) {
        this.name = n;
        this.surname = s;
    }
    Persona.prototype.stampaNome = function () {
        console.log(this.name + ' ' + this.surname);
    };
    return Persona;
}());
var myNamespace;
(function (myNamespace) {
    var pippo = 'a';
    function myfunction() { alert('pippo'); }
    myNamespace.myfunction = myfunction;
})(myNamespace || (myNamespace = {}));
