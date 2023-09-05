/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const visited = new Map();

    const copy = (node) => {
        if (!node) return null;

        if (visited.has(node)) return visited.get(node);

        const newNode = new Node(node.val);
        visited.set(node, newNode);

        newNode.next = copy(node.next);
        newNode.random = copy(node.random);

        return newNode;
    };

    return copy(head);
};