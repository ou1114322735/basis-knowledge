<template>
<div class="wrap">
  <div class="app-container">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/About">About</router-link>
  </div>
  <router-view />
</div>
</template>

<script>
import Home from './components/Home.vue'
import About from "./components/About.vue"
export default {
  components: {
    Home,
    About
  }
}
</script>

<style scoped>
  .app-container{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  a{
    padding: 10px 20px;
  }
</style>
