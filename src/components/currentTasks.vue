<script setup></script>

<template>
  <div class="card">
    <h2 class="card__name">Текущие задачи</h2>
    <div class="card__info">
      <div class="card__info__item">
        <span class="material-symbols-outlined blue"> info </span>
        <p>Открыто - 21</p>
      </div>
      <div class="card__info__item">
        <span class="material-symbols-outlined orange"> info </span>
        <p>В работе - 21</p>
      </div>
      <div class="card__info__item">
        <span class="material-symbols-outlined green"> info </span>
        <p>Закрыто - 11</p>
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

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include phone {
      flex-direction: column;
      gap: 16px;
    }

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px;
      height: 48px;
      border-radius: 24px;
      border: 1px solid var(--color-outline);
      padding: 12px 4%;

      @include laptop {
        padding: 12px 1%;
        gap: 2px;
      }
      @include tablet {
        padding: 12px 4%;
      }

      span {
        height: 24px;
        width: 24px;
      }

      .blue {
        color: var(--color-blue);
      }
      .orange {
        color: var(--color-orange);
      }
      .green {
        color: var(--color-green);
      }
      p {
        @include label-button();
        white-space: nowrap;
        color: var(--color-on-secondary-container);
      }
    }
  }
}
</style>
