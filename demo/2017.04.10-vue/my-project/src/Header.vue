<template>
  <div class="header">
    <h1>{{ title }}</h1>   
  </div>
</template>

<script>
export default {
  name: 'my-header',
  props: ['title']
}
</script>

<style>
.header { color: green;  } 
</style>
