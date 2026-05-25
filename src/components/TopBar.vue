<template>
    <header class="top-bar">

    <div class="left-side">
      <div class="logo-circle"></div>
      <h1>CHORE WARS</h1>
    </div>
    <Bell size="22" />

    </header>
</template>

<script>
import { Bell } from 'lucide-vue-next'

export default {
  name: 'TopBar',
  components: {
    Bell
  }
}

</script>

<style scoped>
.top-bar {
  height: 72px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  background: white;
  box-shadow: 0 8px 22px rgba(80, 40, 120, 0.08);
  color: #7b2cff;
}

.left-side {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: radial-gradient(circle, #0f172a, #111827);
  border: 3px solid #7b2cff;
}

h1 {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1px;
}

</style>