/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    stones.sort((a, b) => b - a)
    while (stones.length > 1) {
        const heavyStone1 = stones.shift()
        const heavyStone2 = stones.shift()
        if (heavyStone1 !== heavyStone2) {
            stones.push(heavyStone1 - heavyStone2)
            stones.sort((a, b) => b - a)
        }

    } return stones.length === 1 ? stones[0] : 0

};