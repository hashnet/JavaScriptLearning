// myFunc(); //ReferenceError: myFunc is not defined
const myFunc = function() {
  console.log("Functionn as Variable");
}
myFunc();


myFuncDef();
function myFuncDef() {
  console.log("Function Definition hoisted at top");
}
myFuncDef();
