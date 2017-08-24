'use strict';

function find(collection, ch) {
    //用find与some方法改写for循环 匹配后返回item
    //先some方法查找是否有相同元素 若有用find方法匹配
    
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

function summarize(collection) {
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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
        }
    }
    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
