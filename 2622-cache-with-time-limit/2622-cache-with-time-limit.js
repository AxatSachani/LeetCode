var TimeLimitedCache = function() {
    this.cache = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  if (this.cache[key] && this.cache[key].timer) {
    clearTimeout(this.cache[key].timer);
    this.cache[key].value = value;
    this.cache[key].timer = setTimeout(() => {
      this.remove(key);
    }, duration);
    return true;
  } else {
    this.cache[key] = {
      value: value,
      timer: setTimeout(() => {
        this.remove(key);
      }, duration)
    };
    return false;
  }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  if (this.cache[key] && this.cache[key].timer) {
    return this.cache[key].value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function() {
  let count = 0;
  for (const key in this.cache) {
    if (this.cache[key].timer) {
      count++;
    }
  }
  return count;
};

TimeLimitedCache.prototype.remove = function(key) {
  delete this.cache[key];
};



// var TimeLimitedCache = function () {
//     this.cache = new Map();
// };

// /** 
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function (key, value, duration) {
//     // Clear existing timer if key already exists
//     if (this.cache.has(key)) return false

//     // Set new value and schedule expiration
//     const timer = setTimeout(() => {
//         this.remove(key);
//     }, duration);

//     this.cache.set(key, {
//         value: value,
//         timer: timer
//     });
//     // Return true if the key was updated, false if it was newly added
//     return this.get(key);
// }
// /** 
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function (key) {
//     if (this.cache.has(key)) {
//         return this.cache.get(key).value;
//     } else {
//         return -1; // Or any other default value indicating key not found
//     }
// };

// /** 
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function () {
//     return this.cache.size;
// };

// TimeLimitedCache.prototype.remove = function (key) {
//     if (this.cache.has(key)) {
//         clearTimeout(this.cache.get(key).timer);
//         this.cache.delete(key);
//     }
// };

// /**
//  * const timeLimitedCache = new TimeLimitedCache()
//  * timeLimitedCache.set(1, 42, 1000); // false
//  * timeLimitedCache.get(1) // 42
//  * timeLimitedCache.count() // 1
//  */
