// 顺序查找，O(n)
function sequentialSearch (arr, element) {
  let index = -1;
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === element) {
      index = i;
    }
  }
  return index;
}

module.exports = sequentialSearch;

// let arr = [3, 1, 2, 4];
// console.log( sequentialSearch(arr, 1) );
// console.log( sequentialSearch(arr, 5) );