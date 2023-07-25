/* Linear search */
/* O(n) */

const array = [2, 4, 5, 7, 2, 4, 8, 10, 9, 6, 5, 15];

let count = 0;

const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    count ++;

    if (arr[i] === item) {
      return i;
    }
  }

  return null;
};

console.log('linearSearch', linearSearch(array, 15), 'count:', count);
