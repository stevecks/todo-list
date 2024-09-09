<script setup>
import Container from './container.vue'
</script>
<template>
  <Container class="container">
    <div class="board-section">
      <p class="label">Доска задач</p>
      <div class="board">
        <div class="board__item">
          <div class="board__status">
            <p>Открыто</p>
          </div>
          <div class="card-task">
            <div class="card-task__item">
              <p>Сварить пельмени</p>
            </div>
            <div class="card-task__item">
              <p>Поднять инфрастуктуру проекта</p>
            </div>
          </div>
        </div>
        <div class="board__item">
          <div class="board__status">
            <p>Открыто</p>
          </div>
          <div class="card-task">
            <div class="card-task__item">
              <p>Сварить пельмени</p>
            </div>
            <div class="card-task__item">
              <p>Поднять инфрастуктуру проекта</p>
            </div>
          </div>
        </div>
        <div class="board__item">
          <div class="board__status">
            <p>Открыто</p>
          </div>
          <div class="card-task">
            <div class="card-task__item">
              <p>Сварить пельмени</p>
            </div>
            <div class="card-task__item">
              <p>Поднять инфрастуктуру проекта</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
<style scoped lang="scss">
@import '../scss/mixins';

.container {
  background-color: #ffffff;
  @include tablet {
    display: none;
  }
}

.board-section {
  margin-block: 60px;
  .label {
    @include display-large();
    color: #333333;
    margin-bottom: 48px;
  }
}

.board {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 24px;

  .board__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .board__status {
      height: 48px;
      width: min-content;
      border-radius: 24px;
      background-color: #eaeaea;
      display: flex;
      align-items: center;
      padding-inline: 24px;
      p {
        line-height: 28px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'PT Sans Caption', sans-serif;
        color: #333333;
      }
    }
  }
  .card-task {
    width: 100%;
    flex-grow: 1;
    min-height: 280px;
    padding: 16px;
    border-radius: 24px;
    background-color: #eaeaea80;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 16px;
    &__item {
      padding: 24px 32px;
      border-radius: 24px;
      background-color: #fff;
      border: 2px solid #eaeaea;
      p {
        @include label-small();
        color: #333333;
      }
    }
  }
}
</style>
