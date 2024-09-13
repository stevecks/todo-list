<script setup>
import { onMounted, ref, reactive, watch, watchEffect } from 'vue'

import Header from './components/header.vue'
import TaskCards from './components/taskCards.vue'
import CurrentTasks from './components/cards/currentTasks.vue'
import AddTask from './components/cards/addTask.vue'
import TaskTable from './components/cards/taskTable.vue'
import TaskBoard from './components/taskBoard.vue'
import Footer from './components/footer.vue'

const taskList = reactive([])

const taskSortList = ref([])
const countsOfStatuses = reactive({})
let lastId = 0

onMounted(() => {
  const savedTasks = localStorage.getItem('task_list')

  if (savedTasks) {
    const parsedTasks = JSON.parse(savedTasks)
    taskList.splice(0, taskList.length, ...parsedTasks)
  }

  const savedLastId = localStorage.getItem('last_id')
  if (savedLastId) {
    lastId = JSON.parse(savedLastId)
  }
  updateSortAndStatuse()
})

watch(
  () => taskList,
  () => {
    updateSortAndStatuse()
    saveLocalStorage()
  },
  { deep: true }
)

const saveLocalStorage = () => {
  localStorage.setItem('task_list', JSON.stringify(taskList))
  localStorage.setItem('last_id', JSON.stringify(lastId))
}

const updateSortAndStatuse = () => {
  taskSortList.value = sortTasks()

  countsOfStatuses.open = getTasksByStatus('Открыт').length
  countsOfStatuses.work = getTasksByStatus('В работе').length
  countsOfStatuses.close = getTasksByStatus('Закрыт').length
}

const onAddTask = (task) => {
  taskList.push({
    id: ++lastId,
    task,
    status: 'Открыт',
    updateTime: Date.now()
  })
}

const onChangeTask = (taskId, newTask, newStatus) => {
  if (newTask) taskList.find((item) => item.id === taskId).task = newTask
  if (newStatus) taskList.find((item) => item.id === taskId).status = newStatus
  taskList.find((item) => item.id === taskId).updateTime = Date.now()
}

const onDeleteTask = (taskId) => {
  const taskIndex = taskList.findIndex((item) => item.id === taskId)
  if (taskIndex !== -1) taskList.splice(taskIndex, 1)
}

const getTasksByStatus = (status) => {
  return taskList.filter((item) => item.status === status)
}

const sortTasks = () => {
  return [].concat(
    getTasksByStatus('Открыт').sort((item1, item2) => item2.updateTime - item1.updateTime),
    getTasksByStatus('В работе').sort((item1, item2) => item2.updateTime - item1.updateTime),
    getTasksByStatus('Закрыт').sort((item1, item2) => item2.updateTime - item1.updateTime)
  )
}
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
