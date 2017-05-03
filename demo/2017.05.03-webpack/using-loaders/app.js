import _ from 'lodash';

function init () {
    let ele = document.getElementById('app');
    ele.innerHTML = _.join(['Hello','webpack'], ' ');
}

init();

// 命令
// ../node_modules/.bin/webpack app.js ./dist/bundle.js