let arr = [];

console.log(typeof arr);            //object
console.log(arr.length);            //0
console.log(arr);                   //[]


arr.push(3);
console.log(arr);                   //[ 3 ]
arr.pop();
console.log(arr);                   //[]
arr.pop();
console.log(arr);                   //[]
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr);                   //[ 3, 4, 5 ]

arr.unshift(2);
console.log(arr);                   //[ 2, 3, 4, 5 ]
arr.unshift(1);
console.log(arr);                   //[ 1, 2, 3, 4, 5 ]
arr.shift();
console.log(arr);                   //[ 2, 3, 4, 5]
arr.shift();
console.log(arr);                   //[ 3, 4, 5]

console.log(arr.includes(1));       //false
console.log(arr.includes(3));       //true
console.log(arr.includes("3"));     //false
