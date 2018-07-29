// 块搜索

function findBlockIndex (indexArr, searchValue) {
  let length = indexArr.length;
  let ret = -1;
  for (let i = 0; i < length; i++) {
    if (searchValue <= indexArr[i]) {
      ret = i;
      break;
    }
  }
  return ret;
}

function blockSearch (arr, hashArr, searchValue, numPerBlock) {
  let indexOfBlock = findBlockIndex(hashArr, searchValue);
  if (indexOfBlock < 0) return -1;

  let left = numPerBlock * indexOfBlock;
  let right = numPerBlock * (indexOfBlock + 1);
  let ret = -1;

  for (let i = left; i < right; i++) {
    if (arr[i] === searchValue) {
      ret = i;
      break;
    }
  }

  return ret;
}

exports.blockSearch = blockSearch;