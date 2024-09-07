<script></script>
<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    margin-inline: 64px;
    width: 1220px;
    height: 100%;

    @media (max-width: 1220px) {
    }
    @media (max-width: 640px) {
      margin-inline: 16px;
    }
  }
}
</style>
