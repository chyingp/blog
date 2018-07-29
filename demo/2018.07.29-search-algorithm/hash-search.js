// 哈希查找，O(1)

function hashSearch (hashArr, value) {
  let length = hashArr.length;
  let oriIndex = value % length; // 最初匹配中的索引
  let actualIndex = oriIndex; // 实际匹配的索引

  while (hashArr[actualIndex] !== 0 && hashArr[actualIndex] !== value) {
    actualIndex = (++actualIndex) % length;
    if (actualIndex === oriIndex) {
      actualIndex = -1;
      break;
    }
  }

  return actualIndex;
}

function insertIntoHash (hashArr, value) {
  let length = hashArr.length;
  let oriIndex = value % length; // 最初匹配中的索引
  let actualIndex = oriIndex; // 实际匹配的索引

  while (hashArr[actualIndex] !== 0) {
    actualIndex = (++actualIndex) % length;
    if (actualIndex === oriIndex) {
      actualIndex = -1;
      break;
    }
  }

  if (actualIndex !== -1) { // 有匹配的索引
    hashArr[actualIndex] = value;
  }

  return actualIndex;
}

exports.hashSearch = hashSearch;
exports.insertIntoHash = insertIntoHash;