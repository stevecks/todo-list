<script setup>
import { onMounted, ref, reactive } from 'vue'

import Header from './components/header.vue'
import Tasks from './components/tasks.vue'
import CurrentTasks from './components/currentTasks.vue'
import AddTask from './components/addTask.vue'
import TaskTable from './components/taskTable.vue'
import TaskBoard from './components/taskBoard.vue'
import Footer from './components/footer.vue'
import Popup from './components/popup.vue'

const taskList = [
  {
    id: 1,
    task: 'Сварить пельмени',
    status: 'В работе'
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
    status: 'Открыт'
  },
  {
    id: 5,
    task: 'Спеть - Знаешь ли ты, вдоль ночных дорог',
    status: 'Закрыт'
  }
]

const taskSortList = ref([])
const countsOfStatuses = reactive({})

let lastId = taskList.length

onMounted(() => {
  taskSortList.value = sortTasks()

  countsOfStatuses.open = getTasksByStatus('Открыт').length
  countsOfStatuses.work = getTasksByStatus('В работе').length
  countsOfStatuses.close = getTasksByStatus('Закрыт').length
})

const addTask = (task) => {
  taskList.push({
    id: ++lastId,
    task,
    status: 'Открыт'
  })
  taskSortList.value = sortTasks()

  countsOfStatuses.open = getTasksByStatus('Открыт').length
  countsOfStatuses.work = getTasksByStatus('В работе').length
  countsOfStatuses.close = getTasksByStatus('Закрыт').length
}

const getTasksByStatus = (status) => {
  return taskList.filter((item) => item.status === status)
}

const changeTaskStatus = (id, newstatus) => {
  taskList.value[id].status = newstatus
}

const sortTasks = () => {
  return [].concat(
    getTasksByStatus('Открыт').reverse(),
    getTasksByStatus('В работе').reverse(),
    getTasksByStatus('Закрыт').reverse()
  )
}
</script>

<template>
  <!-- <Popup></Popup> -->
  <Header></Header>
  <Tasks>
    <CurrentTasks class="card" :countsOfStatuses="countsOfStatuses" />
    <AddTask class="card" @addTask="addTask" />
    <TaskTable class="card card--big" :taskSortList="taskSortList" />
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
