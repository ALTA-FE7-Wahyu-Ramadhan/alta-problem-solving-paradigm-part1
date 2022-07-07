function moneyChange(money) {
  // Your code here
  //rumuskan uangnya
  let arrUang = [];
  let maxPecahan = 10000;
  for (let uang = 1; uang <= maxPecahan; uang++) {
    if (uang == 1) {
      arrUang.push(uang);
    } else if (uang % maxPecahan == 0) {
      arrUang.push(uang);
    } else if (uang == maxPecahan / 2 ||
    uang == maxPecahan / 5 || uang == maxPecahan / 10 || uang == maxPecahan / 20 || uang == maxPecahan / 50 || uang == maxPecahan / 100)
    {
      arrUang.push(uang);
    
  }
  return arrUang;
  /*let angka=[]
  for(let i=1; i<money; i++){
  }*/
}
console.log(moneyChange());
// console.log(moneyChange(123))   // [100 20 1 1 1]
// console.log(moneyChange(432))   // [200 200 20 10 1 1]
// console.log(moneyChange(543))   // [500, 20, 20, 1, 1, 1]
// console.log(moneyChange(7752))  // [5000, 2000, 500, 200, 50, 1, 1]
// console.log(moneyChange(15321)) // [10000 5000 200 100 20 1]
module.exports = moneyChange;
