// Write a function bfsGraphTraverse which takes in an adjacency list and returns an array of values in depth first search order.

import {
  AdjacencyList,
  Vertex,
  createAdjacencyList,
} from "./createAdjacencyList";
const graph = createAdjacencyList();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// This can also be defined in the createAdjacencyList.ts file.
const bfsGraphTraverse = (graph: AdjacencyList, vertex: Vertex) => {
  const result: Vertex[] = [];
  const visited: { [key: Vertex]: boolean } = {};
  const queue: Vertex[] = [];

  queue.push(vertex);

  while (queue.length) {
    const vertex = queue.shift();
    if (vertex && !visited[vertex]) {
      visited[vertex] = true;
      result.push(vertex);
      for (let edge of graph[vertex]) {
        queue.push(edge);
      }
    }
  }

  return result;
};

console.log(bfsGraphTraverse(graph.adjacencyList, "A"));
