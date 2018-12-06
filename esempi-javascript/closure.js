var globalScope;

function outer(){
    var name = "Daniele Baldi";
    globalScope = function inner(){
        console.log(name + ' ' + i);
    }

    for(var i = 0; i<10; i++){}
}

//globalScope();

outer();

globalScope();

function beat_me(){
    console.log(this);
}

//beat_me();

function Person(){
    console.log(this);
    this.name = null;
    var that = this;
    inspect_this = function(){
        console.log(that);
    }

    //Inutile tanto viene passato implicitamente
    return this;
}

var daniele = new Person();
inspect_this();