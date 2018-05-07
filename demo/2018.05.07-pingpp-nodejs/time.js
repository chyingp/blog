/**
 * 将Date实例子格式化成字符串，比如 2017年10月1日 10时10分1秒 => '2017-10-01 10:10:01'
 * @param {Date} date Date实例
 * @returns {String} 比如'2017-10-01 10:10:01'
 */
var dateTimeToParam = function(date){
  var arr = [
      date.getFullYear(), date.getMonth()+1, date.getDate(), 
      date.getHours(), date.getMinutes(), date.getSeconds()
  ].map(function(value){
      return value >= 10 ? value : '0' + value;
  });

  return arr.slice(0, 3).join('-') + ' ' + arr.slice(3).join(':');
};

/**
* 返回格式化后的时间字符串
* @param {String} YYMMDDhhmmss 时间字符串, 比如 20160401103001 (2016年4月1日 10点30分1秒)
* @param {Object} options 
* @returns {string} 格式化后的时间, 比如 20160401103001, 格式化后为 2016-04-01 10:30:01
*/
var dateTimeToString = function(YYMMDDhhmmss){
  var ret = YYMMDDhhmmss.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6');
  return ret;
};

/**
* 返回格式化后的Date字符串
* 
* @example
*  let date = new Date(2018, 3, 13, 14, 30, 25);
*  getFormattedDateString('%Y-%M-%D %h:%m:%s', date) === '2018-04-13 14:04:13'
*  getFormattedDateString('%Y-%M-%D', date) === '2018-04-13'
*  getFormattedDateString('%h:%m:%s', date) === '14:04:13'
* 
* @param {String} tmpString 模板字符串，年、月、日、时、分、秒的占位符分别为：%Y、%M、%D、%h、%m、%s
* @param {Date} date Date实例
* @returns 格式化后的字符串，比如 '2018-04-13 14:04:13'
*/
var getFormattedDateString = function (tmpString, date) {
  let map = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      hour: date.getHours(),
      minite: date.getMinutes(),
      second: date.getSeconds(),
  };
  // 1 => '01', 11 => '11'
  Object.keys(map).forEach(key => {
      map[key] = String(map[key]).padStart(2, 0);
  });

  return tmpString.replace('%Y', map.year)
                  .replace('%M', map.month)
                  .replace('%D', map.date)
                  .replace('%h', map.hour)
                  .replace('%m', map.minite)
                  .replace('%s', map.second);
}

exports.fmtDate = dateTimeToParam;
exports.dateTimeToString = dateTimeToString;
exports.getFormattedDateString = getFormattedDateString;