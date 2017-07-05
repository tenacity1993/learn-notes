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

```javascript
{
  console.log(0b111110111);// 503 用二进制表示输出十进制数
  console.log(0o767);
}
{
  console.log('15', Number.isFinite(15))
  console.log('NaN', Number.isFinite(NaN))
  console.log('1/0', Number.isFinite('true'/0))
  console.log('NaN', Number.isNaN(NaN))
  console.log('0', Number.isNaN(0))
}

{
  // 参数必须是数字
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.3', Number.isInteger('25.3'));
  console.log('25string', Number.isInteger('25'));
}

{
  // 常量  表示数值的上限 和 下限
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
}
{
  console.log(4.1, Math.trunc(4.1));
  console.log(4.9, Math.trunc(4.9));
}
{
  console.log('-5', Math.sign(-5));
  console.log('0', Math.sign(0));
  console.log('5', Math.sign(5));
  console.log('50', Math.sign('50')); // 1
  console.log('foo', Math.sign('foo')); //NaN
}

{
  console.log('-1', Math.cbrt(-1));
  console.log('8', Math.cbrt(8));
}

```
### 数组扩展

```javascript
{
  // 将一组数字变量转换成数组
  let arr = Array.of(3, 4, 7, 9, 11)
  console.log('arr=', arr);
 // 不传参数返回的是空数组
  let empty = Array.of()
  console.log('empty=', empty);
}
{
  let p = document.querySelectorAll('p')
  let pArr = Array.from(p);//  将集合转换成数组
  pArr.forEach(function(item){
    console.log(item.textContent);
  })
//  相当于map用法
  console.log(Array.from([1, 3, 5], function(item){
    return item * 2
  }));
}
{
  // 填充数组
  console.log('fill-7', [1, 'a', undefined].fill(7));
                             // 替换的元素  起始位置 终止位置(之前)
  console.log('fill, pos', ['a', 'b', 'c', 'd'].fill(7, 1, 3));
}

{
  // 存在兼容问题
  for(let index of ['1', 'c', 'ks'].keys()){
    console.log('keys', index);
  }
  // 存在兼容问题
  for(let value of ['1', 'c', 'ks'].values()){
    console.log('values', value);
  }
  // 不存在兼容问题
  for(let [index, value] of ['1', 'c', 'ks'].entries()){
    console.log('index, values',index, value);
  }
}

{
  // 从哪个位置开始替换  开始读取数据  截止
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
  // 找到满足条件的第一个数组成员，返回该成员
  console.log([1, 2, 3, 4, 5, 6].find(function(item){
    return item > 3
  }));
  console.log([1, 2, 3, 4, 5, 6].findIndex(function(item){
    return item > 3
  }));
  console.log([1, 2, 3, 4, 5, 6].find((n) => n > 4));
}
{
  // 数组中是否包含该参数  返回值为布尔值
  console.log('number', [1, 2, NaN].includes(1));
  //ES 5 中NAN 自身互不相等  但是es6中 可以判断是否包含NaN
  console.log('number', [1, 2, NaN].includes(NaN));
}

```

