<script setup>
import Header from './components/header.vue'
import Tasks from './components/tasks.vue'
</script>

<template>
  <Header></Header>
  <Tasks></Tasks>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    margin-inline: 64px;
    width: 1220px;
    height: 100%;

    @media (max-width: 1220px) {
    }
    @media (max-width: 640px) {
      margin-inline: 16px;
    }
  }
}

// $color: lightcoral;

// .container {
//   --columns: 12;
//   --colomns-width: 78px;
//   --offset: 1fr;
//   height: 100%;
//   // width: 100%;
//   // padding-inline: 64px;
//   // margin-inline: auto;
//   margin-inline: 64px;
//   display: grid;
//   // grid-template-columns: var(--offset) repeat(var(--columns), var(--colomns-width)) var(--offset);
//   grid-template-columns: repeat(var(--columns), var(--colomns-width));
//   justify-content: center;
//   grid-auto-rows: min-content;
//   grid-auto-flow: row;
//   gap: 24px;
//   // transition: all 3s ease-out;

//   @media (max-width: 1220px) {
//     grid-template-columns: repeat(var(--columns), 1fr);
//     margin-inline: 64px;
//   }
//   @media (max-width: 640px) {
//     grid-template-columns: repeat(8, 1fr);
//     gap: 20px;
//     margin-inline: 16px;
//   }
// }

// .section {
//   grid-template-columns: subgrid;
//   grid-column: span 6;
//   padding: 20px;
//   background-color: lightcoral;

//   @media (max-width: 640px) {
//     grid-column: span 4;
//   }

//   &--big {
//     grid-column: span 12;

//     @media (max-width: 640px) {
//       grid-column: span 8;
//     }
//   }
// }
</style>
