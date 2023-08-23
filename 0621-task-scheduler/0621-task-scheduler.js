/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    const freq = Array(26).fill(0);
    for (const task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    
    freq.sort((a, b) => a - b);
    const maxFreq = freq[25] - 1;
    let idleSlots = maxFreq * n;
    for (let i = 24; i >= 0 && freq[i] > 0; i--) {
        idleSlots -= Math.min(maxFreq, freq[i]);
    }
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}

