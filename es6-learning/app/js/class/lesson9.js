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
