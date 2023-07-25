/* Graph. Dijkstra's algorithm. For finding the shortest paths between nodes in a weighted graph */
/* */

const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

const findLowestNodeCost = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestNode = null;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
};

const searchDijkstra = (gr, start, end) => {
  const costs = {};
  const processed = [];
  let neighbors = {};

  Object.keys(gr).forEach((node) => {
    if (node !== start) {
      costs[node] = gr[start][node] || Infinity;
    }
  });

  let node = findLowestNodeCost(costs, processed);

  while (node) {
    let cost = costs[node];
    neighbors = gr[node];

    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }

      processed.push(node);

      node = findLowestNodeCost(costs, processed);
    });
  }

  return costs;
};

console.log('searchDijkstra', searchDijkstra(graph, 'a', 'g'));
