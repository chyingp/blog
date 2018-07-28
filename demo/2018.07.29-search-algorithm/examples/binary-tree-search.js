let {TreeNode, binaryTreeSearch} = require('../binary-tree-search');

let deepthThreeNode01 = new TreeNode(5, null, null);
let deepthThreeNode02 = new TreeNode(9, null, null);
let deepthThreeNode03 = new TreeNode(11, null, null);
let deepthThreeNode04 = new TreeNode(15, null, null);

let deepthTwoNode01 = new TreeNode(8, deepthThreeNode01, deepthThreeNode02);
let deepthTwoNode02 = new TreeNode(12, deepthThreeNode03, deepthThreeNode04);

let rootNode = new TreeNode(10, deepthTwoNode01, deepthTwoNode02);

/*
TreeNode {
  value: 10,
  left:
   TreeNode {
     value: 8,
     left: TreeNode { value: 5, left: null, right: null },
     right: TreeNode { value: 9, left: null, right: null } },
  right:
   TreeNode {
     value: 12,
     left: TreeNode { value: 11, left: null, right: null },
     right: TreeNode { value: 15, left: null, right: null } } }
*/

function searchAndLog (searchValue) {
  let treeNode = binaryTreeSearch(rootNode, searchValue);
  console.log(`search value: ${searchValue}, matched value is ${treeNode === -1 ? null : treeNode.value}, result is: ${JSON.stringify(treeNode)}`);
}

searchAndLog(10);
searchAndLog(8);
searchAndLog(12);
searchAndLog(5);
searchAndLog(9);
searchAndLog(11);
searchAndLog(15);
searchAndLog(16);
searchAndLog(4);

/*
search value: 10, matched value is 10, result is: {"value":10,"left":{"value":8,"left":{"value":5,"left":null,"right":null},"right":{"value":9,"left":null,"right":null}},"right":{"value":12,"left":{"value":11,"left":null,"right":null},"right":{"value":15,"left":null,"right":null}}}
search value: 8, matched value is 8, result is: {"value":8,"left":{"value":5,"left":null,"right":null},"right":{"value":9,"left":null,"right":null}}
search value: 12, matched value is 12, result is: {"value":12,"left":{"value":11,"left":null,"right":null},"right":{"value":15,"left":null,"right":null}}
search value: 5, matched value is 5, result is: {"value":5,"left":null,"right":null}
search value: 9, matched value is 9, result is: {"value":9,"left":null,"right":null}
search value: 11, matched value is 11, result is: {"value":11,"left":null,"right":null}
search value: 15, matched value is 15, result is: {"value":15,"left":null,"right":null}
search value: 16, matched value is null, result is: -1
search value: 4, matched value is null, result is: -1
*/