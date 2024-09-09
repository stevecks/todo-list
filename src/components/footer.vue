<script setup>
import Container from './container.vue'
</script>
<template>
  <div class="container">
    <footer></footer>
  </div>
</template>
<style scoped lang="scss">
@import '../scss/mixins';

.container {
  background-color: #ffffff;
  @include tablet {
    background-color: #eaeaea;
  }
}

footer {
  height: 144px;
  width: 100%;
  border-radius: 48px 48px 0 0;
  background-color: #bbb8b6;
  @include tablet {
    height: 120px;
  }
  @include phone {
    height: 80px;
  }
}
</style>
