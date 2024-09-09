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
  background-color: #00000088;
  z-index: 10;
}

.popup {
  margin: 16px;
  width: 375px;
  padding: 24px;
  border-radius: 16px;
  background-color: #ffffff;
  &__label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    h2 {
      @include label-large();
      color: #333333;
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
    background-color: #ffffff00;
    span {
      height: 24px;
      width: 24px;
      color: #b6b6b6;
    }
  }
  &__input {
    resize: none;
    height: 52px;
    width: 100%;
    border-radius: 24px;
    border: 1px solid #eaeaea;
    padding: 16px;
    &:placeholder {
      @include title-small();
    }
  }

  &__divider {
    margin-block: 16px;
    border-bottom: 2px solid #eaeaea;
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
      background-color: #f4f4f4;
      p {
        @include title-small();
        color: #333333;
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
      background-color: #ff6600;
      p {
        @include label-button();
        color: #ffffff;
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
      background-color: #ffffff;
      border: 2px solid #ff6600;
      p {
        @include label-button();
        color: #ff6600;
        white-space: nowrap;
      }
    }
  }
}
</style>
