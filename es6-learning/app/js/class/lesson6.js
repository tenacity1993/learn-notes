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
  console.log('p', typeof p);
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
  // 找不到 返回-1
  console.log([1, 2, 3, 4, 5, 6].findIndex(function(item){
    return item > 3
  }));
  console.log([1, 2, 3, 4, 5, 6].find((n) => n > 4));
}
{
  // 数组中是否包含该参数  返回值为布尔值
  console.log('number', [1, 2, NaN].includes(1));
  //ES 5 中NAN 自身互不相等  但是es6中 可以判断是否包含NaN
  // console.log('number', [1, 2, NaN].includes(NaN));
}
