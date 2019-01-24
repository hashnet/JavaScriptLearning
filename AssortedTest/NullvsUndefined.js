let nullVar = null;
console.log(nullVar);           //null
console.log(typeof(nullVar));   //object

let undefVar;
console.log(undefVar);          //undefined
console.log(typeof(undefVar));  //undefined

let undefvar = undefined;
console.log(undefVar);          //undefined
console.log(typeof(undefVar));  //undefined

console.log(typeof(null));      //object
console.log(typeof(undefined)); //undefined


let obj = {
  varA : "str",
  varB : 0
};
console.log(obj.somethingElse); //undefined

const f1 = varA => {console.log(varA)};
f1();                            //undefined

const f2 = (varDef = "default") => {console.log(varDef)};
f2();                           //default
f2("something");                //somethin
f2(undefined);                  //default
f2(null);                       //null
