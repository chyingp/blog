// 二分查找，O(logn)
function binarySearch (arr, element, leftIndex, rightIndex) {
  
  let len = arr.length;
  
  if (typeof leftIndex === 'undefined') leftIndex = 0;
  if (typeof rightIndex === 'undefined') rightIndex = len - 1;

  if (leftIndex > rightIndex) return -1;

  let midIndex =  Math.floor( (leftIndex + rightIndex) / 2 ); // 中间元素索引
  let midElement = arr[midIndex]; // 中间元素

  if (midElement === element) return midIndex;
  
  if (element > midElement) {
    return binarySearch(arr, element, midIndex + 1, rightIndex);
  } else {
    return binarySearch(arr, element, leftIndex, midIndex - 1);
  }
}

module.exports = binarySearch;

let arr = [1, 2, 3, 4];
console.log( binarySearch(arr, 5) ); // -1
console.log( binarySearch(arr, 1) ); // 0
console.log( binarySearch(arr, 2) ); // 1
console.log( binarySearch(arr, 3) ); // 2
console.log( binarySearch(arr, 4) ); // 3
