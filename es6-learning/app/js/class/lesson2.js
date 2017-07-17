// 数组解构赋值
{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log('a=',a, 'b=', b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest);
}

{
  let a, b, c;
  c = {a, b} = {a: 1, b: 2}
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
  // console.log(esTitle, cnTitle );
}





//
