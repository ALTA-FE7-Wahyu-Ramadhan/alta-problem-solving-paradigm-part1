function moneyChange(money) {
  // Your code here
  //rumuskan uangnya
  let arrUang = [1];
  let maxPecahan = 6;
  let sepuluh = 10;
  for (let uang = 0; uang < maxPecahan; uang++) {
    for (let i = 0; i < 3; i++) {
      if (i == 0) {
        arrUang.push(sepuluh);
      } else if (i == 1) {
        arrUang.push(sepuluh * 2);
      } else {
        arrUang.push(sepuluh * 5);
      }
    }
    if (sepuluh < 3) {
      sepuluh *= sepuluh ** (uang + 1);
    } else if (sepuluh == 3) {
      sepuluh /= 10 ** (uang - 1);
    } else if (sepuluh == 4) {
      sepuluh = (sepuluh / 10 ** (uang - 1)) * 10;
    }
  }
  return arrUang;
}
console.log(moneyChange());
// console.log(moneyChange(123))   // [100 20 1 1 1]
// console.log(moneyChange(432))   // [200 200 20 10 1 1]
// console.log(moneyChange(543))   // [500, 20, 20, 1, 1, 1]
// console.log(moneyChange(7752))  // [5000, 2000, 500, 200, 50, 1, 1]
// console.log(moneyChange(15321)) // [10000 5000 200 100 20 1]
module.exports = moneyChange;
