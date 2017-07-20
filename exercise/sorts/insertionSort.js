/**
 * Created by CTD on 2017/7/19.
 */
/*插入排序
 * 插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。
 * 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 * 插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），
 * 因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
 *
 * */

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
// 直接插入排序
// 参考 http://bubkoo.com/2014/01/14/sort-algorithm/insertion-sort/
let insertionSort = (arr) => {
    function swap(array, i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    let len = arr.length
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0; j--) {  // 已排序数组从后向前遍历
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j)
            } else {
                break
            } 
        }
    }
    return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr));

// 另解  参考博客
function insertionSort1(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') { // 判断传入参数的原型是否是数组
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}