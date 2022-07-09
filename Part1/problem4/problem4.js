function binarySearch(array, x) {
  // Your code here
  let beg = 0;
  let end = array.length - 1;
  let mid = 0;
  while (beg <= end) {
    mid = Math.floor((beg + end) / 2);
    if (array[mid] === x) {
      return mid;
    } else if (array[mid] > x) {
      end = mid - 1;
    } else {
      beg = mid + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
