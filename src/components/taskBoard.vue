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
let isDragging = false

function onDragStart(event, task) {
  draggingTask.value = task
  event.target.classList.add('dragging')
  isDragging = true
}

function onDragEnd(event) {
  event.target.classList.remove('dragging')
  isDragging = false
}

function onDrop(event, newStatus) {
  if (draggingTask.value) {
    if (draggingTask.value.status !== newStatus) draggingTask.value.updateTime = Date.now()
    draggingTask.value.status = newStatus
    draggingTask.value = null
  }
}

function allowDrop(event) {
  event.preventDefault()
}
</script>
<template>
  <Container class="container">
    <div class="board-section">
      <p class="label">Доска задач</p>
      <div class="board">
        <div class="board__item">
          <div class="board__status">
            <p>Открыто</p>
          </div>
          <div class="card-task" @drop="onDrop($event, 'Открыт')" @dragover="allowDrop">
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
          <div class="card-task" @drop="onDrop($event, 'В работе')" @dragover="allowDrop">
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
          <div class="card-task" @drop="onDrop($event, 'Закрыт')" @dragover="allowDrop">
            <div
              class="card-task__item"
              v-for="item in taskListClose"
              :key="item.id"
              :class="{ dragging: isDragging }"
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
      background-color: var(--color-surface-container-low);
      // transform: scale(1.05);
    }

    &__item.hidden {
      visibility: hidden;
    }
  }
}
</style>
