// Write a function createAdjacencyList which returns an adjacency list for an undirected graph. It contains methods to add, remove vertices and edges.

export type Vertex = string;
type Edge = Vertex[];

export type AdjacencyList = {
  [key: Vertex]: Edge;
};

export const createAdjacencyList = () => {
  const adjacencyList: AdjacencyList = {};

  const removeEdge = (vertex1: Vertex, vertex2: Vertex) => {
    if (!adjacencyList[vertex1] || !adjacencyList[vertex2]) return;
    adjacencyList[vertex1] = adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    adjacencyList[vertex2] = adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  };

  const removeVertex = (vertex: Vertex) => {
    if (!adjacencyList[vertex]) return;
    for (let edge of adjacencyList[vertex]) {
      removeEdge(vertex, edge);
    }
    delete adjacencyList[vertex];
  };

  return {
    adjacencyList,
    addVertex: (vertex: Vertex) => {
      if (!adjacencyList[vertex]) adjacencyList[vertex] = [];
    },
    addEdge: (vertex1: Vertex, vertex2: Vertex) => {
      if (!adjacencyList[vertex1] || !adjacencyList[vertex2]) return;
      adjacencyList[vertex1].push(vertex2);
      adjacencyList[vertex2].push(vertex1);
    },
    removeEdge,
    removeVertex,
    print: () => {
      const vertices = Object.keys(adjacencyList);
      for (let vertex of vertices) {
        console.log(`${vertex} => ${adjacencyList[vertex]}`);
      }
    },
  };
};

// const graph = createAdjacencyList();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "C");

// graph.print();

// console.log("Remove edge A-B");

// graph.removeEdge("A", "B");

// graph.print();

// console.log("Remove vertex A");

// graph.removeVertex("A");

// graph.print();
