/* Binary search */
/* O(log2n) */

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;

const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length;
  let middle = null;
  let isFound = false;
  let idx = -1;

  while (!isFound && start <= end) {
    count ++;

    middle = Math.floor((start + end) / 2);

    if (arr[middle] === item) {
      isFound = true;
      idx = middle;
      return idx;
    }

    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1
    }
  }

  return idx;
};

console.log('binarySearch', binarySearch(array, 6), 'count:', count);
