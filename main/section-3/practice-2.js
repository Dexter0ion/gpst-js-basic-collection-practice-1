'use strict';

function includes(collection, ch) {

    //使用数组includes方法改写for循环
    if (collection.includes(ch)) {
        return true;
    }
    /*
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }
    */
    return false;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    for (let item of collectionA) {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({ key, count });
    }
    return result;
}
