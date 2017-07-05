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
