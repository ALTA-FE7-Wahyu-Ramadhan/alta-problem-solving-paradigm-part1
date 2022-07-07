function simpleEquations(a, b, c) {
  // Your code here
  /*x + y + z = A
  xyz = B
  x^2 + y^2 + z^2 = C
  */
  let penjumlahan = [];
  let perkalian = [];
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
  // return penjumlahan.toString().replace(","," ", -1)
  penjumlahan
}
for(let j=b-1; j>0; j--){
  if(b%j==0){
    perkalian.unshift(j);
    b/=j;
  }else if(b==1){
    perkalian.unshift(1);
    break;
  }
}
perkalian
return (penjumlahan,perkalian).toString().replace(/,/g, ' ');
}
console.log(simpleEquations(1, 2, 3))  // no solution
console.log(simpleEquations(6, 6, 14)) // 1 2 3

module.exports = simpleEquations;
