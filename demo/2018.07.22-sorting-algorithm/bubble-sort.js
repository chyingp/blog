// 冒泡排序
// 时间复杂度：O(N^2)，大概需要执行 n^2/2次

function sort (arr) {

  let length = arr.length;
  let temp;
  for (let i = 0; i < length - 1; i ++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

exports.sort = sort;
