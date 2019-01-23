//Sedan.js
'use strict';

//import Inheritance class
var Inheritance = require('./Inheritance');

//import parent class for our example.
var Car = require('./Car');

//Class Sedan extends Car {}
function Sedan(make, model, isAuto=true) {
    Car.call(this, make, model);        //super() -> Car(make, model)

    this.isAuto = isAuto;               //Automatic or Manual transmission

    const _gear = 6;                    //private field (static/instance) that can be accessed only in hte constructor of this class
    this.getGear = function() {         //public instance getter which will be inherited by subclasses [but there will be individual copies of this method for every instance of this class.]
        if(this.isAuto) return 'no';
        else return _gear;
    }
}
Inheritance.inherit(Sedan, Car);        //class Sedan extends Car {}
Sedan.prototype.stateTransmission = function() {
    console.log(`${this.getName()} has transmission ${this.isAuto ? 'automatic' : 'manual'} with ${this.getGear()} gear.`);
}
Sedan.prototype.checkSound = function() {
    let text = '';
    text += this.getName() + ' sounds ';
    if(this.getSound().valueOf() == 'vroom!!!') text += 'good.';     //getSound() is inherited from Car class
    else text += 'bad.';

    console.log(text);
}

module.exports = Sedan;