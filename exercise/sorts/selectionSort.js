/**
 * Created by CTD on 2017/7/19.
 */
// 选择排序
/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
let selectionSort = (arr) => {
    console.time('选择排序耗时')
    let len = arr.length
    let minIndex = 0
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j  // 记录最小值所在位置
            }
        }
        let temp = arr[i]   // 将最小值和左侧值进行交换  最小值归位
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.timeEnd('选择排序耗时')
    return arr
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]