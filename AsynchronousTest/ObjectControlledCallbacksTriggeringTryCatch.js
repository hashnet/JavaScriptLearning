'use strict';

function Kid(name, candy) {
    this.name = name;
    this.candy = candy;
    this.nextKid = null;
}
Kid.prototype.count = function(sumSoFar) {
    setTimeout( 
        (sumSoFar) => {
            try {
                let newSum = sumSoFar + this.candy;
                console.log(`${this.name} owns ${this.candy} candy and counted ${newSum} candy so far.`);

                if(!this.nextKid) throw new Error(`${this.name} has no nextKid set.`);

                this.tellTo(newSum, this.nextKid);
            } catch (err) {
                console.log(err);
            }
        }, 1000, sumSoFar);
}
Kid.prototype.tellTo = function(sumSoFar, nextKid) {
        console.log(`${nextKid.name} starting counting...`);
        nextKid.count(sumSoFar);
}

console.log("Creating kids.");
const najat = new Kid('Najat', 1);
const namir = new Kid('Namir', 2);
const lilly = new Kid('Lilly', 3);

najat.nextKid = namir;
// namir.nextKid = lilly;
lilly.nextKid = lilly;
lilly.tellTo = function(sumSoFar, nxtKid) {
    console.log(`${this.name} finished counting as total ${sumSoFar} candy.`);
}

console.log('Starting counting game.');
najat.count(0);