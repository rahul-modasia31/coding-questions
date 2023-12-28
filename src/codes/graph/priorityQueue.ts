// Write a function CreatePriorityQueue which returns a priority queue. It contains methods to add, remove and print the queue.

export type Node = {
  value: string;
  priority: number;
};

export const CreatePriorityQueue = () => {
  const queue: Node[] = [];

  return {
    queue,
    enqueue: (value: string, priority: number) => {
      const index = queue.findIndex((node) => node.priority > priority);
      if (index === -1) {
        queue.push({ value, priority });
      } else {
        queue.splice(index, 0, { value, priority });
      }
    },
    dequeue: () => {
      return queue.shift();
    },
    print: () => {
      console.log(queue);
    },
  };
};

// const queue = CreatePriorityQueue();
// queue.enqueue("A", 10);
// queue.enqueue("B", 5);
// queue.enqueue("C", 15);

// queue.print();

// console.log(queue.dequeue());
// console.log(queue.dequeue());

// queue.print();
