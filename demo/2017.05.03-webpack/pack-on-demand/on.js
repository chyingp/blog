import Vue from 'vue'
import { Header } from 'mint-ui';
// import App from './App.vue'

Vue.component(Header.name, Header);

Vue.component('my-app', {
    template: '<mt-header fixed title="按需打包"></mt-header>'
});
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */

new Vue({
  el: '#app'
});