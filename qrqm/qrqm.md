### rem 获取
```javascript
(function() {
  // 确定用户实际使用的浏览器  ua存储用户代理字符串
    var ua = window.navigator.userAgent;
  // 返回文档的根节点
    var docEl = document.documentElement;
    var html = document.querySelector('html');
    var isAndorid = /Android/i.test(ua);
    // 当前设备物理像素与css像素的比例  也叫像素大小比率
    var dpr = window.devicePixelRatio || 1;

    var rem = docEl.clientWidth / 10;

    // 设置 rem 基准值
    html.style.fontSize = rem + 'px';

    // Nexus 5 上 rem 值不准，
    // 如：设置100px，getComputedStyle 中的值却为 85px，导致页面错乱
    // 这时需要检查设置的值和计算后的值是否一样，
    // 不一样的话重新设置正确的值
    var getCPTStyle = window.getComputedStyle;
    // 十进制转化
    var fontSize = parseFloat(html.style.fontSize, 10);
    var computedFontSize = parseFloat(getCPTStyle(html)['font-size'], 10);
    if (getCPTStyle && Math.abs(fontSize - computedFontSize) >= 1) {
        html.style.fontSize = fontSize * (fontSize / computedFontSize) + 'px';
    }

    // 设置 data-dpr 属性，留作的 css hack 之用
    html.setAttribute('data-dpr', dpr);

    // 安卓平台额外加上标记类
    if (isAndorid) {
        html.setAttribute('data-platform', 'android');
    }
})();
```
