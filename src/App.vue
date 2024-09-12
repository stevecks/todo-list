<script setup>
import { onMounted, ref, reactive, watch, watchEffect } from 'vue'

import Header from './components/header.vue'
import Tasks from './components/tasks.vue'
import CurrentTasks from './components/currentTasks.vue'
import AddTask from './components/addTask.vue'
import TaskTable from './components/taskTable.vue'
import TaskBoard from './components/taskBoard.vue'
import Footer from './components/footer.vue'

let taskList = reactive([
  {
    id: 1,
    task: 'Сварить пельмени',
    status: 'В работе',
    updateTime: 1726131913001
  },
  {
    id: 2,
    task: 'Поднять инфрастуктуру проекта',
    status: 'Открыт',
    updateTime: 1726131913002
  },
  {
    id: 3,
    task: 'Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу',
    status: 'В работе',
    updateTime: 1726131913003
  },
  {
    id: 4,
    task: 'Поругаться с девопсом',
    status: 'Открыт',
    updateTime: 1726131913004
  },
  {
    id: 5,
    task: 'Спеть - Знаешь ли ты, вдоль ночных дорог',
    status: 'Закрыт',
    updateTime: 1726131913005
  }
])

const taskSortList = ref([])
const countsOfStatuses = reactive({})
let lastId = taskList.length

onMounted(() => {
  updateSortAndStatuse()
})

watch(
  () => taskList,
  () => {
    updateSortAndStatuse()
    console.log('Изменение')
  },
  { deep: true }
)

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
  taskList = taskList.filter((item) => item.id !== taskId)
  updateSortAndStatuse()
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
  <Tasks>
    <CurrentTasks class="card" :countsOfStatuses="countsOfStatuses" />
    <AddTask class="card" @onAddTask="onAddTask" />
    <TaskTable
      class="card card--big"
      :taskSortList="taskSortList"
      @onDeleteTask="onDeleteTask"
      @onChangeTask="onChangeTask"
    />
  </Tasks>
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
