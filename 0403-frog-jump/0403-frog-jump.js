/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const jumpLengths = {}
    for (const position of stones) jumpLengths[position] = new Set()
    jumpLengths[0].add(0)

    for (const position of stones){
        for (const jump of jumpLengths[position]){
            for (let nextJump = jump - 1; nextJump <= jump + 1; nextJump++){
                if (nextJump > 0 && jumpLengths.hasOwnProperty(position + nextJump)){
                    jumpLengths[position + nextJump].add(nextJump)
                }
            }
        }
    }
    return jumpLengths[stones[stones.length - 1]].size > 0
};