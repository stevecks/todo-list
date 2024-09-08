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
  background-color: #fff;

  @include phone {
    padding: 24px;
  }

  &__name {
    line-height: 32px;
    font-size: 24px;
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: bold;
    color: #333333;
    margin-bottom: 24px;

    @include tablet {
      line-height: 26px;
      font-size: 18px;
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
      border: 1px solid #eaeaea;
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
        color: #26a1de;
      }
      .orange {
        color: #ff6600;
      }
      .green {
        color: #4db849;
      }
      p {
        line-height: 24px;
        font-size: 14px;
        white-space: nowrap;
        font-family: 'PT Sans Caption', sans-serif;
        font-weight: bold;
        color: #333333;
      }
    }
  }
}
</style>
