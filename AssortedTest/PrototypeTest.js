function tracePrototypeChainOf(obj) {
    if(obj == null || obj == undefined) return obj;

    let result = obj.constructor.name;
    obj = Object.getPrototypeOf(obj);

    while(obj) {
        result += ' <-  '
        result += obj.constructor.name + ".prototype";
        obj = Object.getPrototypeOf(obj);
    }

    return result;
}

obj = new Object();
console.log(tracePrototypeChainOf(obj));        //Object <-  Object.prototype
obj = {};
console.log(tracePrototypeChainOf(obj));        //Object <-  Object.prototype
let arr = [];
console.log(tracePrototypeChainOf(arr));        //Array <-  Array.prototype <-  Object.prototype
let f = function (){};
console.log(tracePrototypeChainOf(f));          //Function <-  Function.prototype <-  Object.prototype
let i = 0;
console.log(tracePrototypeChainOf(i));          //Number <-  Number.prototype <-  Object.prototype

class A {}
class B extends A {}
console.log(tracePrototypeChainOf(new A()));    //A <-  A.prototype <-  Object.prototype
console.log(tracePrototypeChainOf(new B()));    //B <-  B.prototype <-  A.prototype <-  Object.prototype

console.log(Object.getPrototypeOf(new Object()) == Object.prototype)    //true
console.log(Object.getPrototypeOf({}) == Object.prototype)              //true
console.log(Object.getPrototypeOf([]) == Array.prototype)               //true
console.log(Object.getPrototypeOf(new A()) == A.prototype)              //true

const F = function(val){
    this.val = val;
    const objectfunc = function(){};
};
F.prototype.protoFunc = function(){};
f = new F();
console.log(tracePrototypeChainOf(f));          //F <-  F.prototype <-  Object.prototype
console.log(f.constructor);

const o = {
    val : 10,
    protoFunc(){}
}
o1 = Object.create(o);
console.log(tracePrototypeChainOf(o1));         //Object <-  Object.prototype <-  Object.prototype


