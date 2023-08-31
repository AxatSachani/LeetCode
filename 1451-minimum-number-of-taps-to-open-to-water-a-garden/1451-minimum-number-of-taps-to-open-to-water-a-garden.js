/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
   const intervals = []

   for (let i = 0; i <= n; i++){
        const [start, end] = [Math.max(0, i - ranges[i]), Math.min(n, i + ranges[i])];
        intervals.push([start, end]);
   }

   intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

   let currentInterval = 0
   let farthestReach = 0
   let tapsUsed = 0


   while(farthestReach < n){
       const farthestCovered = farthestReach
       while(currentInterval < intervals.length && intervals[currentInterval][0] <= farthestCovered){
           farthestReach = Math.max(farthestReach, intervals[currentInterval][1])
           currentInterval += 1
       }

        if(farthestCovered === farthestReach) return - 1
        tapsUsed += 1
   }

    return tapsUsed
};