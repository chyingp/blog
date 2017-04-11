<template>
  <div id="app">
    <my-header title="单文件组件"></my-header>
    <my-body :msg="msg"></my-body>
    <my-footer></my-footer>  
  </div>
</template>

<script>
import header from './Header.vue'
import footer from './Footer.vue'
import body from './Body.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'my-header': header,
    'my-footer': footer,
    'my-body': body
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