### 函数扩展
```javascript
{
  // 已经有默认值的参数后面的参数必须都有默认值
  function test(x, y = 'world'){
    console.log('默认值', x, y);
  }
  test('hello')
  test('hello', 'shanghai')
}
{
  let x = 'test'
  function test2(x, y=x){
    console.log('作用域',x, y); // kill kill
  }
  test2('kill')
  test2();// undefined undefined
  function test23(c, y = x){
    console.log(c, y);
  }
  test23('kill')
}
{
  function test3(...arg){
    for(let v of arg){
      console.log('rest', v);
    }
  }
  test3(1, 2, 3, 4, 'a')
}
{
  console.log(...[1, 2, 4]);
  console.log('a', ...[1, 2, 4]);
}
{
  let arrow = v => v*2
  let arrow2 = () => 5
  console.log('arrow', arrow(3));
  console.log('arrow2', arrow2());
}
{
  // 尾调用  提升性能  嵌套函数 建议使用尾调用
  function tail(x){
    console.log('tail', x);
  }
  function fx(x){
    return tail(x);
  }

  fx(123)
}
```
### 对象扩展
```javascript
{
// 简洁表示法
  let o = 1
  let k = 2
  let es5 = {
    o: o,
    k: k
  }
  let es6 = {
    o, k
  }
  console.log('es5', es5);
  console.log('es6', es6);
  let es5_method = {
    hello: function(){
      console.log('hello');
    }
  }
  let es6_method = {
    hello(){
      console.log('hello');
    }
  }
  console.log(es5_method.hello(), es6_method.hello());
}
{
  // 属性表达式
  let a = 'b'
  let es5_obj = {
    a: 'c',
    b: 'c'
  }
  let es6_obj = {
    [a]:'c'  //  这里属性可以是变量
  }
  console.log(es5_obj, es6_obj);
}
{
  // 新增api
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
// 引用类型
  console.log('数组', Object.is([], []), [] === []);
// 浅拷贝 自身对象属性， 不会拷贝继承属性 不可枚举属性
  console.log('拷贝', Object.assign({a:'a'}, {b:'b'}));

  let test = {k:123, o:456}
  for(let [key, value] of Object.entries(test)){
    console.log([key, value]);
  }
}

{
  // 扩展运算符 babel 暂时不支持
  // let {a, b, ...c} = {a:'test', b:'kill', c:'ddd', d:'ccc'}

}

```
### Symbol
```javascript
{
  //声明
  // a1 a2 永远不可能相等
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2);
  // 先检查该key值是否全局注册过
  let a3 = Symbol.for('a3');
  let a4 = Symbol.for('a3')
  console.log(a3 === a4);
}
{
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]:'123',
    'abc':345,
    'c':456
  }
  console.log(obj);
  // 通过 forin、letof 拿不到属性
  //{abc: 345, c: 456, Symbol(abc): "123"}

  for(let [key, value] of Object.entries(obj)){
    console.log('let of', [key, value]);
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  })

  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownKeys', item, obj[item]);
  })
}

```
### Map Set WeakMap WeakSet Object array
```javascript
{
  let list = new Set()
  list.add(5)
  list.add(7)
  // 注意这里长度不是length 而是size
  console.log('size', list.size);
}

{
  let arr = [1, 2, 3, 4, 5]
  // 对数组进行了转化
  let list = new Set(arr);
  console.log('size', list.size);
}
{
  let list = new Set()
  list.add(1)
  list.add(2)
  // 不报错  只是未生效
  list.add(2)
  console.log('list', list);

  let arr = [1, 2, 3, 1, '2']
  let list2 = new Set(arr)
  // 不会做数据类型的转换
  console.log('unique', list2);
}
{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  console.log('has', list.has('add'));
  console.log('delete', list.delete('add'), list);
  list.clear();
  console.log('list', list);
}
{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  for(let key of list.keys()){
    console.log('keys', key);
  }
  for(let value of list.values()){
    console.log('values', value);
  }
  for(let value of list){
    console.log('values', value);
  }
  for(let [key,value] of list.entries()){
    console.log('entries', key, value);
  }
  list.forEach(function(item){
    console.log(item);
  })
}
{
  // WeakSet 元素只能是对象
  // 对象都是弱引用  不会挂钩垃圾回收机制
  // 没有clear方法  没有set属性  不能遍历
  let weakList = new WeakSet()
  let arg = {}
  weakList.add(arg)
  // weakList.add(2) // 报错
  console.log('weakList', weakList);
}
{
  let map = new Map()
  let arr = ['123']
  // 添加元素 使用set方法 不是add
  // key 可以是任意数据类型
  map.set(arr, 456)
  console.log('map', map, map.get(arr));
}
{
  let map = new Map([['a', 123], ['b', 456]])
  console.log('map args', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}

{
  let weakmap = new WeakMap()
  let o = {}
  weakmap.set(o, 123)
  console.log(weakmap.get(o));
}
{
  // 数据结构的横向对比
  let map = new Map()
  let array = [];
  // 增
  map.set('t', 1)
  array.push({t: 1})
  console.info('map-array', map, array)
  // 查
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)// 若存在，返回该值
  console.info('map-array', map_exist, array_exist)
  // 改
  map.set('t', 2)
  array.forEach(item => item.t ? item.t = 2 : '')
  console.info('map-array-modify', map, array)
  // 删除
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.info('map-array-empty', map, array)
}
{
  // set 和 array 对比
  let set = new Set()
  let array = []
  // 增
  set.add({t: 1})
  array.push({t: 1})
  console.info('set-array', set, array)
  // 查
  // 下面这行 一定返回false
  let set_exist = set.has({t: 1})
  let o = {
    a:123
  }
  set.add(o)
  let set_exist1 = set.has(o)
  let array_exist = array.find(item=>item.t)
  console.info('set-array', set_exist, array_exist)
  // 改
  set.forEach(item => item.t ? item.t = 2 : '')
  array.forEach(item => item.t? item.t = 2: '')
  console.log('set-array-modify', set, array);
  // 删
  set.forEach(item=>item.t?set.delete(item):'')
  let index = array.findIndex(item=>item.t)
  array.splice(index, 1)
  console.log('set-array-empty', set, array);
}
{
  // Map Set Object
  let item = {t:1}
  let map = new Map()
  let set = new Set()
  let obj = {}

// 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1
  console.log('map-set-obj', obj, map, set);
  //  查
  console.log({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  });
  // 改
  map.set('t', 2)
  item.t = 2 // 存储的是引用
  obj['t'] = 2
  console.log('map-set-obj', obj, map, set);

// 删除
  map.delete('t')
  set.delete(item)
  delete obj['t']
  console.log('map-set-obj', obj, map, set);
}

```

