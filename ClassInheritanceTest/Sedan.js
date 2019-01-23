//Sedan.js
'use strict';

//import Inheritance class
var Inheritance = require('./Inheritance');

//import parent class for our example.
var Car = require('./Car');

//Class Sedan extends Car {}
function Sedan(make, model, isAuto=true) {
    Car.call(this, make, model);    //super()

    this.isAuto = isAuto;           //Automatic or Manual transmission

    let _gear = 6;
    this.getGear = function() {
        if(this.isAuto) return 'no';
        else return _gear;
    }
}
Inheritance.inherit(Car, Sedan);
Sedan.prototype.stateTransmission = function() {
    console.log(`${this.getName()} has transmission ${this.isAuto ? 'automatic' : 'manual'} with ${this.getGear()} gear.`);
}

module.exports = Sedan;