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
@import '../scss/mixins';

.container {
  background-color: #eaeaea;
}

header {
  width: 100%;
  margin: 64px 0 48px;

  @include tablet {
    margin: 48px 0 40px;
  }

  @include phone {
    margin: 32px 0;
  }

  h1 {
    line-height: 40px;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #333333;

    @include tablet {
      line-height: 32px;
      font-size: 24px;
    }

    @include phone {
      line-height: 28px;
      font-size: 20px;
    }
  }
}
</style>
