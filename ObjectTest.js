let obj = {
  varA : 7,
  varB : "SomeString",
  0 : "Zero",
  1 : false
}

console.log(obj.varA);              //7
console.log(typeof(obj.varA));      //number
obj.varA = "Seven";
console.log(obj.varA);              //Seven
console.log(typeof(obj.varA));      //string

console.log(obj.varB);              //SomeString
console.log(typeof(obj.varB));      //string

console.log(obj.varC);              //undefined
console.log(typeof(obj.varC));      //undefined
obj.varC = false;
console.log(obj.varC);              //false
console.log(typeof(obj.varC));      //boolean


// console.log(obj[varA]);          //ReferenceError: varA is not defined
console.log(obj["varA"]);           //Seven
let b = "varB";
console.log(obj[b]);                //SomeString
console.log(obj[0]);                //Zero
for(let i=0; i<2; i++) {
  console.log(obj[i]);              //Zero flase
}

let v = "member";
for(let i=0; i<3; i++) {
  obj[v+i] = i;
}
for(let i=0; i<3; i++) {
  console.log(obj[v+i]);            //0 1 2
}


//Object.keys
console.log(Object.keys(obj));      //[ '0', '1', 'varA', 'varB', 'varC', 'member0', 'member1', 'member2' ]


//property in Object()
obj.undefVar = undefined
console.log("undefVar" in obj);     //true
obj.newVar = 100
console.log("newVar" in obj);       //true
delete obj.newVar;
console.log("newVar" in obj);       //false
