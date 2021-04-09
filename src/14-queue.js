const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = [];
  }

  get size() {
    return this.list.length;
  }

  enqueue(e) {
    this.list.push(new ListNode());
    this.list[this.size - 1].value = e;
    if (this.size > 1) {
      this.list[this.size - 2].next = this.list[this.size - 1];
    }
  }

  dequeue() {
    const node = this.list.shift();
    return node ? node.value : undefined;
  }
}

module.exports = Queue;
