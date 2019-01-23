//SUV.js
'use strict';

//import Inheritance class
var Inheritance = require('./Inheritance');

//import parent class Car for our example.
var Car = require('./Car');

//Class SUV extends Car {}
function SUV(make, model, clearance) {
    Car.call(this, make, model);                //super() -> Car(make, model)

    this.clearance = clearance;                 //ground clearance in cm

    let _cmToInchRatio = 0.393701;              //private field (static/instance) that can be accessed only in hte constructor of this class
    this.getCmToInchRatio = function (cm){      //public instance getter which will be inherited by subclasses [but there will be individual copies of this method for every instance of this class.]
        return cm * _cmToInchRatio;
    }       
}
Inheritance.inherit(SUV, Car);                  //class SUV extends Car {}
SUV.prototype.jump = function() {
    console.log(this.getName() +                                //this.getName() is inherited from Car class
    `jumping ${this.getCmToInchRatio(this.clearance)} inch.`);  //Instance method using public getter to access private field _cmToInchRatio
    // `jumping ${this.clearance * _cmToInchRatio} inch.`);     //ReferenceError: _cmToInchRatio is not defined
    // `jumping ${this.clearance * this._cmToInchRatio} inch.`);//this._cmToInchRatio return NaN
}
SUV.someSUVs = function(cm) {                   //Static method
    return ['Toyota Kluger', 'Mitsubishi Pajero', 'Honda CRV'];
}

module.exports = SUV;