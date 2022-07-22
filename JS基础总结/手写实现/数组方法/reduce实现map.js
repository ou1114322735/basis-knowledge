/**
 * 用数组的reduce方法实现数组的map
 */
 Array.prototype._map = function(fn, thisArg) {
    const result = [];
    this.reduce((prev, curr, index, array) => {
      result[index] = fn.call(thisArg, array[index], index, array);
    }, 0)
    return result;
  }






