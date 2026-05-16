<template>
  <div id="app">
    <div class="app-container">
      <router-view />
      
      <BottomNav />
    </div>
  </div>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";

export default {
  name: 'App',
  components: {
    BottomNav
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.app-container {
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  background-color: #ffffff;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}
</style>