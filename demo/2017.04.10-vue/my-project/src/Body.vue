<template>
  <p class="body">{{ msg }}</p>
</template>

<script>
export default {
  name: 'my-body',
  props: ['msg']
}
</script>

<style>
.body { font-size: 16px; color: blue;  }
</style>
