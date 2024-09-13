<script setup>
import { onMounted, ref } from 'vue'
import { usePopupTask } from '../composables/usePopupTask'

const props = defineProps({
  popupTask: Object
})

const emit = defineEmits(['onClosePopup', 'onDeleteTask', 'onChangeTask'])
const { sortStatuses, selectStatus, taskInput, makeSortStatuses, onClickStatus } = usePopupTask(
  props.popupTask
)
onMounted(() => {
  makeSortStatuses()
})

const onClosePopup = () => {
  emit('onClosePopup')
}

const onChangeTask = () => {
  if (taskInput.value) {
    emit('onChangeTask', props.popupTask.id, taskInput.value, selectStatus.value)
    emit('onClosePopup')
  }
}

const onDeleteTask = () => {
  emit('onDeleteTask', props.popupTask.id)
  emit('onClosePopup')
}

const onClickOutside = (event) => {
  if (event.target === event.currentTarget) {
    emit('onClosePopup')
  }
}
</script>
<template>
  <section class="container" @click="onClickOutside">
    <article class="popup">
      <div class="popup__label">
        <h2>Изменение задачи</h2>
        <button class="popup__button-close" @click="onClosePopup">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <input
        v-model="taskInput"
        class="popup__input"
        placeholder="Текст задачи, который можно изменить"
      />
      <div class="popup__divider"></div>
      <div class="statuses">
        <button
          class="statuses__button"
          v-for="item in sortStatuses"
          @click="onClickStatus(item)"
          :class="{ active: item.select }"
        >
          <p>{{ item.name }}</p>
        </button>
      </div>
      <div class="buttons">
        <button class="buttons__save" @click="onChangeTask">
          <p>Применить</p>
        </button>
        <button class="buttons__delete" @click="onDeleteTask">
          <p>Удалить задачу</p>
        </button>
      </div>
    </article>
  </section>
</template>
<style scoped lang="scss">
@import '../scss/mixins';

.container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  background-color: hsla(0 0% 0% / 0.5);
  z-index: 10;
}

.popup {
  margin: 16px;
  width: 400px;
  padding: 24px;
  border-radius: 16px;
  background-color: var(--color-surface-container-low);
  &__label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    h2 {
      @include label-large();
      color: var(--color-on-surface);
      @include tablet() {
        @include label-medium();
      }
    }
  }
  &__button-close {
    height: 28px;
    width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    border: none;
    background-color: hsla(0 0% 100% / 0);
    color: var(--color-surface-container-high);
    cursor: pointer;

    &:hover {
      color: var(--color-primary);
      transition: all 0.3s ease;
      @include tablet {
        color: var(--color-surface-container-high);
      }
    }
    span {
      height: 24px;
      width: 24px;
    }
  }
  &__input {
    resize: none;
    height: 52px;
    width: 100%;
    border-radius: 24px;
    border: 1px solid var(--color-outline);
    padding: 16px;
    cursor: pointer;
    color: var(--color-on-surface);
    @include title-medium();
    &:placeholder {
      @include title-small();
    }
    &:hover {
      border: 1px solid var(--color-primary);
      transition: all 0.3s ease;
    }
    &:focus-visible {
      border: 1px solid var(--color-primary);
      outline: none;
      transition: all 0.3s ease;
    }
  }

  &__divider {
    margin-block: 16px;
    border-bottom: 2px solid var(--color-outline);
  }
  .statuses {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    &__button {
      height: 30px;
      padding-inline: 16px;
      border-radius: 15px;
      border: none;
      background-color: var(--color-secondary-container);
      color: var(--color-on-secondary-container);
      @include title-small();
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        transition: all 0.3s ease;
        background-color: var(--color-tonal-button-hover);
        @include tablet {
          background-color: var(--color-secondary-container);
        }
      }
    }
    .active {
      background-color: var(--color-tonal-button-active);
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include phone {
      flex-direction: column;
      gap: 12px;
    }
    &__save {
      height: 40px;
      padding-inline: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      border: none;
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      white-space: nowrap;
      @include label-button();
      cursor: pointer;

      &:hover {
        background-color: var(--color-filled-button-hover);
        transition: all 0.3s ease;
        @include tablet {
          background-color: var(--color-primary);
        }
      }
    }
    &__delete {
      height: 40px;
      padding-inline: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      background-color: var(--color-on-primary);
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
      white-space: nowrap;
      @include label-button();
      cursor: pointer;

      &:hover {
        background-color: var(--color-primary);
        color: var(--color-on-primary);
        transition: all 0.3s ease;
        @include tablet {
          background-color: var(--color-on-primary);
          color: var(--color-primary);
        }
      }
    }
  }
}
</style>
