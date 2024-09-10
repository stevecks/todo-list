<script setup>
import Container from './container.vue'
</script>
<template>
  <Container class="container">
    <div class="tasks-section">
      <slot></slot>
    </div>
  </Container>
</template>
<style scoped lang="scss">
@import '../scss/mixins';
.container {
  background-color: var(--color-surface-container);
}

.tasks-section {
  --columns: 2;

  width: 100%;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  column-gap: 24px;
  row-gap: 60px;

  @include tablet {
    --columns: 1;
  }
}
</style>
