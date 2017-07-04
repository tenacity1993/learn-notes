{
  let ajax = function(callback){
    console.log('start');
    setTimeout(function(){
      callback && callback.call()
    }, 1000)
  }
  ajax(function(){
    console.log('timeout1');
  })
}
{
  let ajax = function(){
    console.log('start2');
    // resolve：执行下一步操作 reject :中断当前操作
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 1000)
    })
  }
  ajax().then(function(){
    console.log('promise', 'timeout2');
  })
}
{
  let ajax = function(){
    console.log('start3');
    // resolve：执行下一步操作 reject :中断当前操作
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 1000)
    })
  }
  ajax().then(function(){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 2000)
    })
  }).then(function(){
    console.log('timeout3');
  })
}
{
  let ajax = function(num){
    console.log('start4');
    return new Promise(function(resolve, reject){
      if(num > 5){
        resolve()
      } else {
        throw new Error('出错了')
      }
    })
  }
  ajax(6).then(function(){
    console.log('log', 6);
  }).catch(function(err){//  捕获错误
    console.log('catch', err);
  })
}
{
  // 所有图片加载完成再添加到页面
  function loadImg(src){
    return new Promise((resolve, rejec)=>{
      let img = document.createElement('img')
      img.src = src
      img.onload = function(){
        resolve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }
  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img)
    })
  }
  // 把多个promise实例 当作一个promise实例
  Promise.all([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')
  ]).then(showImgs)
}
{
  // 有一个图片加载完成就显示
  function loadImg(src){
    return new Promise((resolve, rejec)=>{
      let img = document.createElement('img')
      img.src = src
      img.onload = function(){
        resolve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }
  function showImgs(img){
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }
  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')
  ]).then(showImgs)
}
