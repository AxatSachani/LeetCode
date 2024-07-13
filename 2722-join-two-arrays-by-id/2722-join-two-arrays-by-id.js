/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const map = new Map();

    arr1.forEach(item => {
        map.set(item.id, item);
    });

    arr2.forEach(item => {
        const value = map.get(item.id);
        console.log(value)
        if (value) map.set(item.id, { ...value, ...item });
        else map.set(item.id, item);
    });

    // Convert map values back to array and return
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};