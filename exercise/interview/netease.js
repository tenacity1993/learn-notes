/**
 * Created by CTD on 2017/8/12.
 */

function calLen(str) {
    var len = str.length
    var flag = true
    var tempLen = 0
    var resLen = 0
    for (var i = 0; i < len; i++) {
        tempLen = 0
        for (var j = i; j < len - 1; j++) {
            if (str[j] !== str[j+1]) {
                // console.log(str[j], str[j+1])
                tempLen++
                if(tempLen > resLen) {
                    resLen = tempLen
                }
            } else {
                break
            }
        }
    }
    console.log(resLen+1)
}
var teststr = '111101111'
var teststr1 = '1010101011'
// calLen(teststr)
// calLen(teststr1)


function live(rent, fhas, moneyhas, apple) {
    // console.time('123')
    var day = 0
    var cost = 0
    while(moneyhas >= rent) {
        if(fhas > 0) {
            fhas = fhas - 1;
            moneyhas = moneyhas - rent;
        } else {
            moneyhas = moneyhas - apple - rent;
        }
        if(moneyhas >= 0) {
            day++;
        }
    }
    // console.timeEnd("123")
    console.log(day)
}
// live(3, 5, 100, 10)
// live(2, 6, 100, 20)
// live(12, 6, 100, 20)
// live(1200, 60, 100000, 200)
// live(2, 6, 100, 200)

function set1(line) {
    var len = line.length
    var set = new Set()
    for(var i = 0; i < len; i++) {
        set.add(line[i])
    }
    if(set.size > 2){
        console.log(0)
    } else if(set.size === 1){
        console.log(1)
    } else {
        console.log(3)
    }
}
// set1('AABB')

setTimeout(function () {
    console.log(111)
}, 100)
setTimeout(function () {
    console.log(222)
}, 0)
console.log(3)