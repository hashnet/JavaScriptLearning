'use strict';

function Kid(name, candy) {
    this.name = name;
    this.candy = candy;
    this.nextKid = null;
}
Kid.prototype.countSelf = function(sumSoFar, resolve, reject) {
    setTimeout( (sumSoFar) => {
        try {
            let newSum = sumSoFar + this.candy;
            console.log(`${this.name} owns ${this.candy} candy and counted ${newSum} candy so far.`);

            if(!this.nextKid) throw new Error(`${this.name} has no nextKid set.`);

            resolve(newSum);
        } catch (err) {
            reject(err);
        }
    }, 1000, sumSoFar);
}
Kid.prototype.printErr = function(err) {
    console.log(`${this.name} encountered error:`);
    console.log(err);
}

const count = function(sumSoFar, kid) {
    kid.countSelf(sumSoFar, function(sumSoFar){
        kid = kid.nextKid;
        kid.countSelf(sumSoFar, function(sumSoFar){
            kid = kid.nextKid;
            kid.countSelf(sumSoFar, function(sumSoFar){
                console.log(`${kid.name} finished counting as total ${sumSoFar} candy.`);
            }, (err)=>{kid.printErr(err)}); //Its necessary to wrap kid.printErr so that this is properly referenced as per https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#The_this_problem
        }, (err)=>{kid.printErr(err)});
    }, (err)=>{kid.printErr(err)});
}

console.log("Creating kids.");
const najat = new Kid('Najat', 1);
const namir = new Kid('Namir', 2);
const lilly = new Kid('Lilly', 3);

najat.nextKid = namir;
// namir.nextKid = lilly;
lilly.nextKid = lilly;

console.log('Starting counting game.');
count(0, najat);

// namir.printErr('someText');