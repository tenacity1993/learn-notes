/*
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var Num = 2
var inputs = []

rl.on('line', function(input) {
    inputs.push(input.trim())
    // 满足一组行数条件之后再进行数据的处理
    if(Num == inputs.length) {
        var res = []
        var s1 = inputs[0].split('')
        var s2 = inputs[1].split('')
        var len = s1.length
        for (var i = 0; i < len; i++) {
            res.push(s1[i])
            res.push(s2[len - i - 1])
        }
        res = res.join('')
        console.log(res)
        inputs.length = 0
    }
})*/
var arr = [4,3,4, 5, 1, 3, 2]
var n = 5
console.log(cal(arr.length, arr))
function cal(n, arr) {
    var res = []
    for (var k = 0; k < n; k++) {
        res[k] = 0
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if(arr[i] < arr[j]) {
                res[i]++
            }
        }
    }
    return res.join(' ')
}
/////

var a, b;
var arr = []
var num = 0
var input = ''
while(line = read_line()){
    if(num == 0) {
        a = parseInt(line.trim())
        num = 1
    } else {
        arr = line.split(' ').map(function(item, index, array) {
            return parseInt(item)
        })
        let c = cal(arr.length, arr).join(' ')
        num = 0
        print(c)
    }
}

function cal(n, arr) {
    var res = []
    for (var k = 0; k < n; k++) {
        res[k] = 0
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if(arr[i] < arr[j]) {
                res[i]++
            }
        }
    }
    return res
}
