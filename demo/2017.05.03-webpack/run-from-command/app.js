import _ from 'lodash';

function init () {
    let ele = document.getElementById('app');
    ele.innerHTML = _.join(['Hello','webpack'], ' ');
}

init();