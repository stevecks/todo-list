<script setup></script>
<template>
  <div class="container">
    <div class="popup">
      <div class="popup__label">
        <h2>Изменение задачи</h2>
        <button class="popup__button-close">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <input class="popup__input" placeholder="Текст задачи, который можно изменить" />
      <div class="popup__divider"></div>
      <div class="statuses">
        <button class="statuses__button"><p>Отложить</p></button>
        <button class="statuses__button"><p>В работу</p></button>
        <button class="statuses__button"><p>Закрыть</p></button>
      </div>
      <div class="buttons">
        <button class="buttons__save">
          <p>Применить</p>
        </button>
        <button class="buttons__delete">
          <p>Удалить задачу</p>
        </button>
      </div>
    </div>
  </div>
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
    span {
      height: 24px;
      width: 24px;
      color: var(--color-surface-container-high);
    }
  }
  &__input {
    resize: none;
    height: 52px;
    width: 100%;
    border-radius: 24px;
    border: 1px solid var(--color-outline);
    padding: 16px;
    &:placeholder {
      @include title-small();
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
      p {
        @include title-small();
        color: var(--color-on-secondary-container);
        white-space: nowrap;
      }
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
      p {
        @include label-button();
        color: var(--color-on-primary);
        white-space: nowrap;
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
      p {
        @include label-button();
        color: var(--color-primary);
        white-space: nowrap;
      }
    }
  }
}
</style>
