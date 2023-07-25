/* Select sort */
/* O(n * n) */

const array = [2, 0, 4, 5, -2, 7, 2, 4. -1, 8, -3, 10, 9, -5, 6, 5, 0, -8, 15, -2];

let count = 0;

const selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let idxMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxMin]) {
        idxMin = j;
      }

      count++;
    }

    let tmp = arr[i];
    arr[i] = arr[idxMin];
    arr[idxMin] = tmp;
  }

  return arr;
};

console.log('selectSort', selectSort(array), 'array.length:', array.length, 'count:', count);
