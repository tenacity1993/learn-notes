{
  console.log(0b111110111);// 503 用二进制表示输出十进制数
  console.log(0o767);
}
{
  console.log('15', Number.isFinite(15))
  console.log('NaN', Number.isFinite(NaN))
  console.log('1/0', Number.isFinite('true'/0))
  console.log('NaN', Number.isNaN(NaN))
  console.log('0', Number.isNaN(0))
}

{
  // 参数必须是数字
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.3', Number.isInteger('25.3'));
  console.log('25string', Number.isInteger('25'));
}

{
  // 常量  表示数值的上限 和 下限
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
}
{
  console.log(4.1, Math.trunc(4.1));
  console.log(4.9, Math.trunc(4.9));
}
{
  console.log('-5', Math.sign(-5));
  console.log('0', Math.sign(0));
  console.log('5', Math.sign(5));
  console.log('50', Math.sign('50')); // 1
  console.log('foo', Math.sign('foo')); //NaN
}

{
  console.log('-1', Math.cbrt(-1));
  console.log('8', Math.cbrt(8));
}
