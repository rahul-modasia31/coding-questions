// Create a function DepthFirstSearch that traverse a binary tree in depth first search order.
// Write a function BreadthFirstSearch which takes in a binary tree and returns an array of values in breadth first order.

import { BinaryTree } from "./createBinaryTree";

function DepthFirstSearchPreOrder(tree: ReturnType<typeof BinaryTree>) {
  const result: number[] = [];
  const traverse = (node: typeof tree.root) => {
    if (!node) return;
    result.push(node.data);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(tree.root);
  return result;
}

function DepthFirstSearchPostOrder(tree: ReturnType<typeof BinaryTree>) {
  const result: number[] = [];
  const traverse = (node: typeof tree.root) => {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.data);
  };
  traverse(tree.root);
  return result;
}

function DepthFirstSearchInOrder(tree: ReturnType<typeof BinaryTree>) {
  const result: number[] = [];
  const traverse = (node: typeof tree.root) => {
    if (!node) return;
    traverse(node.left);
    result.push(node.data);
    traverse(node.right);
  };
  traverse(tree.root);
  return result;
}

const tree = BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(2);
tree.add(7);
tree.add(12);

console.log(DepthFirstSearchPreOrder(tree));
console.log(DepthFirstSearchPostOrder(tree));
console.log(DepthFirstSearchInOrder(tree));
