/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const results = [], total = functions.length;
        let completedCount = 0;

        functions.forEach((fn, index) => {
            fn().then(result => {
                results[index] = result;
                completedCount++;
                if (completedCount === total) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */