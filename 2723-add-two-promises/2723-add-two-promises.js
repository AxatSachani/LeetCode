/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
    try {
        const [val1, val2] = await Promise.all([promise1, promise2]);
        return val1 + val2;
    } catch (error) {
        throw error; // Propagate any errors from the promises
    }
};


/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */