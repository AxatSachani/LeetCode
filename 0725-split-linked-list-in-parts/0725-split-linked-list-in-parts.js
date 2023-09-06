/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = (head, k) => {
    let nodes = 0, node = new ListNode(0, head)
    while (node = node.next) nodes++
    let parts = [], q = nodes / k | 0, r = nodes % k
    while (parts.length < k) {
        parts.push(node = head)
        for (let i = q + (r-- > 0); i > 1; i--)
            node = head = head?.next
        if (head) head = head.next
        if (node) node.next = null
    }
    return parts
}