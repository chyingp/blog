var Vuex = require('vuex')
var Vue = require('vue')

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

store.commit('increment')
store.commit('increment')
store.commit('increment')

console.log(store.state.count)