<script setup></script>

<template>
  <div class="card">
    <h2 class="card__name">Добавить задачу</h2>
    <div class="adding-section">
      <button class="adding-section__button">
        <span class="material-symbols-outlined">add</span>
        <p>Добавить задачу</p>
      </button>
      <div class="adding-section__input">
        <button class="button-clear">
          <span class="material-symbols-outlined">close</span>
        </button>
        <input type="text" placeholder="Текст" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../scss/mixins';

.card {
  padding: 40px 24px;
  border-radius: 48px;
  background-color: #fff;

  @include phone {
    padding: 24px;
  }

  &__name {
    @include label-large();
    color: #333333;
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

      @include phone {
        width: 100%;
      }

      span {
        height: 24px;
        width: 24px;
        color: #ffffff;
        @include phone {
          display: none;
        }
      }

      p {
        display: none;
        @include label-button();
        color: #ffffff;
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
        border: 1px solid #eaeaea;
        border-radius: 24px;
        background-color: #ffffff00;
        padding: 0 44px 0 16px;
      }
      input::placeholder {
        @include title-medium();
        color: #333333;
      }

      .button-clear {
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
        background-color: #ffffff00;

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
