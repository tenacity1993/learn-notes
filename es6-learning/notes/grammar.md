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
