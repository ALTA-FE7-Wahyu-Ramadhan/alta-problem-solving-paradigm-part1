function simpleEquations(a, b, c) {
  // Your code here
  // x + y + z = A
  // xyz = B
  // x^2 + y^2 + z^2 = C
  let penjumlahan = 0;
  let perkalian = 0;
  let pangkat = 0;
  for(let i<a; i>0; i--){
    if(a%i==0){
      penjumlahan+=i
    }
  }
}
simpleEquations(1, 2, 3)  // no solution
simpleEquations(6, 6, 14) // 1 2 3
module.exports = simpleEquations;
