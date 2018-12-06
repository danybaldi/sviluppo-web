"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./modules/classes");
var interface_1 = require("./interface");
var Car = /** @class */ (function () {
    function Car(version, color) {
        this.color = color;
        this.version = '1.1';
        this.version = version;
        this.color = color;
    }
    return Car;
}());
var myCar = new Car('2.2', 'red');
var myLesson = new classes_1.Lesson(3);
interface_1.showUser({ name: 'Daniele', surname: 'Baldi' });
myCar.color = 'blue';
var User = /** @class */ (function () {
    function User() {
        this._name = '';
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var me = new User();
me.name = 'daniele';
console.log(me.name);
var Logger = /** @class */ (function () {
    function Logger() {
    }
    return Logger;
}());
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleLogger.prototype.log = function (msg) {
        throw new Error("Method not implemented.");
    };
    return ConsoleLogger;
}(Logger));
