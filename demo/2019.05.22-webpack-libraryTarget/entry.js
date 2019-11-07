export function init () {
	console.log('entry is inited.');
}

// require(['http://127.0.0.1:8000/dist/banner.js'], function (Banner) {
// require([('banner'], function (Banner) {
// 	Banner.init();
// });
// require([/* webpackIgnore: true */'http://127.0.0.1:8000/dist/banner.js']).then(Banner => {
// 	Banner.init();
// });

import(/* webpackIgnore: true */ 'http://127.0.0.1:8000/dist/banner.js').then((res) => {
	Banner.init();
});

console.log('entry is loaded.');