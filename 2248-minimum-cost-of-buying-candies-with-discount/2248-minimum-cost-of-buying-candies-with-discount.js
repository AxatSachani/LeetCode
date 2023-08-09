/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a)
    const timeOfPurchase = Math.floor(cost.length / 3)
    let totalCostToPurchase = 0
    for (let i = 0; i < timeOfPurchase; i++) {
        const temp = cost.slice((i * 3), ((i * 3) + 3));
        totalCostToPurchase += temp[0]
        totalCostToPurchase += temp[1]
    }
    cost.splice(timeOfPurchase * 3, cost.length).forEach(d => totalCostToPurchase += d)
    return totalCostToPurchase
};
