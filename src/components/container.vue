<script></script>
<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../scss/mixins';

.container {
  --offset: 64px;

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    margin-inline: var(--offset);
    width: 1220px;
    height: 100%;

    @include phone {
      --offset: 16px;
    }
  }
}
</style>
