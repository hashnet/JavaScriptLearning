'use strict';
// var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
// var timeoutID = scope.setTimeout(function[, delay]);
// var timeoutID = scope.setTimeout(code[, delay]);

console.log("Starting setTimeout asynchronously.");
// let timeoutID = setTimeout("console.log('***The code run by setTimeout***');", 1000);   //TypeError: "callback" argument must be a function  -> it doesn't work in node.js

let timeoutID = setTimeout(
    function(){
        console.log('***The code run by setTimeout***');
    }, 1000);

    console.log("Next line after setTimeout.");