// 选择排序
// 时间复杂度：O(n^2)
function sort (arr) {
  let length = arr.length;
  let temp;
  for (let i = 0; i < length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin) {
      temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;     
    }
  }
}

exports.sort = sort;
