let count = 0;
let mem = [];
function fiboTopDown(n) {
  // your code here
  if (n < 2) {
    return n;
  } else {
    if (mem[n]) return mem[n];
    mem[n] = fiboTopDown(n - 1) + fiboTopDown(n - 2);
    return mem[n];
  }
}

console.log(fiboTopDown(0)); // 0
console.log(fiboTopDown(1)); // 1
console.log(fiboTopDown(2)); // 1
console.log(fiboTopDown(3)); // 2
console.log(fiboTopDown(5)); // 5
console.log(fiboTopDown(6)); // 8
console.log(fiboTopDown(7)); // 13
console.log(fiboTopDown(9)); // 13
console.log(fiboTopDown(10)); // 55
