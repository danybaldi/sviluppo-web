import {Lesson} from './modules/classes'
import {showUser} from './interface'

class Car  {
    readonly version:string = '1.1';
    constructor(version:string, public color:string){
        this.version = version;
        this.color = color;
    }
}

let myCar = new Car('2.2','red');

let myLesson = new Lesson(3);

showUser({name:'Daniele',surname:'Baldi'});

myCar.color = 'blue';


class User {
    private _name:string = '';

    set name(name:string){
        this._name = name.toUpperCase();
    }

    get name():string {
        return this._name;
    }
}

var me = new User();
me.name = 'daniele';
console.log(me.name);


abstract class Logger {
    abstract log(msg:string):void;
}

class ConsoleLogger extends Logger{
    log(msg: string): void {
        throw new Error("Method not implemented.");
    }

}