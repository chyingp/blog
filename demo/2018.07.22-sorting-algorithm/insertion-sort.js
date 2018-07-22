// 插入排序
// 时间复杂度：
// 1、最坏情况：完全顺序，O(n^2) => 1 + 2 + 3 + ... + (n-1)
// 2、最好情况：完全逆序，O(n) => 1 + 1 + ... + (1)
function sort (arr) {
  let length = arr.length;
  let temp;

  for (let i = 1; i < length; i++) {
    let curItem = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (curItem >= arr[j]) {
        break;
      }

      temp = arr[j];
      arr[j] = curItem;
      arr[j + 1] = temp;
    }
  }
}

exports.sort = sort;