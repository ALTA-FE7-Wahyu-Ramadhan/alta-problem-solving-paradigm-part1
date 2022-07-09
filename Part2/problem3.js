// Frog
function frog(jumps) {
  // your code here
  let cost = 0;
  let current = 0;
  for (let i = 0; i < jumps.length; i++) {
    if (current === i) {
      current = jumps[i];
    } else {
      cost += Math.abs(jumps[i] - current);
      current = jumps[i];
    }
  }
  return cost;
}

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40
