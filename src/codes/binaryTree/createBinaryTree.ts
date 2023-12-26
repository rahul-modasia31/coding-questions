export type TreeNode = {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

type BinaryTreeType = {
  root: TreeNode | null;
  add: (value: number) => void;
  search: (value: number) => boolean;
  print: () => void;
};

function CreateNode(value: number): TreeNode {
  return {
    data: value,
    left: null,
    right: null,
  };
}

export function BinaryTree(): BinaryTreeType {
  return {
    root: null,
    add: function (value: number) {
      const addNode = (node: TreeNode | null, value: number): TreeNode => {
        if (!node) {
          return CreateNode(value);
        }
        if (value < node.data) {
          node.left = addNode(node.left, value);
        } else if (value > node.data) {
          node.right = addNode(node.right, value);
        }
        return node;
      };
      this.root = addNode(this.root, value);
    },
    search: function (value: number): boolean {
      const searchNode = (node: TreeNode | null, value: number): boolean => {
        if (!node) return false;
        if (node.data === value) return true;
        if (value < node.data) return searchNode(node.left, value);
        if (value > node.data) return searchNode(node.right, value);
        return false;
      };
      return searchNode(this.root, value);
    },
    print: function () {
      const printNode = (node: TreeNode | null) => {
        if (!node) return;
        printNode(node.left);
        console.log(node.data);
        printNode(node.right);
      };
      printNode(this.root);
    },
  };
}

// const tree = BinaryTree();
// tree.add(10);
// tree.add(2);
// tree.add(13);
// tree.add(1);
// tree.add(5);
// tree.add(12);
// tree.add(14);
// tree.add(15);

// tree.print();

// console.log(tree.search(10));
// console.log(tree.search(2));
// console.log(tree.search(23));
