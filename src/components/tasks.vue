<script setup>
import Container from './container.vue'
import CurrentTasks from './currentTasks.vue'
import AddTask from './addTask.vue'
</script>
<template>
  <Container class="container">
    <div class="tasks-section">
      <CurrentTasks class="card" />
      <AddTask class="card" />
      <div class="card card--big"></div>
    </div>
  </Container>
</template>
<style lang="scss">
.container {
  background-color: #eaeaea;
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

.card {
  grid-column: span 1;

  &--big {
    grid-column: span 2;
    @media (max-width: 992px) {
      grid-column: span 1;
    }
  }
}
</style>
