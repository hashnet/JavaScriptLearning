'use strict';

function Kid(name, candy) {
    this.name = name;
    this.candy = candy;
    this.nextKid = null;
}
Kid.prototype.countSelf = function(sumSoFar) {
    let newSum = sumSoFar + this.candy;
    console.log(`${this.name} owns ${this.candy} candy and counted ${newSum} candy so far.`);

    if(!this.nextKid) throw new Error(`${this.name} has no nextKid set.`);

    return newSum;
}

const count = function(sumSoFar, kid) {
    setTimeout( (sumSoFar) => {
        try {
            sumSoFar = kid.countSelf(sumSoFar);
            kid = kid.nextKid;

            setTimeout( (sumSoFar) => {
                try {
                    sumSoFar = kid.countSelf(sumSoFar);
                    kid = kid.nextKid;
            
                    setTimeout( (sumSoFar) => {
                        try {
                            sumSoFar = kid.countSelf(sumSoFar);
                            kid = kid.nextKid;

                            console.log(`${kid.name} finished counting as total ${sumSoFar} candy.`);
                        } catch (err) {
                            console.log(err);
                        }
                    }, 1000, sumSoFar);
                } catch (err) {
                    console.log(err);
                }
            }, 1000, sumSoFar);
        } catch (err) {
            console.log(err);
        }
    }, 1000, sumSoFar);
}

console.log("Creating kids.");
const najat = new Kid('Najat', 1);
const namir = new Kid('Namir', 2);
const lilly = new Kid('Lilly', 3);

najat.nextKid = namir;
namir.nextKid = lilly;
lilly.nextKid = lilly;

console.log('Starting counting game.');
count(0, najat);