<script setup>
import { useTasks } from './composables/useTasks'

import Header from './components/header.vue'
import TaskCards from './components/taskCards.vue'
import CurrentTasks from './components/cards/currentTasks.vue'
import AddTask from './components/cards/addTask.vue'
import TaskTable from './components/cards/taskTable.vue'
import TaskBoard from './components/taskBoard.vue'
import Footer from './components/footer.vue'

const { taskSortList, countsOfStatuses, onAddTask, onChangeTask, onDeleteTask } = useTasks()
</script>

<template>
  <Header></Header>
  <TaskCards>
    <CurrentTasks class="card" :countsOfStatuses="countsOfStatuses" />
    <AddTask class="card" @onAddTask="onAddTask" />
    <TaskTable
      class="card card--big"
      :taskSortList="taskSortList"
      @onDeleteTask="onDeleteTask"
      @onChangeTask="onChangeTask"
    />
  </TaskCards>
  <TaskBoard :taskSortList="taskSortList"></TaskBoard>
  <Footer></Footer>
</template>

<style scoped lang="scss">
@import './scss/mixins';

.card {
  grid-column: span 1;

  &--big {
    grid-column: span 2;
    @include tablet {
      grid-column: span 1;
    }
  }
}
</style>
