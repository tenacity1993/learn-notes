// 整理遇到的编程题和解法

/* task 1
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.
 *
 * isIsogram( "Dermatoglyphics" ) == true
 * isIsogram( "aba" ) == false
 * isIsogram( "moOse" ) == false // -- ignore letter case
 *
 * */

// 使用集合特性
function myisIsogram(str) {
    let resSet = new Set()
    for (let i = 0; i < str.length; i++) {
        resSet.add(str[i].toLowerCase())
    }
    if (str.length === resSet.size)
        return true
    else
        return false
}
// 使用正则表达式匹配分组的文本
function isIsogram1(str) {
    return !/(\w).*\1/i.test(str)
}

function isIsogram2(str) {
    return !str.match(/([a-z]).*\1/i);
}

// 利用字符串查找
function isIsogram3(str) {
    str = str.toLowerCase()

    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i), i + 1) >= 0) {
            return false
        }
    }

    return true
}

// 使用集合特性 可以直接创建集合
function isIsogram(str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}

/*task 2
 * Your task is to sort a given string. Each word in the String will contain a single number.
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input String is empty, return an empty String.
 * The words in the input String will only contain valid consecutive numbers.
 * For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
 *
 * */

function myorder(words) {
    if (words) {
        let array = words.split(' ')
        let res = []
        let reg = /\d/
        for (let i = 0; i < array.length; i++) {
            if (reg.exec(array[i])) {
                var num = reg.exec(array[i])[0]
                res[num] = array[i]
            }
        }
        return res.slice(1).toString().replace(/,/g, ' ')
    } else {
        return words
    }
}

// match  return an array of result
function order1(words) {
    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

// 不太理解 如果字符串中没有数字怎么处理，题目没有明确说清楚
// console.log(order1('1qwe dfsv df4 sdfg5 sdfg3 sfg9 sdfgs6 asdf asdf'))
// console.log(order1(''))

/* task 3
 *给定两个整数 l 和 r ，对于所有满足1 ≤ l ≤ x ≤ r ≤ 10^9 的 x ，把 x 的所有约数全部写下来。对于每个写下来的数，只保留最高位的那个数码。求1～9每个数码出现的次数。
 输入描述:
 一行，两个整数 l 和 r (1 ≤ l ≤ r ≤ 10^9)。

 输出描述:
 输出9行。
 第 i 行，输出数码 i 出现的次数。
 输入例子1:
 1 4
 输出例子1:
 4
 2
 1
 1
 0
 0
 0
 0
 0
 * */

// 牛客网上一直不ac  不知道是什么原因
function calNumTimes() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.on('line', function (line) {
        let temp = []
        let array = temp.concat(line.split(' '))
        let resArray = array.map((data) => {
            return +data
        })
        let timeArray = new Array(10).fill(0)
        let divisorArray = []
        let begin = resArray[0],
            end = resArray[1]
        for (let i = begin; i <= end; i++) {
            for (let j = 1; j <= i; j++) {
                if (typeof (i % j) === 'number' && (i % j) == 0) {
                    divisorArray.push(j)
                }
            }
        }

        divisorArray.forEach((data, index, arr) => {
            timeArray[data.toString()[0]]++;
        })
        timeArray.slice(1).forEach((data, index, arr) => {
            console.log(data)
        })
    })
}

/* task 4
 *Given an array of one's and zero's convert the equivalent binary value to an integer.

 Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1
 *
 * */
const binaryArrayToNumber = arr => {
    let temp = 0
    let len = arr.length
    for (let i = 0; i < len; i++) {
        temp += arr[i] * Math.pow(2, len - i - 1)
    }
    return temp
};

const binaryArrayToNumber2 = arr => {
    let temp = 0
    let arr2 = [8, 4, 2, 1]
    for (let i = 0; i < 4; i++) {
        arr[i] = arr[i] * arr2[i]
    }
    temp = arr.reduce((prev, cur) => {
        return prev + cur
    })
    return temp
};
// console.log(binaryArrayToNumber2([0, 1, 0, 1]))


let readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let Num = 2
let inputs = []

rl.on('line', (input) => {
    inputs.push(input.trim())
    if (Num == input.length) {
        let res = []
        let s1 = inputs[0].split('')
        let s2 = inputr[1].split('')
        let len = s1.length
        for (let i = 0; i < len; i++) {
            res.push(s1[i])
            res.push(s2[len - i - i])
        }
        res = res.join('')
        inputs.length = 0
        console.log(res)
    }
})

// 求中位数
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var num = 0
var inputs = []
rl.on('line', function (line) {
    if (num == 0) {
        num = parseInt(line.trim())
    } else {
        inputs.push(line.trim())
        if (num == inputs.length) {
            var res
            inputs.sort(function (a, b) {
                return a - b
            })

            if (num % 2) {
                res = inputs[(num - 1) / 2]
            } else {
                res = Math.floor((inputs[num / 2] + inputs[num / 2 - 1]) / 2)
            }

            console.log(res)
            inputs.length = 0
            num = 0
        }
    }
})
/**
 * 判断一个书是不是平方数
 */
// 呃。。。对比一下自己写的好挫
var isSquare = function (n) {
    var temp = parseInt(Math.sqrt(n))
    if (n == temp * temp) return true
    else {
        return false; 
    }
}

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));
var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n));
}