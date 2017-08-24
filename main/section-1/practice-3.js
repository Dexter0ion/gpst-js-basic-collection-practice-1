'use strict';

function includes(collection, ch) {

     //用find方法改写
    if (collection.find(x => x === ch)) {
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

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
        //用forEach改写for循环
    collectionA.forEach(item=>{
        if (includes(objectB.value, item)) {
            result.push(item);
        }});
    
    return result;
}
