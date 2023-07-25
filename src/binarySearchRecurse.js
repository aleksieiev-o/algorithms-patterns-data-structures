/* Binary search recurse */
/* O(log2n) */

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;

const binarySearchRecurse = (arr, item, start, end) => {
  let middle = Math.floor((start + end) / 2);

  count++;

  if (item === arr[middle]) {
    return middle;
  }

  if (item < arr[middle]) {
    return binarySearchRecurse(arr, item, start, middle - 1);
  } else {
    return binarySearchRecurse(arr, item, middle + 1, end);
  }
};

console.log('binarySearchRecurse', binarySearchRecurse(array, 6, 0, array.length), 'count:', count);
