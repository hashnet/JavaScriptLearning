const outer = function() {
  let num = 10;

  const inner = function() {
    console.log(num);
  }

  return inner;
}

let innerColsure = outer();
innerColsure();
