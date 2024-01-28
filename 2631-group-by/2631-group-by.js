/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const arrGroup = {};

    this.forEach(item => {
        if (arrGroup[fn(item)]) arrGroup[fn(item)].push(item);
        else arrGroup[fn(item)] = [item];
    });

    return arrGroup;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */