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









//
