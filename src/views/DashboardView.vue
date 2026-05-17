<template>
  <div class="page-content">
    <header class="top-bar">
      <div class="logo-circle"></div>
      <h1>CHORE WARS</h1>
      <Bell size="22" />
    </header>

    <main class="content">
      <p class="small-title">CURRENT SKIRMISH</p>

      <section class="skirmish-box">
        <div class="rings">
          <div class="outer-ring"></div>
          <div class="inner-ring"></div>

          <div class="xp-center">
            <h2>VS</h2>
            <p class="purple-xp">1,450 XP</p>
            <p class="green-xp">1,120 XP</p>
          </div>
        </div>

        <div class="lead-badge">
          <Star size="14" fill="#2b1647" />
          <span>LEAD!</span>
        </div>
      </section>

      <section class="section-row">
        <h2>Quick Strike</h2>
        <RouterLink to="/chores">View All</RouterLink>
      </section>

      <section class="quick-list">
        <div class="quick-card">
          <div class="quick-icon purple-icon">
            <WashingMachine size="34" />
          </div>
          <span>LAUNDRY</span>
        </div>

        <div class="quick-card">
          <div class="quick-icon green-icon">
            <Utensils size="34" />
          </div>
          <span>DISHES</span>
        </div>

        <div class="quick-card">
          <div class="quick-icon yellow-icon">
            <Trash2 size="34" />
          </div>
          <span>TRASH</span>
        </div>
      </section>

      <section class="war-title">
        <h2>War Log</h2>
        <button class="floating-button">
          <Swords size="30" />
        </button>
      </section>

      <section class="war-log">
        <div class="log-card purple-border">
          <div class="log-avatar purple-icon">
            <WashingMachine size="30" />
          </div>
          <div class="log-text">
            <h3>Laundry Mountain</h3>
            <p>Finished 2 minutes ago</p>
          </div>
          <span class="log-xp">+50 XP</span>
        </div>

        <div class="log-card green-border">
          <div class="log-avatar green-icon">
            <Utensils size="30" />
          </div>
          <div class="log-text">
            <h3>Crystal Clear Victory</h3>
            <p>Dishes completed successfully</p>
          </div>
          <span class="log-xp">+80 XP</span>
        </div>

        <div class="log-card yellow-border">
          <div class="log-avatar yellow-icon">
            <Trash2 size="30" />
          </div>
          <div class="log-text">
            <h3>Beast Tamer</h3>
            <p>Trash taken out successfully</p>
          </div>
          <span class="log-xp">+40 XP</span>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import {
  WashingMachine,
  Utensils,
  Trash2,
  Swords,
  Star,
  Bell
} from 'lucide-vue-next'

// test firebase import - RADI
// import { db } from "@/services/firebase";
// import { collection, addDoc} from "firebase/firestore";

export default {
  name: 'DashboardView',
  components: {
    WashingMachine,
    Utensils,
    Trash2,
    Swords,
    Star,
    Bell
  }
  }
// test firebase export - RADI//
//   async mounted() {
//     console.log('Dashboard mounted')
//     try {
//       const docRef = await addDoc(collection(db, 'test'), {
//         name: 'Ivana',
//         points: 100
//       })

//       console.log('Document written with ID:', docRef.id)
//     } catch (e) {
//       console.error('Error adding document:', e)
//     }
//   }
// }

</script>

<style scoped>
.page-content {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  color: #241238;
}

.top-bar {
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  box-shadow: 0 8px 22px rgba(80, 40, 120, 0.08);
  color: #7b2cff;
}

.logo-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: radial-gradient(circle, #0f172a, #111827);
  border: 3px solid #7b2cff;
}

.top-bar h1 {
  flex: 1;
  margin: 0;
  font-size: 20px;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 1px;
}

.content {
  padding: 40px 28px 110px;
}

.small-title {
  text-align: center;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 5px;
  color: #8a719e;
  margin-bottom: 28px;
}

.skirmish-box {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
}

.rings {
  position: relative;
  width: 170px;
  height: 170px;
}

.outer-ring,
.inner-ring {
  position: absolute;
  border-radius: 50%;
}

.outer-ring {
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 220deg, #7b2cff 0deg 210deg, #ece3ff 210deg 360deg);
  mask: radial-gradient(circle, transparent 58%, black 60%);
}

.inner-ring {
  inset: 22px;
  border-radius: 50%;
  background: conic-gradient(from 220deg, #00a884 0deg 170deg, #e1f7f0 170deg 360deg);
  mask: radial-gradient(circle, transparent 55%, black 57%);
}

.xp-center {
  position: absolute;
  inset: 42px;
  border-radius: 50%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.xp-center h2 {
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 900;
}

.xp-center p {
  margin: 2px 0;
  font-size: 12px;
  font-weight: 900;
}

.lead-badge {
  position: absolute;
  top: -2px;
  right: 52px;
  display: flex;
  align-items: center;
  gap: 4px;
  transform: rotate(8deg);
  background: #ffd400;
  color: #2b1647;
  padding: 6px 10px;
  border-radius: 14px;
  font-size: 10px;
  font-weight: 900;
  box-shadow: 0 6px 14px rgba(255, 212, 0, 0.35);
}

.section-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.section-row h2,
.war-title h2 {
  margin: 0;
  font-size: 27px;
  font-weight: 900;
}

.section-row a {
  color: #7b2cff;
  font-size: 15px;
  font-weight: 900;
  text-decoration: none;
}

.quick-list {
  display: flex;
  gap: 18px;
  margin-bottom: 48px;
}

.quick-card {
  flex: 1;
  height: 118px;
  background: white;
  border-radius: 25px;
  box-shadow: 0 12px 25px rgba(80, 40, 120, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.quick-card span {
  font-size: 14px;
  font-weight: 900;
  color: #241238;
}

.quick-icon,
.log-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quick-icon {
  width: 62px;
  height: 62px;
  border-radius: 50%;
}

.purple-icon {
  background: #eadcff;
  color: #7b2cff;
}

.green-icon {
  background: #ccf6e9;
  color: #00846f;
}

.yellow-icon {
  background: #fff0b8;
  color: #a97700;
}

.war-title {
  position: relative;
  margin-bottom: 20px;
}

.floating-button {
  position: absolute;
  right: 2px;
  top: -16px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  box-shadow: 0 16px 28px rgba(123, 44, 255, 0.35);
}

.war-log {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.log-card {
  position: relative;
  min-height: 86px;
  background: #fffaff;
  border-radius: 22px;
  padding: 16px 20px 16px 94px;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 22px rgba(80, 40, 120, 0.08);
  overflow: hidden;
}

.log-card::before {
  content: "";
  position: absolute;
  left: 0;
  width: 6px;
  height: 100%;
}

.purple-border::before {
  background: #7b2cff;
}

.green-border::before {
  background: #00a884;
}

.yellow-border::before {
  background: #ffd400;
}

.log-avatar {
  position: absolute;
  left: 22px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
}

.log-text h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 900;
}

.log-text p {
  margin: 6px 0 0;
  color: #6d5d7d;
  font-size: 14px;
}

.log-xp {
  margin-left: auto;
  color: #7b2cff;
  font-size: 18px;
  font-weight: 900;
  white-space: nowrap;
}
</style>