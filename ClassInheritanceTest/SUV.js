//SUV.js
'use strict';

//import Inheritance class
var Inheritance = require('./Inheritance');

//import parent class Car for our example.
var Car = require('./Car');

//Class SUV extends Car {}
function SUV(make, model, clearance) {
    Car.call(this, make, model);        //super()

    this.clearance = clearance;         //ground clearance in cm

    let _cmToInchRatio = 0.393701;      //private field
    let _conversion = function(cm) {    //private method
        return cm * _cmToInchRatio;
    }
    this.cmToInch = function (cm){      
        return _conversion(cm);
    }       
}
Inheritance.inherit(Car, SUV);
SUV.prototype.jump = function() {
    console.log(`${this.getName()} jumping ${this.cmToInch(this.clearance)} inch.`);   //Instance method using private field _cmToInch
}
SUV.someSUVs = function(cm) {   //Static method
    return ['Toyota Kluger', 'Mitsubishi Pajero', 'Honda CRV'];
}

module.exports = SUV;