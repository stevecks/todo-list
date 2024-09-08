<script setup></script>

<template>
  <div class="container">
    <div class="table">
      <div class="head-section">
        <div class="head-section__label">
          <p>Задачи</p>
        </div>
        <div class="head-section__label head-section__label--right">
          <p>Статус</p>
        </div>
      </div>
      <div class="task-list">
        <div class="task-card">
          <div class="task-card__name">
            <p>Сварить пельмени</p>
          </div>
          <div class="task-card__button">
            <button>
              <p>Открыт</p>
            </button>
          </div>
        </div>
        <div class="task-card">
          <div class="task-card__name">
            <p>Поднять инфрастуктуру проекта</p>
          </div>
          <div class="task-card__button">
            <button>
              <p>Открыт</p>
            </button>
          </div>
        </div>
        <div class="task-card">
          <div class="task-card__name">
            <p>Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу</p>
          </div>
          <div class="task-card__button">
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
@import '../scss/mixins';

.table {
  padding: 40px;
  border-radius: 48px;
  background-color: #fff;
  font-family: 'PT Sans Caption', sans-serif;
  color: #333333;

  @include phone {
    background-color: #ffffff00;
    padding: 0;
  }

  .head-section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 102px;
    line-height: 26px;
    font-size: 18px;
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: bold;
    padding-bottom: 12px;

    @include phone {
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
    border-bottom: 1px solid #eaeaea;

    @include phone {
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

      @include phone {
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

        @include phone {
          height: 40px;
          width: 100%;
          background-color: #ffffff;
          border-radius: 20px;
          border: 2px solid #ff6600;
        }
        p {
          line-height: 20px;
          font-size: 12px;

          @include phone {
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

.button-more {
  padding-inline: 32px;
  margin-top: 40px;
  height: 48px;
  background-color: #ffffff;
  border-radius: 24px;
  border: 2px solid #ff6600;

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
    line-height: 24px;
    font-size: 16px;
    font-weight: bold;
    color: #ff6600;
  }
}
</style>
