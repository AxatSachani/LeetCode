/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const map = new Map();

    // Populate map with arr1 items
    arr1.forEach(item => {
        map.set(item.id, item);
    });

    // Merge arr2 items into map
    arr2.forEach(item => {
        // Check if item exists in map
        if (map.has(item.id)) {
            // Merge properties into existing item in map
            Object.assign(map.get(item.id), item);
        } else {
            // Add new item to map
            map.set(item.id, item);
        }
    });

    // Convert map values back to array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
