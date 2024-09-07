<script setup></script>

<template>
  <div class="card">
    <h2 class="card__name">Добавить задачу</h2>
    <div class="card__add">
      <button class="card__add__button">
        <span class="material-symbols-outlined">add</span>
        <p>Добавить задачу</p>
      </button>
      <div class="input">
        <button class="clear">
          <span class="material-symbols-outlined">close</span>
        </button>
        <input type="text" placeholder="Текст" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 40px 20px;
  border-radius: 48px;
  background-color: #fff;

  &__name {
    line-height: 32px;
    font-size: 24px;
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: bold;
    color: #333333;
    margin-bottom: 24px;
  }

  &__add {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    @media (max-width: 640px) {
      flex-direction: column-reverse;
      gap: 16px;
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
      background-color: #ff6600;

      @media (max-width: 640px) {
        width: 100%;
      }

      span {
        height: 24px;
        width: 24px;
        color: #ffffff;
        @media (max-width: 640px) {
          display: none;
        }
      }

      p {
        display: none;
        line-height: 24px;
        font-size: 16px;
        font-family: '', sans-serif;
        font-family: 'PT Sans Caption', sans-serif;
        font-weight: bold;
        color: #ffffff;
        @media (max-width: 640px) {
          display: inline;
        }
      }
    }

    .input {
      position: relative;
      flex: auto;

      input {
        height: 48px;
        width: 100%;
        border: 1px solid #eaeaea;
        border-radius: 24px;
        background-color: none;
        padding: 0 44px 0 16px;
      }

      .clear {
        position: absolute;
        top: 4px;
        right: 4px;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: none;
        background-color: #9a3c3c00;

        span {
          font-size: 20px;
          line-height: 20px;
          height: 20px;
          width: 20px;
          color: #ff6600;
        }
      }
    }
  }
}
</style>
