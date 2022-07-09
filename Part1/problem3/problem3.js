function dragonOfLoowater(dragonHead, knightHeight) {
  //  Your code here
  let dragonHeads = dragonHead;
  let knightHeights = knightHeight;
  let result = 0;
  let flag = false;
  let i = 0;
  let j = 0;
  while (i < dragonHeads.length && j < knightHeights.length) {
    if (dragonHeads[i] <= knightHeights[j]) {
      result += knightHeights[j];
      i++;
      j++;
    } else {
      j++;
    }
  }
  if (i < dragonHeads.length) {
    flag = true;
  }
  if (flag) {
    return "knight fall";
  }
  return result;
}

module.exports = dragonOfLoowater;
