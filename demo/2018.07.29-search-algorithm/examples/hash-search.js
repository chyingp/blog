let {hashSearch, insertIntoHash} = require('../hash-search');

function insertAndLog (arr, value) {
  let index = insertIntoHash(arr, value);
  console.log(`[insert] value => ${value}, index => ${index}`);
}

function searchAndLog (arr, value) {
  let index = hashSearch(arr, value);
  console.log(`[search] value => ${value}, index => ${index}`);
}

let hashArr = new Array(1000).fill(0);
insertAndLog(hashArr, 6);
insertAndLog(hashArr, 88);
insertAndLog(hashArr, 99);
insertAndLog(hashArr, 99); // 一次冲突
insertAndLog(hashArr, 99); // 连续两次冲突

searchAndLog(hashArr, 6);
searchAndLog(hashArr, 88);
searchAndLog(hashArr, 99);
