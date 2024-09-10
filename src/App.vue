<script setup>
import { provide, ref } from 'vue'

import Header from './components/header.vue'
import Tasks from './components/tasks.vue'
import CurrentTasks from './components/currentTasks.vue'
import AddTask from './components/addTask.vue'
import TaskTable from './components/taskTable.vue'
import TaskBoard from './components/taskBoard.vue'
import Footer from './components/footer.vue'
import Popup from './components/popup.vue'

let lastId = 0

const taskList = ref([
  {
    id: 1,
    task: 'Сварить пельмени',
    status: 'Открыт'
  },
  {
    id: 2,
    task: 'Поднять инфрастуктуру проекта',
    status: 'Открыт'
  },
  {
    id: 3,
    task: 'Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу',
    status: 'В работе'
  },
  {
    id: 4,
    task: 'Поругаться с девопсом',
    status: 'В работе'
  },
  {
    id: 5,
    task: 'Спеть - Знаешь ли ты, вдоль ночных дорог',
    status: 'Закрыт'
  }
])

const addNewTask = (task) => {
  taskList.value.push({
    id: ++lastId,
    task,
    status: 'Открыт'
  })
  console.log(taskList.value)
}

// provide('addTask', addTask)
</script>

<template>
  <!-- <Popup></Popup> -->
  <Header></Header>
  <Tasks>
    <CurrentTasks class="card" />
    <AddTask class="card" @addTask="addNewTask" :taskList="taskList" />
    <TaskTable class="card card--big" :taskList="taskList" />
  </Tasks>
  <TaskBoard></TaskBoard>
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
