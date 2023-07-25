/* Quick sort (Huar's sort) */
/* O(log2n * n) */

const array = [2, 0, 4, 15, -2, 7, 2, 4. -1, 8, -3, 10, 9, 5, 6, 5, 0, -8, 15, -2];

let count = 0;

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr[pivotIdx];
  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    count++;

    if (i === pivotIdx) {
      continue;
    }

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log('quickSort', quickSort(array), 'array.length:', array.length, 'count:', count);
