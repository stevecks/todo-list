<script setup></script>
<template>
  <div class="container">
    <div class="popup">
      <div class="popup__label">
        <h2>Изменение задачи</h2>
        <button class="close">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <input placeholder="Текст задачи, который можно изменить" />
      <div class="divider"></div>
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
      line-height: 26px;
      font-size: 18px;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      color: #333333;
    }
    button {
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
  }
  input {
    resize: none;
    height: 52px;
    width: 100%;
    border-radius: 24px;
    border: 1px solid #eaeaea;
    padding: 16px;
  }
  input:placeholder {
    line-height: 20px;
    font-size: 12px;
    font-family: 'PT Sans Caption', sans-serif;
  }

  .divider {
    margin-block: 16px;
    border-bottom: 2px solid #eaeaea;
  }
  .statuses {
    // display: flex;
    // flex-direction: row;
    // gap: 8px;
    margin-bottom: 16px;
    &__button {
      display: inline-block;
      margin-right: 8px;
      margin-bottom: 8px;
      height: 30px;
      padding-inline: 16px;
      border-radius: 15px;
      border: none;
      background-color: #f4f4f4;
      p {
        line-height: 20px;
        font-size: 12px;
        font-family: 'PT Sans Caption', sans-serif;
        color: #333333;
      }
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 640px) {
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
        line-height: 24px;
        font-size: 16px;
        font-family: 'PT Sans Caption', sans-serif;
        font-weight: bold;
        color: #ffffff;
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
        line-height: 24px;
        font-size: 16px;
        font-family: 'PT Sans Caption', sans-serif;
        font-weight: bold;
        color: #ff6600;
      }
    }
  }
}
</style>
