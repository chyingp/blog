// 二叉树查找，O(logn)
function TreeNode (value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function binaryTreeSearch (treeNode, searchValue) {
  
  if (treeNode === null) return -1;

  let current = treeNode;
  let currentValue = current.value;
  
  if (currentValue === searchValue) return current;

  if (searchValue > currentValue) {
    return binaryTreeSearch(current.right, searchValue);
  } else {
    return binaryTreeSearch(current.left, searchValue);
  }
}

exports.binaryTreeSearch = binaryTreeSearch;
exports.TreeNode = TreeNode;