/**
 * Created by CTD on 2017/8/11.
 */

function getTimeFormat() {
    var d = new Date()
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    month = month < 10 ? '0' + month : month
    var day = d.getDate()
    day = day < 10 ? '0' + day : day
    console.log(year + '-' + month + '-' + day)
}
// getTimeFormat()

function randomCreate(min, max, num) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var arr = new Array(num)
    for(var i = 0; i < num; i++)
        arr[i] = Math.floor(Math.random() * (max - min) + min)
    return arr
}
// console.log(randomCreate(1, 10, 10))

function getParams(url) {
    var res = {}
    url = url.split('?')[1]
    var map = url.split('&')
    for (var i = 0; i < map.length; i++) {
        res[map[i].split('=')[0]] = map[i].split('=')[1]
    }
    return res
}
// console.log(getParams('http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e'))

//编写程序 清除字符串前后的空格 
function myTrim(str) {
    var res = ''
    res = str.replace(/^\s+/, '').replace(/\s+$/, '')
    return res
}
// console.log(myTrim("  asdf   "))

function clone(obj) {
    var buf = null
    if(obj instanceof Array) {
        buf = []
        var len = obj.length
        for (var i = 0; i < len; i++)
            buf[i] = clone(obj[i])
        return buf
    } else if(obj instanceof Object) {
        buf = {}
        for (var k in obj)
            buf[k] = clone(obj[k])
        return buf
    } else {
        return obj
    }
}
var obj = [2, 3, 4, 4, 3, 5, 6, 6]
var obj1 = {
    a: 4,
    b: 3
}
// console.log(clone(obj1))

// 清除数组里重复的元素
function deleteRepeatedObj(arr) {
    var set = new Set()
    var len = arr.length
    for (var i = 0; i < len; i++) {
        set.add(arr[i])
    }
    return set
}
// console.log(deleteRepeatedObj(obj))

//将全文单词的首字母大写
function firstLetterUppercase(article) {
    var words = article.toLowerCase().split(' ')
    var res = words.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    return res.join(' ')
}
console.log(firstLetterUppercase('asdf asdf asdf asdf qw erq wer dfvs vzxcv ASDdf fgerg sfdg'))