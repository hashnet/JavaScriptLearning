var doSomething = function(param) {
  console.log(param);
  console.log(this);
}

doSomething("String");

doSomething.call({a: 1, b: 2});

doSomething.call({a: 1, b: 2}, "String");

doSomething.apply({a: 1, b: 2}, ["Str1", "Str2"]);

console.log(["a", "b"]);
