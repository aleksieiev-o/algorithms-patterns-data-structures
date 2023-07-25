/* Graphs. Breadth search */
/* */

const graph = {
  a: ['b', 'c'],
  b: ['f'],
  c: ['d', 'e'],
  d: ['f'],
  e: ['f'],
  f: ['g'],
};

const graphsBreadthSearch = (gr, start, end) => {
  let queue = [];

  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (!gr[current]) {
      gr[current] = [];
    }

    if (gr[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...gr[current]];
    }
  }

  return false;
};

console.log('graphsBreadthSearch', graphsBreadthSearch(graph, 'a', 'g'));
