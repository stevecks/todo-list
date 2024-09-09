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
    @include display-large();
    color: #333333;

    @include tablet {
      @include display-medium();
    }

    @include phone {
      @include display-small();
    }
  }
}
</style>
