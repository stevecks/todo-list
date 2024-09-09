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
      background-color: var(--color-primary);

      @include phone {
        width: 100%;
      }

      span {
        height: 24px;
        width: 24px;
        color: var(--color-on-primary);
        @include phone {
          display: none;
        }
      }

      p {
        display: none;
        @include label-button();
        color: var(--color-on-primary);
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
        padding: 0 44px 0 16px;
      }
      input::placeholder {
        @include title-medium();
        color: var(--color-on-surface);
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
        background-color: hsla(0 0% 100% / 0);

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
