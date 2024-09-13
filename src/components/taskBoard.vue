<script setup>
import { computed, onMounted, ref } from 'vue'
import Container from './container.vue'

const props = defineProps({
  taskSortList: Array
})

const taskListOpen = computed(() => {
  return props.taskSortList.filter((task) => task.status === 'Открыт')
})
const taskListWork = computed(() => {
  return props.taskSortList.filter((task) => task.status === 'В работе')
})
const taskListClose = computed(() => {
  return props.taskSortList.filter((task) => task.status === 'Закрыт')
})

const draggingTask = ref(null)

const isOverOpen = ref(false)
const isOverWork = ref(false)
const isOverClose = ref(false)

function onDragStart(event, task) {
  draggingTask.value = task
  event.target.classList.add('dragging')
}

function onDragEnd(event) {
  event.target.classList.remove('dragging')
}

function onDrop(event, newStatus) {
  if (draggingTask.value) {
    if (draggingTask.value.status !== newStatus) draggingTask.value.updateTime = Date.now()
    draggingTask.value.status = newStatus
    draggingTask.value = null
    event.target.classList.remove('dragging')
    isOverOpen.value = false
    isOverWork.value = false
    isOverClose.value = false
  }
}

function allowDrop(event) {
  event.preventDefault()
}

function onDragEnter(event, column) {
  if (draggingTask.value.status === 'Открыт') {
    if (column === 'В работе') isOverWork.value = true
    if (column === 'Закрыт') isOverClose.value = true
  }
  if (draggingTask.value.status === 'В работе') {
    if (column === 'Открыт') isOverOpen.value = true
    if (column === 'Закрыт') isOverClose.value = true
  }
  if (draggingTask.value.status === 'Закрыт') {
    if (column === 'Открыт') isOverOpen.value = true
    if (column === 'В работе') isOverWork.value = true
  }
}

function onDragLeave(event) {
  isOverOpen.value = false
  isOverWork.value = false
  isOverClose.value = false
}
isOverOpen.value = false
isOverWork.value = false
isOverClose.value = false
</script>
<template>
  <Container class="container">
    <div class="board-section" v-if="props.taskSortList.length">
      <p class="label">Доска задач</p>
      <div class="board">
        <div class="board__item">
          <div class="board__status">
            <p>Открыто</p>
          </div>
          <div
            class="card-task"
            @drop="onDrop($event, 'Открыт')"
            @dragover="allowDrop"
            @dragenter="onDragEnter($event, 'Открыт')"
          >
            <div v-if="isOverOpen" class="section-add" @dragleave="onDragLeave($event)"></div>
            <div
              class="card-task__item"
              v-for="item in taskListOpen"
              :key="item.id"
              draggable="true"
              @dragstart="onDragStart($event, item)"
              @dragend="onDragEnd($event)"
            >
              <p>{{ item.task }}</p>
            </div>
          </div>
        </div>
        <div class="board__item">
          <div class="board__status">
            <p>В работе</p>
          </div>
          <div
            class="card-task"
            @drop="onDrop($event, 'В работе')"
            @dragover="allowDrop"
            @dragenter="onDragEnter($event, 'В работе')"
          >
            <div v-if="isOverWork" class="section-add" @dragleave="onDragLeave($event)"></div>
            <div
              class="card-task__item"
              v-for="item in taskListWork"
              :key="item.id"
              draggable="true"
              @dragstart="onDragStart($event, item)"
              @dragend="onDragEnd($event)"
            >
              <p>{{ item.task }}</p>
            </div>
          </div>
        </div>
        <div class="board__item">
          <div class="board__status">
            <p>Закрыто</p>
          </div>
          <div
            class="card-task"
            @drop="onDrop($event, 'Закрыт')"
            @dragover="allowDrop"
            @dragenter="onDragEnter($event, 'Закрыт')"
          >
            <div v-if="isOverClose" class="section-add" @dragleave="onDragLeave($event)"></div>
            <div
              class="card-task__item"
              v-for="item in taskListClose"
              :key="item.id"
              draggable="true"
              @dragstart="onDragStart($event, item)"
              @dragend="onDragEnd($event)"
            >
              <p>{{ item.task }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
<style scoped lang="scss">
@import '../scss/mixins';

.container {
  min-height: calc(100dvh - 716px);
  background-color: var(--color-surface);
  @include tablet {
    display: none;
  }
}

.board-section {
  margin-block: 60px;
  .label {
    @include display-large();
    color: var(--color-on-surface);
    margin-bottom: 48px;
  }
}

.board {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 24px;

  .board__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .board__status {
      height: 48px;
      width: min-content;
      border-radius: 24px;
      background-color: var(--color-secondary-container);
      display: flex;
      align-items: center;
      padding-inline: 24px;
      p {
        line-height: 28px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'PT Sans Caption', sans-serif;
        color: var(--color-on-secondary-container);
        white-space: nowrap;
      }
    }
  }
  .card-task {
    position: relative;
    width: 100%;
    flex-grow: 1;
    min-height: 280px;
    padding: 16px;
    border-radius: 24px;
    background-color: var(--color-surface-container);
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 16px;

    .section-add {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffffbc;
      margin: 8px;
      color: var(--color-on-surface);
      font-size: 18px;
      font-weight: bold;
      border: 2px dashed var(--color-primary);
      border-radius: 24px;
      z-index: 1;
    }

    &.drag-over {
      border: 2px dashed var(--color-primary);
      background-color: #802121;
    }

    &__item {
      padding: 24px 32px;
      border-radius: 24px;
      background-color: var(--color-surface-container-low);
      border: 2px solid var(--color-outline);
      cursor: pointer;

      p {
        @include label-small();
        color: var(--color-on-surface);
      }
    }

    &__item.dragging {
      opacity: 1;
      border-radius: 24px;
      border: 2px solid var(--color-primary);
      background-color: var(--color-surface-container-low);
      // transform: scale(1.05);
    }
  }
}
</style>
