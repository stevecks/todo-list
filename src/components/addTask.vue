<script setup>
import { ref } from 'vue'

const emit = defineEmits(['onAddTask'])

const taskInput = ref('')

const onClickAdd = () => {
  if (taskInput.value) emit('onAddTask', taskInput.value)
  taskInput.value = ''
}

const onClickClear = () => {
  taskInput.value = ''
}
</script>

<template>
  <section class="card">
    <h2 class="card__name">Добавить задачу</h2>
    <form class="adding-section" @submit.prevent="onClickAdd">
      <button @click="onClickAdd" class="adding-section__button">
        <span class="material-symbols-outlined">add</span>
        <p>Добавить задачу</p>
      </button>
      <div class="adding-section__input">
        <button @click="onClickClear" class="button-clear" type="button">
          <span class="material-symbols-outlined">close</span>
        </button>
        <input type="text" placeholder="Текст" v-model="taskInput" />
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
@import '../scss/mixins';

.card {
  padding: 40px 24px;
  border-radius: 48px;
  background-color: var(--color-surface-container-low);

  @include phone {
    padding: 24px;
  }

  &__name {
    @include label-large();
    color: var(--color-on-surface);
    margin-bottom: 24px;

    @include tablet {
      @include label-medium();
    }
  }

  .adding-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    @include phone {
      flex-direction: column-reverse;
      gap: 24px;
      align-items: stretch;
    }

    &__button {
      height: 44px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 22px;
      border: none;
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      @include label-button();
      cursor: pointer;

      &:hover {
        background-color: var(--color-filled-button-hover);
        transition: all 0.3s ease;
        @include tablet {
          background-color: var(--color-primary);
        }
      }

      @include phone {
        width: 100%;
      }

      span {
        height: 24px;
        width: 24px;
        @include phone {
          display: none;
        }
      }

      p {
        display: none;
        @include phone {
          display: inline;
        }
      }
    }

    &__input {
      position: relative;
      flex: auto;

      input {
        height: 48px;
        width: 100%;
        border: 1px solid var(--color-outline);
        border-radius: 24px;
        background-color: hsla(0 0% 100% / 0);
        color: var(--color-on-surface);
        @include title-medium();
        padding: 0 44px 0 16px;
        cursor: pointer;

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
      input::placeholder {
        @include title-medium();
        color: var(--color-on-surface);
      }
      &:hover .button-clear {
        display: flex;
      }
      &:focus-within .button-clear {
        display: flex;
      }

      .button-clear {
        position: absolute;
        display: none;
        justify-content: center;
        align-items: center;
        top: 4px;
        right: 4px;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        border: none;
        background-color: hsla(0 0% 100% / 0);
        cursor: pointer;
        @include tablet {
          display: flex;
        }

        span {
          font-size: 20px;
          line-height: 20px;
          height: 20px;
          width: 20px;
          color: var(--color-primary);
        }
      }
    }
  }
}
</style>
