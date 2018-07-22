// 冒泡排序

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

// let oriArr = [4, 2, 3, 1];
// sort(oriArr);
// console.log(oriArr);
