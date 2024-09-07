<script setup>
import Container from './container.vue'
</script>
<template>
  <Container class="container">
    <header>
      <h1>ToDo List Scloud</h1>
    </header>
  </Container>
</template>
<style lang="scss">
header {
  width: 100%;
  margin: 64px 0 48px;
  h1 {
    line-height: 40px;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #333333;
  }
}

.container {
  background-color: #eaeaea;
}
</style>
