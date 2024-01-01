// Write a function findShortestPath which takes in an directed graph list and returns the shortest path between two vertices.

import { Vertex, createWeightedGraph } from "./createWeightedGraph";
import { CreatePriorityQueue } from "./priorityQueue";

type Distances = {
  [key: Vertex]: number;
};

type PreviousLinks = {
  [key: Vertex]: Vertex | null;
};

const graph = createWeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const initializeDistances = (vertices: Vertex[], start: Vertex) => {
  const distances: Distances = {};
  for (let vertex of vertices) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }
  return distances;
};

const initializePreviousLinks = (vertices: Vertex[]) => {
  const previousLinks: PreviousLinks = {};
  for (let vertex of vertices) {
    previousLinks[vertex] = null;
  }
  return previousLinks;
};

const findShortestPath = (
  adjacencyList: (typeof graph)["adjacencyList"],
  start: string,
  end: string
) => {
  const { enqueue, dequeue, queue } = CreatePriorityQueue();
  const visitedNodes: { [key: Vertex]: boolean } = {};
  const vertices = Object.keys(adjacencyList);
  const distances = initializeDistances(vertices, start);
  const previousLinks = initializePreviousLinks(vertices);

  for (let vertex in distances) {
    enqueue(vertex, distances[vertex]);
  }

  while (queue.length) {
    const vertex = dequeue();
    if (!vertex || vertex.value === end) break;
    if (visitedNodes[vertex.value]) continue;
    const neighbors = adjacencyList[vertex.value];
    for (let neighbour of neighbors) {
      const distance = distances[vertex.value] + neighbour.weight;
      if (distance < distances[neighbour.node]) {
        distances[neighbour.node] = distance;
        previousLinks[neighbour.node] = vertex.value;
        enqueue(neighbour.node, distance);
      }
    }
    visitedNodes[vertex.value] = true;
  }

  let endVertex: string | null = end;

  while (endVertex !== null) {
    console.log(`${endVertex}`);
    endVertex = previousLinks[endVertex];
  }
};

findShortestPath(graph.adjacencyList, "A", "E");
