//Car.js
'use strict';

//class Car {}
function Car(make, model) {
    this.make = make;               //public instance fields
    this.model = model;

    let _sound = 'vroom';           //private field (static/instance) that can be accessed only in hte constructor of this class
    let _getSound = function() {    //private getter (static/instance) that can be accessed only in hte constructor of this class
        return _sound + "!!!";
    }
    this.getSound = function() {    //public instance getter for _sound which will be inherited by subclasses [but there will be individual copies of this method for every instance of this class.]
        return _getSound();
    };
    
    ++Car.count;                    //Initialization code at the end of the constructor. This runs everytime the consturctor is invoked
}
Car.prototype.getName = function() {
    return this.make + ' ' + this.model;
}
Car.prototype.drive = function() {  //class methods
    console.log(`${this.getName()} goes ${this.getSound()}`);
}
Car.count = 0;                      //Static field (not accessible through instance);

module.exports = Car;