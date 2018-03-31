<template>
  <div id="app" class="container">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from "../src/components/Nav.vue"
export default {
  name: 'App',
  components: {navbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
