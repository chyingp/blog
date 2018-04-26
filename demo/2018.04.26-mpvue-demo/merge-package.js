const mpPackage = require('../ithome-lite-master/package.json');
const webPackage = require('../ithome-lite-web/package.json');

function merge (pre, next) {
  let ret = {};

  for (let key in pre) {
    ret[key] = pre[key];
  }

  for (let key in next) {
    ret[key] = next[key];
  }

  return ret;
}

let dependencies = merge(mpPackage.dependencies, webPackage.dependencies);
let devDependencies = merge(mpPackage.devDependencies, webPackage.devDependencies);

console.log( JSON.stringify(dependencies, null, 2) );
console.log( JSON.stringify(devDependencies, null, 2) );
