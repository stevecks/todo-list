<script setup>
import Header from './components/header.vue'
import Tasks from './components/tasks.vue'
import TaskBoard from './components/taskBoard.vue'
import Footer from './components/footer.vue'
import Popup from './components/popup.vue'
</script>

<template>
  <Popup></Popup>
  <Header></Header>
  <Tasks></Tasks>
  <TaskBoard></TaskBoard>
  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
