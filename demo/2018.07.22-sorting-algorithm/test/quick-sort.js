let assert = require('assert');
let sort = require('../partition-sort').sort;

describe('Array', function() {
  it('[1, 2, 3, 4] => [1, 2, 3, 4]', function() {    
    let arr = [1, 2, 3, 4];
    let expected = [1, 2, 3, 4];
    sort(arr);
    
    assert.deepEqual(arr, expected);    
  });

  it('[4, 3, 2, 1] => [1, 2, 3, 4]', function() {    
    let arr = [4, 3, 2, 1];
    let expected = [1, 2, 3, 4];
    sort(arr);
    
    assert.deepEqual(arr, expected);    
  });

  it('[2, 3, 1, 4] => [1, 2, 3, 4]', function() {    
    let arr = [2, 3, 1, 4];
    let expected = [1, 2, 3, 4];
    sort(arr);
    
    assert.deepEqual(arr, expected);    
  });
});