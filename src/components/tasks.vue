<script setup>
import Container from './container.vue'
</script>
<template>
  <Container class="container">
    <div class="tasks-section">
      <div class="card">
        <h2 class="card__name">Текущие задачи</h2>
        <div class="card__info">
          <div class="card__info__item">
            <span class="material-symbols-outlined"> info </span>
            <p class="text">Открыто - 2</p>
          </div>
          <div class="card__info__item">
            <span class="material-symbols-outlined"> info </span>
            <p class="text">В работе - 2</p>
          </div>
          <div class="card__info__item">
            <span class="material-symbols-outlined"> info </span>
            <p class="text">Закрыто - 1</p>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card__name">Добавить задачу</h2>
        <div class="card__search">
          <button class="card__search__button">
            <span class="material-symbols-outlined">add</span>
          </button>
          <div class="input">
            <input type="text" />
          </div>
          <!-- <input type="text" /> -->
        </div>
      </div>
      <div class="card card--big"></div>
    </div>
  </Container>
</template>
<style lang="scss">
.tasks-section {
  width: 100%;
  margin: 0 0 64px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 60px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.card {
  padding: 40px 20px;
  border-radius: 48px;
  background-color: #fff;
  grid-column: span 1;

  &--big {
    grid-column: span 2;
    @media (max-width: 992px) {
      grid-column: span 1;
    }
  }

  &__name {
    line-height: 32px;
    font-size: 24px;
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: bold;
    color: #333333;
    margin-bottom: 24px;
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
      padding: 12px 24px; //24px
      @media (max-width: 1221px) {
        padding: 12px 2%;
      }
      @media (max-width: 992px) {
        padding: 12px 5%;
      }

      span {
        height: 24px;
        width: 24px;
      }
      .text {
        line-height: 24px; //24px
        font-size: 14px; //16px
        font-stretch: ultra-expanded;
        font-family: 'PT Sans Caption', sans-serif;
        font-weight: bold;
        color: #333333;
      }
    }
  }

  &__search {
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

      span {
        height: 24px;
        width: 24px;
        color: #ffffff;
      }
    }

    .input {
      flex: auto;

      input {
        height: 48px;
        width: 100%;
        border: 1px solid #eaeaea;
        border-radius: 24px;
        background-color: none;
      }
    }
  }
}

.container {
  background-color: #eaeaea;
}
</style>
