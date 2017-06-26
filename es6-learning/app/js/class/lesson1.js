function test(){
  // for(let i = 1; i < 3; i++){
  //   console.log(i);
  // }
  // console.log(i);//  这个i 引用错误 未定义
  // let a = 1
  // let a = 2
  //  使用let  不能重复定义变量
}

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

last();
test();
