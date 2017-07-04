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
