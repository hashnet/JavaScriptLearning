//Inheritance.js
'use strict';

// Hierarchy goal is to achieve below:
//
// ╔═══════════════════════╗                    *************************
// ║                       ║   .constructor     *                       *
// ║    Parent.prototype   ║───────────────────>*       Parent()        *
// ║ [Prototype object for ║                    * [Constructor function *
// ║   all object of type  ║                    *  for creating objects *
// ║       'Parent']       ║     .prototype     *  of type 'Parent']    *
// ║                       ║<───────────────────*                       *
// ╚═══════════════════════╝                    *************************
//                ↑
// 		  │
// 		  │ .__proto__
// 		  │ [above property is private.
//                │  so use below instead]
// 		  │ Object.getPrototypeOf(object)
// 		  │
// ╔═══════════════════════╗                    *************************
// ║                       ║   .constructor     *                       *
// ║    Child.prototype    ║───────────────────>*       Child()         *
// ║ [Prototype object for ║                    * [Constructor function *
// ║   all object of type  ║                    *  for creating objects *
// ║       'Parent']       ║     .prototype     *  of type 'Child']     *
// ║                       ║<───────────────────*                       *
// ╚═══════════════════════╝                    *************************
//                ↑ 											│
// 		  │                                             │
// 		  │ .__proto__                                  │
// 		  │ [above property is private.                 │ new Child()
//                │  so use below instead]                      │
// 		  │ Object.getPrototypeOf(object)               │
// 		  │                                             ↓
// 		┌─────────────────────────────────────────────────┐
// 		│                                                 │
// 		│               instance of Child                 │
// 		│            [created by new Child()]             │
// 		│                                                 │
//              └─────────────────────────────────────────────────┘ 

function Inheritance() {
}
Inheritance.inherit = function(Child, Parent) {   //Static method to create the class hierarchy
    // Child = Child Constructor = Child();
    // Parent = Parent Constructor = Parent();
    //
    // The simplest way to achieve above goal in one command is through below command:
    // Object.setPrototypeOf(Child.prototype, Parent.prototype);
    // But setPrototypeOf command is very slow as mentioned in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf 
    //
    // So, as an alternative we could instanciate an object from Parent using new Parent()
    // and then hen we assign it as the prototype property of the Child() like below:
    // Child.prototype = new Parent();
    // but this will call the Parent constructor and if there are some counter/initializaiton in the constructor
    // that will be executed resulting in unexpected behaviour.
    //
    // The other alternative is to use Object.create() which uses a temp Constructor internally
    // and creates an object from the provided prototype.
    Child.prototype = Object.create(Parent.prototype);
    // After this, Child.prototype object will look something like below:
    // Child.prototype = {
    //      constructor : Parent(), /*[this is set while instantiating using new Parent()]*/
    //      __proto__ : Parent.prototype,
    //      propertyOfParentsPrototype1 : ,
    //      propertyOfParentsPrototype2 : ,
    //      ...
    // }
    // At this point, the 'constructor' property of Child.prototype is pointing wrongly to Parent().
    // To fix this we set the constructor property of Child.prototype explicitly to Child()
    Child.prototype.constructor = Child;
}
Inheritance.traceHierarchy = function(obj) {
    if (obj === null || obj === undefined) {
        console.log(obj);
        return;
    }

    let result = 'instance_of_' + Object.getPrototypeOf(obj).constructor.name;
    do {
        obj = Object.getPrototypeOf(obj);
        result += ' -> ';
        result += Inheritance.protoName(obj);
    
        
    } while(obj);

    console.log(result);
}
Inheritance.protoName = function(proto) {
    if(proto === undefined) return;

    return (proto == null ? null : (proto.constructor.name + '.prototype'));
}

module.exports = Inheritance;