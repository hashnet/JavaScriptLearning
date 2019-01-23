//Sports.js
'use strict';

//import Inheritance class
var Inheritance = require('./Inheritance');

//import parent class for our example.
var Sedan = require('./Sedan');

//Class Sports extends Sedan {}
function Sports(make, model, topSpeed) {
    Sedan.call(this, make, model, false);       //super()

    this.topSpeed = topSpeed;

    let _sound = 'swish!';                                                  //Overrides private feld of Car
    let _kmToMileRatio = 0.621371;
    this.getKmToMileRatio = function() {
        return _kmToMileRatio;
    }  
}
Inheritance.inherit(Sedan, Sports);
Sports.prototype.getName = function() {                                 //Overriding parent class method
    return 'RC ' + this.make + this.model;
}
Sports.prototype.stateTransmission = function() {
    console.log(`${this.getName()} is a manual transmission car.`);     //Overriding parent class method
}
Sports.prototype.race = function() {
    console.log(`${this.getName()} races at ${this.topSpeed * this.getKmToMileRatio()} mile/h.`);
}

module.exports = Sports;