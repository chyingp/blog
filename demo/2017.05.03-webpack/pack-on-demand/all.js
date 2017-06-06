import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.component('my-app', {
    template: '<mt-header fixed title="全量打包">hello</mt-header>'
});

new Vue({
	el: '#app'
});