function fullPer (arr, firstIndex, lastIndex) {
  if (lastIndex - firstIndex <=1) {
    return [
      [arr[firstIndex], arr[lastIndex]],
      [arr[lastIndex], arr[firstIndex]]
    ];
  }
  return insertChar1(arr[firstIndex], fullPer(arr, firstIndex + 1, lastIndex));
}

function insertChar1 (charToInsert, arr) {
  let length = arr.length;
  let retArr = [];
  
  for (let i = 0; i < length; i++) {
    retArr = [...retArr, ...insertChar2(charToInsert, arr[i])];
  }

  return retArr;
}

function insertChar2 (charToInsert, arr) {
  let length = arr.length;
  let tempArr;
  let retArr = [];
  
  for (let i = 0; i <= length; i++) {
    tempArr = [...arr];
    tempArr.splice(i, 0, charToInsert);
    retArr.push(tempArr);
  }

  return retArr;
}

function main () {
  let str = 'abcd';
  let arr = str.split('');

  let sets = fullPer(arr, 0, arr.length - 1);
  console.log(sets);
}

main();