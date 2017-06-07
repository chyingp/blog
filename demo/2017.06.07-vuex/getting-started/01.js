var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);

var store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		increment: function (state) {
			state.count++;
		}
	}
});

console.log(store.state.count);  // 1
store.commit('increment');
console.log(store.state.count);  // 2