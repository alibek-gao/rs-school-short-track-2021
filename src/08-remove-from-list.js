/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const arr = [];
  let temp = l;
  while (temp.next !== null) {
    if (temp.value !== k) {
      arr.push(temp);
    }
    temp = temp.next;
  }
  arr.push(temp);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1].next = null;
  return arr[0];
}

module.exports = removeKFromList;
