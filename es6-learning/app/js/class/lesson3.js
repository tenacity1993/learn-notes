{
  let regex = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)
  console.log(regex.test('xyz123'),regex2.test('xyz123'));
// es6 方法
  let regex3 = new RegExp(/xyz/ig, 'i')
// 允许两个参数，后面的参数允许覆盖前面的修饰符  可以通过flag属性获取修饰符
  console.log(regex3.flags)
}
{
  // 新增y u 两个修饰符
  let s = 'bbb_bb_b'
  let a1 = /b+/g
  let a2 = /b+/y

  // g y 都是全局匹配   y匹配第一个必须是下一个紧跟着匹配成功才算匹配成功
  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));
// 添加 sticky属性 判断是否开启y修饰符
  console.log(a1.sticky, a2.sticky);
}


{
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A') );//两个字符
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A') );//一个字符
  console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a'));//  大括号包起来 有u修饰符 被当作一个编码
  console.log(`\u{20BB7}`);
  let s = '𠮷';
  console.log('u', /^.$/u.test(s));// 没有u不能成功匹配
  // 如果有大于两个字节的 一定要加上u才能正常匹配
  console.log('test', /𠮷{2}/u.test('𠮷𠮷'));//  也要加u才能匹配成功

  // 如果处理的字符串中有大于两个字节的，一定要加u  ‘.’ 并不是可以匹配所有字符，这里的所有字符需要小于两个字节才能正常匹配
  // '.' 不能识别换行符 回车符  行分隔符 段分隔符  可以用s修饰符匹配，不过es6还未实现
}





//
