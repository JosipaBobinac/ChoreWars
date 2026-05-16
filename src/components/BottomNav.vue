<template>
  <nav class="bottom-nav">
   
    <RouterLink 
      v-for="item in navItems" 
      :key="item.path"
      :to="item.path" 
      custom 
      v-slot="{ navigate, isExactActive }"
    >
      <button
        type="button"
        class="nav-item"
        :class="{ active: isExactActive }"
        @click="navigate"
      >
        <div class="icon-wrapper">

          <component :is="item.icon" :size="20" />
        </div>
        <span class="nav-label">{{ item.label }}</span>
      </button>
    </RouterLink>
  </nav>
</template>

<script>
import { LayoutGrid, Swords, Trophy, User } from "lucide-vue-next";

export default {
  name: "BottomNav",
  
  components: {
    LayoutGrid,
    Swords,
    Trophy,
    User,
  },

  data() {
    return {
      navItems: [
        { path: '/dashboard', label: 'DASHBOARD', icon: 'LayoutGrid' },
        { path: '/chores', label: 'CHORES', icon: 'Swords' },
        { path: '/leaderboard', label: 'LEADERBOARD', icon: 'Trophy' },
        { path: '/profile', label: 'PROFILE', icon: 'User' },
      ]
    };
  }
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  
  width: 100%;
  max-width: 400px;
  height: 80px;
  
  background: white;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.05);
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10px;
}

.nav-item {
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 12px 16px;
  border-radius: 18px;
  transition: all 0.3s ease;
  gap: 4px; 
}

.nav-item :deep(svg) {
  color: #8e94bb; 
  stroke: #8e94bb;
}

.nav-label {
  color: #8e94bb;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.nav-item.active {
  background-color: #f3ebff;
}

.nav-item.active :deep(svg) {
  color: #7b2cff;
  stroke: #7b2cff;
}

.nav-item.active .nav-label {
  color: #7b2cff;
}


.nav-item:hover:not(.active) {
  background-color: #f8f9fa;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>