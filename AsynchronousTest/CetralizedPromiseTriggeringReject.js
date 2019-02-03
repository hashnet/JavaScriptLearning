'use strict';

function Kid(name, candy) {
    this.name = name;
    this.candy = candy;
    this.nextKid = null;
}
Kid.prototype.countSelf = function(sumSoFar) {
    return new Promise( (resolve, reject) => {
        setTimeout( (sumSoFar) => {
            try {
                let newSum = sumSoFar + this.candy;
                console.log(`${this.name} owns ${this.candy} candy and counted ${newSum} candy so far.`);

                if(!this.nextKid) throw new Error(`${this.name} has no nextKid set.`);

                resolve(newSum);
            } catch (err) {
                reject({'err':err, 'kid':this});    //As two arguments can't be passed for reject function two values are passed as one object.
            }
        }, 1000, sumSoFar)
    });
}
Kid.prototype.printErr = function(err) {
    console.log(`${this.name} encountered error:`);
    console.log(err);
}

const count = function(sumSoFar, kid) {
    kid.countSelf(sumSoFar)
    .then((sumSoFar) => {
        kid = kid.nextKid;
        return kid.countSelf(sumSoFar);
    }).then((sumSoFar) => {
        kid = kid.nextKid;
        return kid.countSelf(sumSoFar);
    }).then((sumSoFar) => {
        console.log(`${kid.name} finished counting as total ${sumSoFar} candy.`);
    }).catch((errObj) => {
        errObj.kid.printErr(errObj.err);
    });
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
