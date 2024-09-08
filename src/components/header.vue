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
  @media (max-width: 992px) {
    margin: 48px 0 40px;
  }
  @media (max-width: 640px) {
    margin: 32px 0;
  }
  h1 {
    line-height: 40px;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #333333;

    @media (max-width: 992px) {
      line-height: 32px;
      font-size: 24px;
    }
    @media (max-width: 640px) {
      line-height: 28px;
      font-size: 20px;
    }
  }
}

.container {
  background-color: #eaeaea;
}
</style>
