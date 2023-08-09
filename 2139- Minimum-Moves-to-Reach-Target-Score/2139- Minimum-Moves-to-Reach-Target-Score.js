/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
    let steps = 0
    while (target != 1) {
        if (maxDoubles == 0) {
            steps += target - 1
            target = 1
        }
        else if (target % 2 == 0 && maxDoubles > 0) {
            steps++
            target = target / 2
            maxDoubles--
        }
        else {
            steps++
            target--
        }
    }
    return steps
};
