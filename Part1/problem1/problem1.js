function simpleEquations(a, b, c) {
  // Your code here
  let penjumlahan = [];
  let perkalian = 0;
  let pangkat = 0;
  if(a<=1){
    return 'no solution';
  } else{
  for(let i=a-1; i>0; i--){
    if(a%i==0) {
      penjumlahan.unshift(i);
      a-=i;
    } else if(a==0){
      break
    }
  }
  return penjumlahan.toString().replace(","," ", -1)
}
}
console.log(simpleEquations(1, 2, 3))  // no solution
console.log(simpleEquations(6, 6, 14)) // 1 2 3

module.exports = simpleEquations;
