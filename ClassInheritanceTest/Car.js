//Car.js
'use strict';

//class Car {}
function Car(make, model) {
    this.make = make;               //public instance fields
    this.model = model;

    let _sound = 'vroom!';              //private field (static/instance)
    this.getSound = function() {    //public instance getter for _sound
        return _sound;
    };
    
    ++Car.count;                    //Initialization code at the end of the constructor
}
Car.prototype.getName = function() {
    return this.make + ' ' + this.model;
}
Car.prototype.drive = function() {  //class methods
    console.log(`${this.getName()} goes ${this.getSound()}`);
}
Car.count = 0;      //Static field (not accessible through instance);

module.exports = Car;