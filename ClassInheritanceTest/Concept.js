//Concept.js
'use strict';

//import Inheritance class
var Inheritance = require('./Inheritance');

//import parent class for our example.
var Sports = require('./Sports');

//Class Sports extends Sedan {}
function Concept(make, model, topSpeed, releaseYear) {
    Sports.call(this, make, model, topSpeed);       //super() -> Sports(make, model, topSpeed)

    this.releaseYear = releaseYear;
}
Inheritance.inherit(Concept, Sports);               //class Concept extends Sports {}

module.exports = Concept;