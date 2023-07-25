/* Bubble sort */
/* O(n * n) */

const array = [2, 0, 4, 5, -2, 7, 2, 4. -1, 8, -3, 10, 9, -5, 6, 5, 0, -8, 15, -2];

let count = 0;

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }

      count++;
    }
  }

  return arr;
};

console.log('bubbleSort', bubbleSort(array), 'array.length:', array.length, 'count:', count);
