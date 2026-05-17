<template>
  <div class="page-content">
    <header class="top-bar">
      <div class="logo-circle"></div>
      <h1>CHORE WARS</h1>
      <Bell size="22" />
    </header>

    <main class="content">
      <div class="search-box">
        <SearchIcon size="20" />
        <span>Search your next quest </span>
      </div>

      <section class="filter-row">
        <button class="filter active">All Chores</button>
        <button class="filter">Daily</button>
        <button class="filter">Weekly</button>
      </section>

      <section class="hero-card">
        <span class="difficulty hard">HARD</span>

        <div class="bonus-card">
          <span>BONUS</span>
          <strong>+150 XP</strong>
        </div>

        <h2>Clean Complete Kitchen</h2>
        <p>Clear all dishes, wipe surfaces, and defeat the trash bin.</p>

        <button class="claim-button">Claim Quest</button>
      </section>

      <section class="chore-card easy">
        <span class="difficulty easy-label">EASY</span>
        <h3>Wash Dishes</h3>
        <p>+20 XP</p>
        <RouterLink to="/submit-proof" class="complete-button">
          Complete
        </RouterLink>
      </section>

      <section class="chore-card medium">
        <span class="difficulty medium-label">MEDIUM</span>
        <h3>Feed the Familiars</h3>
        <p>+45 XP</p>
        <RouterLink to="/submit-proof" class="complete-button">
          Complete
        </RouterLink>
      </section>

      <section class="weekly-card">

        <div class="weekly-top">
          <div>
          <h3>Weekly Raid: Laundry</h3>
          <p>4/5 Loads completed</p>
        </div>

        <strong>+300 XP</strong>
        </div>

        <div class="progress-track">
          <div class="progress-fill"></div>
        </div>

        <button class="continue-button">
          Continue Progress <ArrowRight size="18" />
        </button>
      </section>

      <section class="small-task-card">
        <div class="small-icon">
          <Sparkles size="30" />
        </div>

        <div>
          <span>MEDIUM</span>
          <h3>Vacuum Hallway</h3>
          <p>+50 XP</p>
        </div>

        <button class="plus-button">
          <Plus size="28" />
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import {
  Bell,
  Search as SearchIcon,
  ArrowRight,
  Plus,
  Sparkles
} from 'lucide-vue-next'

export default {
  name: 'ChoresView',
  components: {
    Bell,
    SearchIcon,
    ArrowRight,
    Plus,
    Sparkles
  }
}
</script>

<style scoped>
.page-content {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #fff8ff 0%, #fff1ff 100%);
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
  padding: 24px 24px 120px;
}

.search-box {
  height: 62px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f7eaff;
  color: #8a719e;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 24px;
}

.filter-row {
  display: flex;
  gap: 14px;
  margin-bottom: 34px;
  overflow-x: auto;
}

.filter {
  border: none;
  padding: 12px 24px;
  border-radius: 22px;
  background: #eadcff;
  color: #6d5d7d;
  font-weight: 900;
}

.filter.active {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  box-shadow: 0 10px 20px rgba(123, 44, 255, 0.28);
}

.hero-card {
  position: relative;
  min-height: 280px;
  padding: 34px 34px 30px;
  border-radius: 36px;
  background: linear-gradient(135deg, #ffffff 0%, #effff7 100%);
  box-shadow: 0 18px 34px rgba(80, 40, 120, 0.12);
  margin-bottom: 28px;
}

.difficulty {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 18px;
  color: white;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
}

.hard {
  background: #ff3f6c;
}

.bonus-card {
  position: absolute;
  top: 36px;
  right: 28px;
  width: 104px;
  height: 104px;
  border-radius: 18px;
  background: #ffd400;
  color: #2b1647;
  transform: rotate(10deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(255, 212, 0, 0.38);
}

.bonus-card span {
  font-size: 12px;
  font-weight: 900;
}

.bonus-card strong {
  font-size: 25px;
  font-weight: 900;
  text-align: center;
}

.hero-card h2 {
  max-width: 210px;
  margin: 28px 0 14px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 900;
}

.hero-card p {
  max-width: 250px;
  margin: 0 0 32px;
  color: #6d5d7d;
  font-size: 17px;
  line-height: 1.45;
  font-weight: 700;
}

.claim-button {
  width: 190px;
  height: 62px;
  border: none;
  border-radius: 32px;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  font-size: 18px;
  font-weight: 900;
  box-shadow: 0 14px 26px rgba(123, 44, 255, 0.34);
  float: right;
}

.chore-card {
  position: relative;
  padding: 28px 28px 30px;
  border-radius: 30px;
  background: #ead0ff;
  margin-bottom: 24px;
  box-shadow: 0 10px 22px rgba(80, 40, 120, 0.08);
}

.easy-label {
  background: #00846f;
}

.medium-label {
  background: #8a6a00;
}

.chore-card h3 {
  margin: 18px 0 6px;
  font-size: 24px;
  font-weight: 900;
}

.chore-card p {
  margin: 0 0 20px;
  color: #00846f;
  font-weight: 900;
}

.complete-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  border-radius: 28px;
  background: #39ead1;
  color: #241238;
  font-size: 17px;
  font-weight: 900;
  text-decoration: none;
}

.weekly-card {
  padding: 30px;
  border-radius: 30px;
  background: #fff8ff;
  box-shadow: 0 10px 22px rgba(80, 40, 120, 0.1);
  margin-bottom: 26px;
}

.weekly-card h3 {
  margin: 0;
  font-size: 25px;
  font-weight: 900;
}

.weekly-card p {
  margin: 5px 0 0;
  color: #6d5d7d;
  font-weight: 700;
}

.weekly-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.weekly-top strong {
  color: #7b2cff;
  font-size: 22px;
  font-weight: 900;
}

.progress-track {
  height: 16px;
  margin: 30px 0 22px;
  background: #eadcff;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  width: 78%;
  height: 100%;
  background: #00846f;
  border-radius: 999px;
}

.continue-button {
  margin-left: auto;
  border: none;
  background: transparent;
  color: #7b2cff;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 900;
}

.small-task-card {
  min-height: 100px;
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 18px;
  background: #eadcff;
  border-radius: 28px;
  position: relative;
}

.small-icon {
  width: 62px;
  height: 62px;
  border-radius: 18px;
  background: white;
  color: #7b2cff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.small-task-card span {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  background: #8a6a00;
  color: white;
  font-size: 10px;
  font-weight: 900;
}

.small-task-card h3 {
  margin: 8px 0 2px;
  font-size: 20px;
  font-weight: 900;
}

.small-task-card p {
  margin: 0;
  color: #00846f;
  font-weight: 900;
}

.plus-button {
  margin-left: auto;
  width: 58px;
  height: 58px;
  border: none;
  border-radius: 50%;
  background: #39ead1;
  color: #241238;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>