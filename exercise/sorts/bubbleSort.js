/**
 * Created by CTD on 2017/7/19.
 */
// 整理常用的排序算法的js描述  参考 [Damonare的个人博客](http://damonare.cn)


/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
/*
 * 普通冒泡排序
 * */
function bubbleSort(arr) {
    console.time('普通冒泡排序耗时')
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.timeEnd('普通冒泡排序耗时')
    return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [30, 44, 38, 5, 4, 15, 36, 26, 27, 12, 46, 14, 19, 50, 48];
var arr2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(bubbleSort(arr))

/*
 * 改进的冒泡排序  增加标志位  如果已经排序好 循环直接结束
 * */
/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function bubbleSort1(arr) {
    console.time('增加标志位改进冒泡排序耗时')
    let len = arr.length
    let flag = true
    for (let i = 0; i < len - 1; i++) {
        flag = true   // 每次循环之前要给flag重新赋值
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                flag = false   // 发生了交换之后 要设成false
            }
        }
        if (flag === true) // 如果没有发生交换  则已经排序完成  跳出循环
            break
    }
    console.timeEnd('增加标志位改进冒泡排序耗时')
    return arr
}
console.log(bubbleSort1(arr1))

/*
 * 改进冒泡排序 在每趟排序中正反两个方向同时冒泡  使得最大值和最小值归位
 * */
/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function bubbleSort2(arr) {
    console.time('双向冒泡改进冒泡排序耗时')
    let len = arr.length
    let left = 0, right = len - 1 // 确定起始位置
    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i + 1] < arr[i]) { //如果相邻两个数  后面的比前面的小 则交换位置
                let temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }
        right--
        for (let j = right; j > left; j--) {
            if (arr[j] < arr[j - 1]) {  //如果相邻两个数中，后面的比前面的小 则交换位置
                let temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
            }
        }
        left++
    }
    console.timeEnd('双向冒泡改进冒泡排序耗时')
    return arr
}
// arr2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort2(arr2))

//  为什么同时运行记录时间和单独记录运行时间不同？