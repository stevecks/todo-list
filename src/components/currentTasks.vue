<script setup></script>

<template>
  <div class="card">
    <h2 class="card__name">Текущие задачи</h2>
    <div class="card__info">
      <div class="card__info__item">
        <span class="material-symbols-outlined"> info </span>
        <p class="text">Открыто - 21</p>
      </div>
      <div class="card__info__item">
        <span class="material-symbols-outlined"> info </span>
        <p class="text">В работе - 21</p>
      </div>
      <div class="card__info__item">
        <span class="material-symbols-outlined"> info </span>
        <p class="text">Закрыто - 11</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 40px 24px;
  border-radius: 48px;
  background-color: #fff;

  @media (max-width: 640px) {
    padding: 24px;
  }

  &__name {
    line-height: 32px;
    font-size: 24px;
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: bold;
    color: #333333;
    margin-bottom: 24px;

    @media (max-width: 992px) {
      line-height: 26px;
      font-size: 18px;
    }
  }

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 640px) {
      flex-direction: column;
      gap: 16px;
    }

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px; //8px
      height: 48px;
      border-radius: 24px;
      border: 1px solid #eaeaea;
      padding: 12px 4%; //24px
      @media (max-width: 1221px) {
        padding: 12px 1%;
        gap: 2px;
      }
      @media (max-width: 992px) {
        padding: 12px 4%;
      }

      span {
        height: 24px;
        width: 24px;
      }
      .text {
        line-height: 24px; //24px
        font-size: 14px; //16px
        white-space: nowrap;
        font-family: 'PT Sans Caption', sans-serif;
        font-weight: bold;
        color: #333333;
      }
    }
  }
}
</style>
