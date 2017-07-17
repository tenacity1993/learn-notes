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
  // 数据结构的横向对比.........../
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
