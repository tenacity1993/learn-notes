// export let A = 123
//
// export function test(){
//   console.log('test');
// }
//
// export class hello{
//   test(){
//     console.log('class');
//   }
// }
//

let A = 123
let test = function(){
  console.log('test');
}

class hello{
  test(){
    console.log('class');
  }
}


export default{ //default 表示不指定名称
  A,
  test,
  hello
}
