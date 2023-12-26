// Create a function reverseLinkedList that reverse a linked list provided as argument.
import { LinkedList, LinkedListType } from "./createLinkedList";

function reverseLinkedList(list: LinkedListType) {
  let current = list.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;
}

const list = LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log("Original");

list.print();

reverseLinkedList(list);

console.log("Reversed");

list.print();
