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
    console.time('普通插入排序耗时')
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
    console.timeEnd('普通插入排序耗时')
    return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.log(insertionSort(arr));

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

/*
* 改进插入排序   可以减少交换次数  与上面第二个方法思路一致
* 不交换，找到位置后原有序数组顺次后移一位，将该元素插入
* */
/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
let insertionSort2 = (arr) => {
    let len = arr.length
    for(let i = 1; i < len; i++) {
        let temp = arr[i]
        for (let j = i; j >= 0; j--) {
            if (arr[j - 1] > temp) {
                arr[j] = arr[j - 1]
            } else {
                arr[j] = temp
                break
            }
        }
    }
    return arr
}
// console.log(insertionSort2(arr));


/*
* 改进后的插入排序——使用二分法进行查找
* */
/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
let insertionSort3 = (arr) => {
    // 使用二分法查找元素的位置
    console.time("二分法改进后的插入排序")
    let binarySearch = (array, start, end, temp) => {
        let middle
        while (start <= end) {
            middle = parseInt((start + end) / 2)   //Math.floor 向下取整
            if (array[middle] > temp) {
                end = middle - 1
            } else {
                // 这边一定要注意  不能再else if  分三种情况判断会有问题 这并不是真正意义上的二分查找 被查找元素不在数组内
                // 两种情况的时候要覆盖所有范围  一定不要忘了相等的情况，否则会死循环
                start = middle + 1
            }
        }
        // 这里要特别注意   返回的不是middle  是start值
        return start
    }
    let len = arr.length
    let flag, index // flag 新插入元素  index 为新插入元素的位置
    for (let i = 1; i < len; i++) {
        flag = arr[i]
        if (arr[i - 1] <= flag) {
            index = i
        } else {
            index = binarySearch(arr, 0, i - 1, flag)
            for (let j = i; j > index; j--) {
                arr[j] = arr[j - 1]
            }
        }
        arr[index] = flag
    }
    console.timeEnd("二分法改进后的插入排序")
    // console.log(arr)
    return arr
}
// console.log(insertionSort3(arr));

// 不过感觉当数组比较小的时候并没有太多减少遍历的次数，反而还在不停重复，可能数量大的时候效果会比较，明显

// 生成1-100 的随机数
/**
 *
 * @param {Number} num
 * @returns {Array}
 */
let arr_create = (min, max, num) => {
    min = Math.ceil(min)  // 这里不能使用let再重新定义了
    max = Math.floor(max)
    let arr = new Array(num)
    for (let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random()*(max - min) + min)
    }
    return arr
}
let testArr = arr_create(1, 1000, 50000)
// console.log(testArr)
insertionSort3(testArr)
// insertionSort(testArr)
// var testArr = [ 37, 45, 12, 19, 74, 5, 19, 9, 69, 12, 60, 69, 99, 42 ]
// console.log(insertionSort3(testArr))
// console.log(insertionSort(testArr))


//  10000个数字排序的时候才刚刚能看出差距
