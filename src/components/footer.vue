<script setup></script>
<template>
  <div class="container">
    <footer></footer>
  </div>
</template>
<style scoped lang="scss">
@import '../scss/mixins';

.container {
  background-color: var(--color-surface);
  @include tablet {
    background-color: var(--color-surface-container);
  }
}

footer {
  height: 144px;
  width: 100%;
  border-radius: 48px 48px 0 0;
  background-color: var(--color-surface-container-high);
  @include tablet {
    height: 120px;
  }
  @include phone {
    height: 80px;
  }
}
</style>
