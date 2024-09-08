<script setup>
import Container from './container.vue'
</script>
<template>
  <div class="container">
    <footer></footer>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #ffffff;
  @media (max-width: 992px) {
    background-color: #eaeaea;
  }
}

footer {
  height: 144px;
  width: 100%;
  border-radius: 48px 48px 0 0;
  background-color: #bbb8b6;
  @media (max-width: 992px) {
    height: 120px;
  }
  @media (max-width: 640px) {
    height: 80px;
  }
}

.tasks-section {
  width: 100%;
  margin: 0 0 64px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 60px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
