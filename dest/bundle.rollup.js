(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(this, function () { 'use strict';

  /**
   * 将输入的任意对象转换成 Date，如果装换失败将返回当前时间
   * @param  {any} datetime 需要被格式化的时间
   * @return {Date}         转换好的 Date
   */
  function getDateObject(datetime) {
    var t = datetime instanceof Date ? datetime : new Date(datetime);
    if (!t.getDate()) {
      t = new Date();
    }
    return t;
  }

  /**
   * 格式化时间
   * @param  {Date}   datetime  需要被格式化的时间
   * @param  {string} formatStr 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
   * @return {string}           格式化后的时间字符串
   */
  function format(datetime, formatStr) {
    var t = getDateObject(datetime);
    var hours = undefined,
        o = undefined,
        i = 0;
    formatStr = formatStr || 'YYYY-MM-DD HH:mm:ss';
    hours = t.getHours();
    o = [['M+', t.getMonth() + 1], ['D+', t.getDate()],
    // H 24小时制
    ['H+', hours],
    // h 12小时制
    ['h+', hours > 12 ? hours - 12 : hours], ['m+', t.getMinutes()], ['s+', t.getSeconds()]];
    // 替换 Y
    if (/(Y+)/.test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    // 替换 M, D, H, h, m, s
    for (; i < o.length; i++) {
      if (new RegExp('(' + o[i][0] + ')').test(formatStr)) {
        formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length === 1 ? o[i][1] : ('00' + o[i][1]).substr(('' + o[i][1]).length));
      }
    }
    // 替换 a/A 为 am, pm
    return formatStr.replace(/a/ig, hours > 11 ? 'pm' : 'am');
  }

  var getStr = function getStr() {
    return format(new Date());
  };

  var formatedDate = getStr();
  console.log('now is ' + formatedDate);

}));