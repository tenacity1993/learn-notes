// 整理遇到的编程题和解法

/*
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
function myisIsogram(str){
    let resSet = new Set()
    for(let i = 0; i < str.length; i++){
        resSet.add(str[i].toLowerCase())
    }
    if (str.length === resSet.size)
        return true
    else
        return false
}
// 使用正则表达式匹配分组的文本
function isIsogram1(str){
    return !/(\w).*\1/i.test(str)
}
function isIsogram2(str){
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
function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}