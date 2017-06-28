# ES6 语法

### let const
- 作用域的概念
  全局、函数
  es6新增：块作用域
```javascript
function test(){
  // 块作用域开始
  for(let i = 1; i < 3; i++){
    console.log(i);
  }
  // 块作用域结束
  console.log(i);//  这个i 引用错误 未定义
}
```
es6  强制开启严格模式  变量未声明不能引用，否则会报引用错误
常量声明时必须赋值且不能修改
```javascript
function last(){
  // 常量声明时必须赋值
  const PI = 3.1415926;
  const k = {
    a:1
  }
  // k为指针，指针不变，但是对象时可以变化的
  k.b=3;
  console.log(PI, k);
  // PI = 4.3   常量不能修改  read-only
}
```
- 如何使用

### 解构赋值

```javascript
// 数组解构赋值
{
  let a, b, rest;
  [a, b] = [1, 2];
  // console.log(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest);
}

{
  let a, b, c;
  (c = {a, b} = {a: 1, b: 2})
  console.log(a, b);
  console.log(c);
}

{
  let a, b, c, rest;
  [a, b, c] = [1, 2]; //undefined
  [a, b, c = 3] =[1, 2] //3
  [a, b, c = 3] = [1, 2, 5]//5
  console.log(a, b, c);
}
//  解构赋值——变量交换
{
  let a = 1, b = 2;
  [a, b] = [b, a];
  console.log(a, b);
}

{
  function f(){
    return [1, 2]
  }

  let a, b;
  [a, b] = f();
  console.log(a, b);
}
//  选择性接收某些变量
{
  function f(){
    return [1, 2, 3, 4, 5]
  }
  let a, b, c
  [a, , , b] = f()
  console.log(a, b);
}

{
  function f(){
    return [1, 2, 3, 4, 5]
  }
  let a, b, c
  [a, ... b] = f()
  console.log(a, b);
}


// 对象解构赋值

{
  let o = {p:42, q:true}
  let {p, q} = o
  console.log(p, q);
}
{
  let {a = 10, b = 5} = {a:3}
  console.log(a, b);
}
// 对象解构赋值常用场景
{
  let metaData = {
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title: esTitle, test:[{title:cnTitle}]} = metaData
  console.log(esTitle, cnTitle );
}

```

### 正则表达式

```javascript
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

```

### 字符串
```javascript
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

```
### 数值扩展
