{
  console.log('a', `\u0061`);
  console.log('s', `\u20bb7`); // 超过了0xffff
  console.log('s', `\u{20bb7}`);
}

{
  let s = '𠮷'
  console.log('length', s.length);
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));
// codePointAt  取码值
  let s1 = '𠮷a'
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0))// 会自动计算四个字节的码值
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1))
  console.log('code2', s1.codePointAt(2))
}
{
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}
{
  //字符串遍历器
  let str = `\u{20bb7}abc`
  for (let i = 0; i < str.length; i++){
    console.log('es5', str[i]);
  }
  // 使用遍历器接口 let  of
  for(let code of str){
    console.log('es6', code);
  }
}
{
  let str = 'string'
  console.log('includes',str.includes('s'));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ng'));
}
{
  let str = 'abc'
  // 字符串重复
  console.log(str.repeat(2));
}
{
  let name = 'list'
  let info = 'hello world'
  let m =  `i am ${name}:${info}`
  console.log(m);
}

{
  //  补白   使得返回字符串长度满足要求
  console.log('1'.padStart(2, '0'));
  console.log('1'.padEnd(2, '0'));
}
{
  // 标签模版
  let user = {
    name: 'list',
    info: 'hello world'
  }
  // 防止xss攻击  处理多语言转换
  console.log(abc `i am ${user.name}, ${user.info}`);
  // abc `i am ${user.name}, ${user.info}`
  function abc(s, v1, v2){
    console.log(s, v1, v2);
    return s + v1 + v2
  }

}
{
  // raw 会存在转义
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}

//
