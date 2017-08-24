'use strict';

function find(collection, ch) {

    //用find与some方法改写for循环 匹配后返回item
    if(collection.some(x=>x.key===ch)){
        var item = collection.find(x=>x.key===ch);
        return item;
    }
    /*
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }
    */
    return null;
}

module.exports = function countSameElements(collection) {
    let result = [];
    for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }
    return result;
}
