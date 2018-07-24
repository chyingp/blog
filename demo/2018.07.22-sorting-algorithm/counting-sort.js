// 计数排序

function countingSort (arr) {
  let len = arr.length;
  let maxValue = getMaxValue(arr);
  let tempArrLen = maxValue + 1;
  let tempArr = new Array(tempArrLen);
  let curIndex = 0;
  let curValueCount = 0;

  tempArr.fill(0);

  for (let i = 0; i < len; i++) {
    tempArr[arr[i]]++;
  }

  for (let j =0; j < tempArrLen; j++) {
    curValueCount = tempArr[j];
    if (curValueCount > 0) {
      while (curValueCount > 0) {
        arr[curIndex] = j;
        curIndex++;
        curValueCount--;
      }
    }
  }

  return arr;
}

function getMaxValue (arr) {
  let len = arr.length;
  let maxValue =  arr[0];

  for (let i = 1; i < len; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

// console.log( getMaxValue([2,1,3,4,14]) );

exports.countingSort = countingSort;