---
刷题时js的输入问题总结
大部分来自于 http://www.cnblogs.com/floor/p/6667059.html 感谢解决燃眉之急 还有小部分是自己的整理和思考 
目前常见平台还不太支持ES6写法 
推荐js刷题平台 https://www.codewars.com
还有疑惑的问题：
牛客网是有两套编译环境的，v8和node，下面这些可以支持node方式，但是v8方式怎么处理多行的输入问题，还需要再找资料查一下。
---

## 处理单行输入问题
处理单行输入比较简单，通常刷题的网站都会给出说明，按照说明来编程一般不会有问题。下面列举牛客网和赛码网的说明。

### 牛客网
- V8  
```javascript
// 其中readline()只支持单行输入
while(line=readline()){
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}
```
- Node

```javascript
var readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.on('line', function(line){
var tokens = line.split(' ');
console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});
```

### 赛码网
```javascript
var line;
while(line = read_line()){
    line = line.split(' ');
    print(parseInt(line[0]) + parseInt(line[1]));
}

//注意，如果一行超过1024个字符，会被强制分行的
//，因此如果题目明确说明该行超过1024字符，请自行拼接（当然，我们尽量不出这种题目）。
/*
var next = '';
var line;
while(line = read_line()){
    next += line;
}
next中就是超过1024字符的该行字符串。
*/
```
### 牛客网示例

[示例题目地址，可以自行尝试一下](https://www.nowcoder.com/practice/171278d170c64d998ab342b3b40171bb?tpId=40&tqId=21336&tPage=1&rp=1&ru=/ta/kaoyan&qru=/ta/kaoyan/question-ranking)

![反序输出](F:\论文\实习和论文资料\mygit\mygit\exercise\images\反序输出.png)

```javascript
// 通过代码
var readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line', function(line) {
    var res = line.split('').reverse().join('')
    console.log(res)
})
```

补充内容：

> 'line'事件
>
> 每当input流接收到行结束符（\n 、\r、 \r\n）时触发'line'事件，通常发生在用户按下`Enter`键或者`Return`键。监听器函数被调用时会带上一个包含接收那一行输入的字符串。如果不close，则不会停止对输入的监听。

## 处理多行输入问题

### 已知输入行数

`line`事件是每次换行时都会触发（前提是没有close），那么如果在已知行数的情况下，可以将输入push到临时数组中，直到一组数据全部push完成之后再对该数组做处理，到下一组时将该数组清空。

[示例题目](https://www.nowcoder.com/practice/7f436c901a0d450ebdec1168e3e57cc2?tpId=40&tqId=21533&tPage=10&rp=5&ru=%2Fta%2Fkaoyan&qru=%2Fta%2Fkaoyan%2Fquestion-ranking)

![合并符串](F:\论文\实习和论文资料\mygit\mygit\exercise\images\合并符串.png)

```javascript
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var Num = 2
var inputs = []

rl.on('line', function(input) {
    inputs.push(input.trim())
  // 满足一组行数条件之后再进行数据的处理
    if(Num == inputs.length) {  
        var res = []
        var s1 = inputs[0].split('')
        var s2 = inputs[1].split('')
        var len = s1.length
        for (var i = 0; i < len; i++) {
            res.push(s1[i])
            res.push(s2[len - i - 1])
        }
        res = res.join('')
        console.log(res)
        inputs.length = 0
    }
})
```

### 输入行数不确定

这种类型题目大多是第一个输入为数据的组数，然后会输入这几组数据，即为1+n模式。所以每组数据的第一个一定是接下来要获取输入的行数，后面这部分相当于已知行数，只需要在上面的基础上添加获取行数逻辑即可。

[示例题目](https://www.nowcoder.com/practice/2364ff2463984f09904170cf6f67f69a?tpId=40&tqId=21367&tPage=2&rp=1&ru=%2Fta%2Fkaoyan&qru=%2Fta%2Fkaoyan%2Fquestion-ranking)

![中位数](F:\论文\实习和论文资料\mygit\mygit\exercise\images\中位数.png)

```javascript
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var num = 0
var inputs = []
rl.on('line', function(line) {
    if(num == 0) {
      // 这里其实Number也可以，但是这里只需要整数，所以直接用了parserInt
        num = parseInt(line.trim())
    } else {
        inputs.push(line.trim())
        if(num == inputs.length) {
            var res
            inputs.sort(function(a, b) {
                return a - b
            })
            if(num % 2) {
                res = inputs[(num - 1) / 2]
            } else {
              // 这里要注意转化一下  不然会拼接成字符串
                res = Math.floor((parseInt(inputs[num / 2]) + parseInt(inputs[num / 2 - 1]))  / 2)
            }

            console.log(res)
          // 不要忘记清空
            inputs.length = 0
            num = 0
        }
    }
})

```

