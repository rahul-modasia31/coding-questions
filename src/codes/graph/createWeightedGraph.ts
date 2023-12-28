// Write a function createWeightedGraph which returns an adjacency list for an undirected graph. It contains methods to add, remove vertices and edges.

export type Vertex = string;
type Edge = {
  node: Vertex;
  weight: number;
};

export type AdjacencyList = {
  [key: Vertex]: Edge[];
};

export const createWeightedGraph = () => {
  const adjacencyList: AdjacencyList = {};
  const removeEdge = (vertex1: Vertex, vertex2: Vertex) => {
    if (!adjacencyList[vertex1] || !adjacencyList[vertex2]) return;
    adjacencyList[vertex1] = adjacencyList[vertex1].filter(
      (vertex) => vertex.node !== vertex2
    );
    adjacencyList[vertex2] = adjacencyList[vertex2].filter(
      (vertex) => vertex.node !== vertex1
    );
  };

  const removeVertex = (vertex: Vertex) => {
    if (!adjacencyList[vertex]) return;
    for (let edge of adjacencyList[vertex]) {
      removeEdge(vertex, edge.node);
    }
    delete adjacencyList[vertex];
  };
  return {
    adjacencyList,
    addVertex: (vertex: Vertex) => {
      if (!adjacencyList[vertex]) adjacencyList[vertex] = [];
    },
    addEdge: (vertex1: Vertex, vertex2: Vertex, weight: number) => {
      if (!adjacencyList[vertex1] || !adjacencyList[vertex2]) return;
      adjacencyList[vertex1].push({ node: vertex2, weight });
      adjacencyList[vertex2].push({ node: vertex1, weight });
    },
    removeEdge,
    removeVertex,
    print: () => {
      const vertices = Object.keys(adjacencyList);
      for (let vertex of vertices) {
        for (let edge of adjacencyList[vertex]) {
          console.log(`${vertex} => ${edge.node} (${edge.weight})`);
        }
      }
    },
  };
};

// const graph = createWeightedGraph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A", "B", 10);
// graph.addEdge("A", "C", 20);
// graph.addEdge("B", "C", 15);

// graph.print();

// console.log("Remove edge A-B");

// graph.removeEdge("A", "B");

// graph.print();

// console.log("Remove vertex A");

// graph.removeVertex("A");

// graph.print();