### Proxy Reflect
```javascript
{
  let obj = {
    time:'2017-03-11',
    name:'net',
    _r:123
  }
  let monitor = new Proxy(obj,{
// 拦截对象属性的读取
    get(target, key){
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value){
      if(key === 'name'){
        return target[key] = value
      } else {
        return target[key]
      }
    },
    // 拦截key in object 操作
    has(target, key){
      if(key === 'name'){
        return target[key]
      } else {
        return false
      }
    },
    // 拦截删除操作
    // deleteProperty 必须返回一个 Boolean 类型的值，表示了该属性是否被成功删除。
    deleteProperty(target, key){
      if(key.indexOf('_') > -1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },
    // 拦截 Object.keys,Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }

  })
  console.log('get', monitor.time);
  monitor.time = '2018'
  console.log('set', monitor.time);
  monitor.name = 'abc'
  console.log('set', monitor.time, monitor);
  console.log('has', 'name' in monitor, 'time' in monitor);

  // delete monitor.time;
  // console.log('delete', monitor);
  //
  // delete monitor._r;
  // console.log('delete', monitor);
  console.log('ownKeys', Object.keys(monitor));
 }
 // 不需要new  直接使用
 {
   let obj = {
     time:'2017-03-11',
     name:'net',
     _r:123
   }
   console.log('Reflect', Reflect.get(obj, 'time'));
   Reflect.set(obj, 'name', '123')
   console.log(obj);
   console.log('has', Reflect.has(obj, 'name'));
 }
 {
   function validator(target, validator){
     return new Proxy(target, {
       _validator: validator,
       set(target, key, value, proxy){
         if(target.hasOwnProperty(key)){
           let va = this._validator[key]
           if(!!va(value)){
             return Reflect.set(target, key, value, proxy)
           } else {
             throw Error(`不能设置${key}到${value}`)
           }
         } else {
           throw Error(`${key} 不存在`)
         }
       }
     })
   }
   const personValidators = {
     name(val){
       return typeof val === 'string'
     },
     age(val){
       return typeof val === 'number' && val > 18
     },
     mobile(val){
       return typeof val === 'string' || typeof val === 'number'
     }
   }
   class Person{
     constructor(name, age){
       this.name = name
       this.age = age
       this.mobile = '1111'
       return validator(this, personValidators)
     }
   }
   const person = new Person('lilei', 30)
   console.log(person);
  //  person.name = 48
  person.name = 'han meimei'
  person.mobile = 123456
   console.log(person);
 }

```

### 类和对象
```javascript
{
  // 基本定义和生成实例
  class Parent{
    constructor(name = 'mukewang'){
      this.name = name
    }
  }
  let v_parent = new Parent('v')
  console.log('构造函数实例', v_parent);
}
{
  //继承
  class Parent{
    constructor(name = 'mukewang'){
      this.name = name
    }
  }
  class Child extends Parent{

  }
  console.log('继承', new Child());
}

{
  //继承传递参数
  class Parent{
    constructor(name = 'mukewang'){
      this.name = name
    }
  }
  class Child extends Parent{
    constructor(name = 'child'){
      super(name);// 子类向父类传递参数  要放在第一行
      this.type = 'child' //调用this 要放在super之后
    }
  }
  console.log('继承', new Child('hello'));
}

{
  // getter  setter
  class Parent{
    constructor(name = 'mukewang'){
      this.name = name
    }
    // 这里是属性  不是函数
    get longName(){
      return 'mk' + this.name
    }
    set longName(value){
      this.name = value
    }
  }
  let v = new Parent()
  console.log('getter', v.longName);
  v.longName = 'hello'
  console.log('setter', v.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name = 'mukewang'){
      this.name = name
    }
    // 静态方法通过类调用 而不是通过实例调用
    static tell(){
      console.log('tell');
    }
  }
  Parent.tell()
}
{
  // 静态属性
  class Parent{
    constructor(name = 'mukewang'){
      this.name = name
    }
    // 静态方法通过类调用 而不是通过实例调用
    static tell(){
      console.log('tell');
    }
  }
  Parent.type = 'test'
  console.log('静态属性', Parent.type);
}

```

