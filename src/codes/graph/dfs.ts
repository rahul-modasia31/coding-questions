// Write a function dfsGraphTraverse which takes in an adjacency list and returns an array of values in depth first search order.

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
const dfsGraphTraverse = (graph: AdjacencyList, vertex: Vertex) => {
  const result: Vertex[] = [];
  const visited: { [key: Vertex]: boolean } = {};

  const traverse = (vertex: Vertex) => {
    if (!vertex || visited[vertex]) return;
    visited[vertex] = true;
    result.push(vertex);
    for (let edge of graph[vertex]) {
      traverse(edge);
    }
  };

  traverse(vertex);
  return result;
};

console.log(dfsGraphTraverse(graph.adjacencyList, "A"));
