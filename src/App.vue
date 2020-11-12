<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Shared/Catbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>