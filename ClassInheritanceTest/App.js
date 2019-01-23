//App.js
'use strict';

//import Inheritance class
var Inheritance = require('./Inheritance');

//import class(es) Car, SUV, Sedan, Sports for our example.
var Car = require('./Car');
var SUV = require('./SUV');
var Sedan = require('./Sedan');
var Sports = require('./Sports');
var Concept = require('./Concept');

//Class hierarchy:
//                Car
//           (toyotaYaris)
//                 ^
//                 |
//         ----------------
//         |              |
//        SUV           Sedan
//  (nissanXtrail)    (tataNano)
//                        ^
//                        |
//                      Sports
//                   (fordShelby)
//                        ^
//                        |
//                     Concept
//                 (hyundaiElevate)

let toyotaYaris = new Car('Toyota', 'Yaris');
console.log(Car.count);                 //1
console.log(toyotaYaris.make);          //Toyota
console.log(toyotaYaris.model);         //Yaris
console.log(toyotaYaris._sound);        //undefined
console.log(Car._sound);                //undefined
// console.log(_sound);                 //ReferenceError: _sound is not defined //[due to 'use strict' _sound is private];
// _sound = 'changed';                  //ReferenceError: _sound is not defined //[due to 'use strict' _sound is private];
// console.log(_sound);                 //ReferenceError: _sound is not defined //[due to 'use strict' _sound is private];
// console.log(toyotaYaris._getSound());//TypeError: toyotaYaris._getSound is not a function //[due to 'use strict' _getSound() is private];
console.log(toyotaYaris.getSound());    //vroom!
toyotaYaris.drive();                    //Toyota Yaris goes vroom!
Inheritance.traceHierarchy(toyotaYaris);//instance_of_Car -> Car.prototype -> Object.prototype


let nissanXtrail = new SUV('Nissan', 'Xtrail', 40);
console.log(Car.count);                 //2
console.log(nissanXtrail.make);         //Nissan
console.log(nissanXtrail.model);        //Xtrail
console.log(nissanXtrail.clearance);    //40
nissanXtrail.drive();                   //Nissan Xtrail goes vroom!!!
nissanXtrail.jump();                    //Nissan Xtrail jumping 15.748040000000001 inch.
console.log(SUV.someSUVs());            //Array(3) ["Toyota Kluger", "Mitsubishi Pajero", "Honda CRV"]
Inheritance.traceHierarchy(nissanXtrail);//instance_of_SUV -> SUV.prototype -> Car.prototype -> Object.prototype

let tataNano = new Sedan('Tata', 'Nano');
console.log(Car.count);                 //3
console.log(tataNano.make);             //Tata
console.log(tataNano.model);            //Nano
console.log(tataNano.isAuto);           //true
tataNano.drive();                       //Tata Nano goes vroom!!!
tataNano.stateTransmission();           //Tata Nano has transmission automatic with no gear.
tataNano.checkSound();                  //Tata Nano sounds good.
Inheritance.traceHierarchy(tataNano);   //instance_of_Sedan -> Sedan.prototype -> Car.prototype -> Object.prototype

let fordShelby = new Sports('Ford', 'Shelby', 300);
console.log(Car.count);                 //4
console.log(fordShelby.make);           //Ford
console.log(fordShelby.model);          //Shelby
fordShelby.drive();                     //RC FordShelby goes swish!!!
fordShelby.stateTransmission();         //RC FordShelby is a manual transmission car.
fordShelby.checkSound();                //RC FordShelby sounds bad.
fordShelby.race();                      //RC FordShelby races at 186.4113 mile/h.
Inheritance.traceHierarchy(fordShelby); //instance_of_Sports -> Sports.prototype -> Sedan.prototype -> Car.prototype -> Object.prototype

tataNano = new Sedan('Tata', 'Nano', false);
console.log(Car.count);                 //5
console.log(tataNano.make);             //Tata
console.log(tataNano.model);            //Nano
console.log(tataNano.isAuto);           //false
tataNano.drive();                       //Tata Nano goes vroom!!!
tataNano.stateTransmission();           //Tata Nano has transmission manual with 6 gear.
tataNano.checkSound();                  //Tata Nano sounds good
Inheritance.traceHierarchy(tataNano);   //instance_of_Sedan -> Sedan.prototype -> Car.prototype -> Object.prototype

let hyundaiElevate = new Concept('Hyundai', 'Elevate', 500, );
console.log(Car.count);                 //6
console.log(hyundaiElevate.make);       //Hyundai
console.log(hyundaiElevate.model);      //Elevate
hyundaiElevate.drive();                 //RC hyundaiElevate goes swish!!!
hyundaiElevate.stateTransmission();     //RC hyundaiElevate is a manual transmission car.
hyundaiElevate.checkSound();            //RC hyundaiElevate sounds bad.
hyundaiElevate.race();                  //RC hyundaiElevate races at 310.6855 mile/h.
Inheritance.traceHierarchy(hyundaiElevate); //instance_of_Concept -> Concept.prototype -> Sports.prototype -> Sedan.prototype -> Car.prototype -> Object.prototype -> null

Inheritance.traceHierarchy(1);              //instance_of_Number -> Number.prototype -> Object.prototype -> null
Inheritance.traceHierarchy('');             //instance_of_String -> String.prototype -> Object.prototype -> null
Inheritance.traceHierarchy([]);             //instance_of_Array -> Array.prototype -> Object.prototype -> null
Inheritance.traceHierarchy(()=>{});         //instance_of_Function -> Function.prototype -> Object.prototype -> null
Inheritance.traceHierarchy(Car);            //instance_of_Function -> Function.prototype -> Object.prototype -> null
Inheritance.traceHierarchy(new Car());      //instance_of_Car -> Car.prototype -> Object.prototype -> null
Inheritance.traceHierarchy(Car.prototype);  //instance_of_Object -> Object.prototype -> null
Inheritance.traceHierarchy(new Object());   //instance_of_Object -> Object.prototype -> null
Inheritance.traceHierarchy(null);           //null