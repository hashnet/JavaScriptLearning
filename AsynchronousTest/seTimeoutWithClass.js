'use strict';

function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log("Hello from " + this.name);
}
Person.prototype.speak = function(words) {
    console.log(this.name + " says " + words);
}

let najat = new Person('Najat');
let namir = new Person('Namir');

console.log("Get ready for hellos...");
// setTimeout(najat.sayHello, 1000);       //Hello from undefined
//Above code doesn't work the details is explained at https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#The_this_problem
//Shoter explanation is this is bound to the execution environment of the setTimeout function instead of this.
//Below are two possible solutions:
setTimeout(function(){najat.sayHello();}, 1500);
setTimeout(() => {namir.sayHello();}, 1000);

//sending arguments to the callback function
setTimeout(function(words){najat.speak(words);}, 2500, "hi");
setTimeout((words) => {namir.speak(words);}, 2000, "hey");