// 快速排序
// 时间复杂度：平均 O(nlogn)，最坏 O(n^2)

function swap (arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function quickSort (arr, left, right) {  
  
  let length = arr.length;
  
  left = typeof left === 'undefined' ? 0 : left;
  right = typeof right === 'undefined' ? length - 1 : right;  
  
  if (left >= right) {
    return;
  }

  let pivotIndex = partition(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

function partition (arr, left, right) {
  let storeIndex = left;
  let pivotValue = arr[right];
  
  for (let i = left; i <= right - 1; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, storeIndex);
      storeIndex++;
    }
  }

  swap(arr, storeIndex, right);

  return storeIndex;
}

exports.sort = quickSort;