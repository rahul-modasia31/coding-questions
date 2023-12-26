// Write a function BreadthFirstSearch which takes in a binary tree and returns an array of values in breadth first order.

import { BinaryTree, TreeNode } from "./createBinaryTree";

function BreadthFirstSearch(tree: ReturnType<typeof BinaryTree>) {
  const result: number[] = [];
  const queue: TreeNode[] = [];
  if (!tree.root) return result;
  queue.push(tree.root);
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}

const tree = BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(2);
tree.add(7);
tree.add(12);

console.log(BreadthFirstSearch(tree));
