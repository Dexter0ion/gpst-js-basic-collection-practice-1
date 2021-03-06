'use strict';

function includes(collection, ch) {
    //用find查找
    if(collection.find(x=>x===ch)){
          return true;
    }
        
     /*
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }
    */

}

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    //用forEach改写for循环
    collectionA.forEach(item => {
        if (includes(collectionB, item)) {
            result.push(item);
        }
    })

    return result;
}
