<template>
  <div class="profile-page">
    <div class="mobile-page">

      <header class="top-bar">
        <div class="logo-circle"></div>

        <h1>CHOREWARS</h1>

        <Bell size="20" />
      </header>

      <main class="content">

        <section class="profile-header">
          <div class="profile-info">
            <p><strong>Avatar:</strong> Lady Vacuum</p>
            <p><strong>Total Points:</strong> 2,850 XP</p>
          </div>

          <div class="avatar-box">
            <UserRound size="60" />
          </div>
        </section>

        <section class="tasks-box">
          <h2>Task left to complete:</h2>

          <div class="task-card">
            <div class="task-icon purple-icon">
              <BrushCleaning size="28" />
            </div>

            <div class="task-content">
              <span class="difficulty">MEDIUM</span>

              <h3>Vacuum Hallway</h3>

              <p>+50 XP</p>
            </div>
          </div>

          <div class="task-card">
            <div class="task-icon gray-icon">
              <Cat size="28" />
            </div>

            <div class="task-content">
              <span class="difficulty">MEDIUM</span>

              <h3>Feed Cat</h3>

              <p>+50 XP</p>
            </div>
          </div>
        </section>

        <div class="settings-link">
          Settings
        </div>

      </main>

      <BottomNav />

    </div>
  </div>
</template>

<script>
import {
  Bell,
  UserRound,
  BrushCleaning,
  Cat
} from 'lucide-vue-next'

import BottomNav from '../components/BottomNav.vue'

export default {
  name: 'ProfileView',

  components: {
    Bell,
    UserRound,
    BrushCleaning,
    Cat,
    BottomNav
  }
}
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  font-family: Arial, sans-serif;
}

.mobile-page {
  width: 390px;
  min-height: 100vh;
  background: white;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
}

.top-bar {
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #7b2cff;
  box-shadow: 0 8px 22px rgba(80, 40, 120, 0.08);
}

.logo-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: radial-gradient(circle, #0f172a, #111827);
  border: 2px solid #7b2cff;
}

.top-bar h1 {
  flex: 1;
  margin: 0;
  font-size: 20px;
  font-style: italic;
  font-weight: 900;
}

.content {
  padding: 26px 18px 120px;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 80px;
}

.profile-info p {
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 700;
  color: #1e1230;
}

.avatar-box {
  width: 104px;
  height: 104px;
  border-radius: 20px;
  background: #73b6b4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e1230;
}

.tasks-box {
  background: #eedfff;
  border-radius: 30px;
  padding: 18px 14px;
}

.tasks-box h2 {
  margin: 0 0 18px;
  font-size: 16px;
  font-weight: 900;
  color: #1e1230;
}

.task-card {
  width: 250px;
  min-height: 72px;
  background: #dfc3f7;
  border-radius: 28px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.task-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.purple-icon {
  background: #f3e6ff;
  color: #7b2cff;
}

.gray-icon {
  background: #f3edf8;
  color: #9f92ad;
}

.task-content h3 {
  margin: 4px 0 4px;
  font-size: 16px;
  font-weight: 800;
  color: #2a183d;
}

.task-content p {
  margin: 0;
  color: #009b7a;
  font-size: 13px;
  font-weight: 900;
}

.difficulty {
  display: inline-block;
  background: #756300;
  color: white;
  border-radius: 999px;
  padding: 3px 8px;
  font-size: 8px;
  font-weight: 900;
}

.settings-link {
  margin-top: 120px;
  text-align: right;
  font-size: 15px;
  font-weight: 800;
  color: #111111;
}
</style>