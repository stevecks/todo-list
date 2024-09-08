<script setup>
import Container from './container.vue'
import CurrentTasks from './currentTasks.vue'
import AddTask from './addTask.vue'
import TaskTable from './taskTable.vue'
</script>
<template>
  <Container class="container">
    <div class="tasks-section">
      <CurrentTasks class="tasks-section__card" />
      <AddTask class="tasks-section__card" />
      <TaskTable class="tasks-section__card tasks-section__card--big" />
    </div>
  </Container>
</template>
<style lang="scss">
@import '../scss/mixins';
.container {
  background-color: #eaeaea;
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

  &__card {
    grid-column: span 1;

    &--big {
      grid-column: span 2;
      @include tablet {
        grid-column: span 1;
      }
    }
  }
}
</style>