### promise
```javascript
{
  let ajax = function(callback){
    console.log('start');
    setTimeout(function(){
      callback && callback.call()
    }, 1000)
  }
  ajax(function(){
    console.log('timeout1');
  })
}
{
  let ajax = function(){
    console.log('start2');
    // resolve：执行下一步操作 reject :中断当前操作
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 1000)
    })
  }
  ajax().then(function(){
    console.log('promise', 'timeout2');
  })
}
{``
  let ajax = function(){
    console.log('start3');
    // resolve：执行下一步操作 reject :中断当前操作
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 1000)
    })
  }
  ajax().then(function(){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 2000)
    })
  }).then(function(){
    console.log('timeout3');
  })
}
{
  let ajax = function(num){
    console.log('start4');
    return new Promise(function(resolve, reject){
      if(num > 5){
        resolve()
      } else {
        throw new Error('出错了')
      }
    })
  }
  ajax(6).then(function(){
    console.log('log', 6);
  }).catch(function(err){//  捕获错误
    console.log('catch', err);
  })
}
{
  // 所有图片加载完成再添加到页面
  function loadImg(src){
    return new Promise((resolve, rejec)=>{
      let img = document.createElement('img')
      img.src = src
      img.onload = function(){
        resolve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }
  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img)
    })
  }
  // 把多个promise实例 当作一个promise实例
  Promise.all([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')
  ]).then(showImgs)
}
{
  // 有一个图片加载完成就显示
  function loadImg(src){
    return new Promise((resolve, rejec)=>{
      let img = document.createElement('img')
      img.src = src
      img.onload = function(){
        resolve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }
  function showImgs(img){
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }
  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')
  ]).then(showImgs)
}

```

### iterator
```javascript
{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}
{
  let obj = {
    start:[1, 3, 2],
    end:[7, 9, 8],
    [Symbol.iterator](){
      let self = this
      let index = 0
      let arr = self.start.concat(self.end)
      let len = arr.length
      // 返回是一个对象  要有next方法
      return {
        next(){
          if(index < len){
            return{
              value:arr[index++],
              done:false
            }
          } else {
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  for(let key of obj){
    console.log(key);
  }
}
{
  let arr = ['hello', 'world']
  for(let value of arr){
    console.log('value', value);
  }
}

```
### generator
- 异步编程的解决方案
```javascript
{
  // generator 基本定义
  let tell = function* (){
    yield 'a'
    yield 'b'
    return 'c'
  }
  // 通过next方式  不断执行函数体中的几个阶段
  let k = tell()
  console.log(k.next());//执行第一个yield
  console.log(k.next());// 执行第二个
  console.log(k.next());
  console.log(k.next());
}
{
  let obj = {}
  obj[Symbol.iterator] = function* (){
    yield 1
    yield 2
    yield 3
  }
  for(let value of obj){
    console.log('value', value);
  }
}
{
  let state = function* (){
    while(1){
      yield 'A'
      yield 'B'
      yield 'C'
    }
  }
  let status = state()
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}
{
  // 语法糖
  // let state = async function (){
  //   while(1){
  //     await 'A';
  //     await 'B';
  //     await 'C';
  //   }
  // }
  // let status = state()
  // console.log(status.next());
  // console.log(status.next());
  // console.log(status.next());
  // console.log(status.next());
}
{
  let draw = function(count){
    // 具体抽奖逻辑
    console.log(`剩余${count}次`);
  }
  let residue = function* (count){
    while(count > 0) {
      count--
      yield draw(count)
    }
  }
  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener('click', function(){
    star.next()
  }, false)
}

{
  // 长轮询
  let ajax = function* (){
    yield new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve({code: 0})
      }, 200)
    })
  }
  let pull = function(){
    let generator= ajax()
    let step = generator.next()
    step.value.then(function(d){
      if(d.code!=0){
        setTimeout(function(){
          console.log('wait');
          pull()
        }, 1000)
      } else{
        console.log(d);
      }
    })
  }
  pull()
}

```

### Decorator
```javascript
{
  let readonly = function(target, name, descriptor){
    descriptor.writable = false
    return descriptor
  }

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }
  let test = new Test()
  // 不允许只读属性被赋值
  // test.time = function(){
  //   console.log('rest time');
  // }
  console.log(test.time());
}
{
  let typename = function(target, name, descriptor){
    target.myname = 'hello'
  }
//  写在类定义的外面
  @typename
  class Test{

  }
  console.log('类修饰符', Test.myname);
  // 第三方修饰器js库  core-decorators npm install core-decorators
}
{
  let log = (type) => {
    return function(target, name, descriptor){
      let src_method = descriptor.value
      descriptor.value = (...arg)=>{
        src_method.apply(target, arg)
        console.log(`log ${type}`);
      }
    }
  }
  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }
    @log('click')
    click(){
      console.info('ad is click')
    }
  }
  let ad = new AD()
  ad.show()
  ad.click()
}

```
### 模块化
```javascript

```
