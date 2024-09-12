<script setup>
import { ref, computed, reactive } from 'vue'

import Popup from './../components/popup.vue'

const props = defineProps({
  taskSortList: Array
})

const emit = defineEmits(['onDeleteTask', 'onChangeTask'])

let popupTask = reactive({})

let isOpenFull = ref(false)
let isOpenPopup = ref(false)
const taskListRef = ref(null)

const visibleTasks = computed(() => {
  return isOpenFull.value ? props.taskSortList : props.taskSortList.slice(0, 5)
})

const onClickStatus = (task) => {
  popupTask.id = task.id
  popupTask.name = task.task
  popupTask.status = task.status
  isOpenPopup.value = !isOpenPopup.value
}

const onClosePopup = () => {
  isOpenPopup.value = !isOpenPopup.value
}

const onDeleteTask = (taskId) => {
  emit('onDeleteTask', taskId)
}

const onChangeTask = (taskId, newTask, newStatus) => {
  emit('onChangeTask', taskId, newTask, newStatus)
}

const onClickMore = () => {
  isOpenFull.value = !isOpenFull.value
  if (!isOpenFull.value && taskListRef.value) {
    taskListRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="container">
    <Popup
      v-if="isOpenPopup"
      :popupTask="popupTask"
      @onClosePopup="onClosePopup"
      @onChangeTask="onChangeTask"
      @onDeleteTask="onDeleteTask"
    ></Popup>
    <div class="table" ref="taskListRef">
      <p v-if="taskSortList.length === 0" class="section-empty">
        Список задач пуст. Добавьте задачи!
      </p>
      <div v-if="!(taskSortList.length === 0)" class="head-section">
        <div class="head-section__label">
          <p>Задачи</p>
        </div>
        <div class="head-section__label head-section__label--right">
          <p>Статус</p>
        </div>
      </div>
      <div class="task-list">
        <div class="task-card" v-for="item in visibleTasks" :key="item.id">
          <div class="task-card__name">
            <p>{{ item.task }}</p>
          </div>
          <div class="task-card__button">
            <button @click="onClickStatus(item)">
              <p>{{ item.status }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button v-if="taskSortList.length > 5" class="button-more" @click="onClickMore">
      <div class="button-more__text">
        <p>{{ isOpenFull ? 'Скрыть' : 'Показать еще' }}</p>
        <span class="material-symbols-outlined" :class="{ rotate: isOpenFull }">
          keyboard_arrow_down
        </span>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '../scss/mixins';

.table {
  padding: 40px;
  border-radius: 48px;
  background-color: var(--color-surface-container-low);
  color: var(--color-on-surface);

  @include phone {
    background-color: hsla(0 0% 100% / 0);
    padding: 0;
  }

  .section-empty {
    text-align: center;
    @include label-large();
    color: var(--color-surface-container-high);

    @include tablet {
      @include label-medium();
    }
  }

  .head-section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 102px;
    @include label-medium();
    padding-bottom: 12px;

    @include phone {
      grid-template-columns: 1fr;
      @include display-small();
      padding-bottom: 32px;
    }

    &__label {
      &--right {
        width: 102px;
        display: flex;
        justify-content: center;

        @include phone {
          display: none;
        }
      }
    }
  }

  .task-list {
    display: flex;
    flex-direction: column;

    @include phone {
      gap: 24px;
    }
  }

  .task-card {
    padding-block: 8px;
    display: grid;
    grid-template-columns: 1fr 102px;
    border-bottom: 1px solid var(--color-outline);

    @include phone {
      border-bottom: none;
      background-color: var(--color-surface-container-low);
      border-radius: 32px;
      padding: 24px;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    &:last-child {
      border-bottom: none;
    }

    &__name p {
      @include title-large();

      @include phone {
        @include label-small();
      }
    }

    &__button {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      button {
        height: 28px;
        padding-inline: 24px;
        border-radius: 14px;
        border: none;
        background-color: var(--color-secondary-container);
        cursor: pointer;

        @include phone {
          height: 40px;
          width: 100%;
          background-color: var(--color-on-primary);
          border-radius: 20px;
          border: 2px solid var(--color-primary);
        }

        p {
          @include title-small();
          color: var(--color-on-secondary-container);

          @include phone {
            @include label-button();
            color: var(--color-primary);
          }
        }
      }
    }
  }
}

.button-more {
  padding-inline: 32px;
  margin-top: 40px;
  height: 48px;
  background-color: var(--color-on-primary);
  border-radius: 24px;
  border: 2px solid var(--color-primary);
  cursor: pointer;

  @include tablet {
    margin-top: 32px;
  }

  @include phone {
    margin-top: 24px;
  }

  &__text {
    display: flex;
    flex-direction: row;
    gap: 8px;
    @include label-button();
    color: var(--color-primary);
    .rotate {
      transform: rotate(180deg);
    }
  }
}
</style>
