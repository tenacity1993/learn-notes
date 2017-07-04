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
