'use strict';
// var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
// var timeoutID = scope.setTimeout(function[, delay]);
// var timeoutID = scope.setTimeout(code[, delay]);

const f1 = function() {
    console.log('***f1: The code run by setTimeout***');
}
function f2() {
    console.log('***f2: The code run by setTimeout***');
}

console.log("Starting setTimeout asynchronously.");
const timeoutID1 = setTimeout(f1, 1500);
const timeoutID2 = setTimeout(f2, 1000);
const timeoutID3 = setTimeout(
    () => {console.log("It will be cancelled.");}
    , 500);
clearTimeout(timeoutID3);

console.log("Next line after setTimeout.");

