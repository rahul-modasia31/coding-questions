// Write a function LinkedList which has the following methods:
// add
// remove
// print

type Data = string | number;

type ListNode = {
  data: Data;
  next: ListNode | null;
};

export type LinkedListType = {
  head: ListNode | null;
  add: (value: Data) => void;
  remove: (value: Data) => void;
  print: () => void;
};

// Node constructor function
function CreateNode(data: Data): ListNode {
  return {
    data: data,
    next: null,
  };
}

export function LinkedList(): LinkedListType {
  return {
    head: null,

    add: function (value: Data) {
      if (!this.head) {
        this.head = CreateNode(value);
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = CreateNode(value);
      }
    },
    remove: function (value: Data) {
      if (!this.head) {
        return null;
      } else if (this.head.data === value) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        while (current.next) {
          if (current.next.data === value) {
            current.next = current.next.next;
            return;
          }
          current = current.next;
        }
      }
    },
    print: function () {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    },
  };
}

// const list = LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);

// list.print();

// list.remove(3);
// list.remove(1);

// list.print();
