<script setup></script>

<template>
  <div class="container">
    <div class="card">
      <div class="table-head">
        <div class="table-head__label">
          <p>Задачи</p>
        </div>
        <div class="table-head__label table-head__label--right">
          <p>Статус</p>
        </div>
      </div>
      <div class="tasksList">
        <div class="tasksList__item">
          <div class="tasksList__item__name">
            <p>Сварить пельмени</p>
          </div>
          <div class="tasksList__item__button">
            <button>
              <p>Открыт</p>
            </button>
          </div>
        </div>
        <div class="tasksList__item">
          <div class="tasksList__item__name">
            <p>Поднять инфрастуктуру проекта</p>
          </div>
          <div class="tasksList__item__button">
            <button>
              <p>Открыт</p>
            </button>
          </div>
        </div>
        <div class="tasksList__item">
          <div class="tasksList__item__name">
            <p>Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу</p>
          </div>
          <div class="tasksList__item__button">
            <button>
              <p>В работе</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="button-more">
      <div class="button-more__text">
        <p>Показать еще</p>
        <span class="material-symbols-outlined"> keyboard_arrow_down </span>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.button-more {
  padding-inline: 32px;
  margin-top: 40px;
  height: 48px;
  background-color: #ffffff;
  border-radius: 24px;
  border: 2px solid #ff6600;
  @media (max-width: 992px) {
    margin-top: 32px;
  }
  @media (max-width: 640px) {
    margin-top: 24px;
  }
  &__text {
    display: flex;
    flex-direction: row;
    gap: 8px;
    line-height: 24px;
    font-size: 16px;
    font-weight: bold;
    color: #ff6600;
  }
}

.card {
  padding: 40px;
  border-radius: 48px;
  background-color: #fff;
  font-family: 'PT Sans Caption', sans-serif;
  color: #333333;

  @media (max-width: 640px) {
    background-color: #ffffff00;
    padding: 0;
  }

  .table-head {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 102px;
    line-height: 26px;
    font-size: 18px;
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: bold;
    padding-bottom: 12px;
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      line-height: 28px;
      font-size: 20px;
      padding-bottom: 32px;
    }

    &__label {
      &--right {
        width: 102px;
        display: flex;
        justify-content: center;
        @media (max-width: 640px) {
          display: none;
        }
      }
    }
  }

  .tasksList {
    display: flex;
    flex-direction: column;
    @media (max-width: 640px) {
      gap: 24px;
    }
  }
  .tasksList__item {
    padding-block: 8px;
    display: grid;
    grid-template-columns: 1fr 102px;
    border-bottom: 1px solid #eaeaea;
    @media (max-width: 640px) {
      border-bottom: none;
      background-color: #fff;
      border-radius: 32px;
      padding: 24px;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    &:last-child {
      border-bottom: none;
    }

    &__name p {
      line-height: 24px;
      font-size: 16px;
      @media (max-width: 640px) {
        font-weight: bold;
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
        background-color: #f4f4f4;
        @media (max-width: 640px) {
          height: 40px;
          width: 100%;
          background-color: #ffffff;
          border-radius: 20px;
          border: 2px solid #ff6600;
        }
        p {
          line-height: 20px;
          font-size: 12px;
          @media (max-width: 640px) {
            line-height: 24px;
            font-size: 16px;
            font-weight: bold;
            color: #ff6600;
          }
        }
      }
    }
  }
}
</style>
